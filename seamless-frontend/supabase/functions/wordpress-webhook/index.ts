
// Follow Deno Edge Function syntax
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Set up CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create Supabase client
const supabaseUrl = 'https://egcxdjwblnylkrttfcjq.supabase.co';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Webhook secret (should be set as a secure environment variable)
const WEBHOOK_SECRET = Deno.env.get('WORDPRESS_WEBHOOK_SECRET') || '';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Only allow POST requests for the webhook
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Get the webhook payload from WordPress
    const payload = await req.json();
    console.log('Received webhook from WordPress:', payload);

    // Verify webhook secret if provided
    const secret = req.headers.get('x-wordpress-webhook-secret');
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if this is a post notification
    if (!payload.post) {
      return new Response(JSON.stringify({ error: 'Invalid webhook payload - no post data' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Process WordPress post data
    const post = payload.post;
    const action = payload.action || 'publish'; // publish, update, trash, etc.
    
    // Convert WordPress post to our blog post format
    const blogPost = {
      title: post.title || '',
      slug: post.slug || post.post_name || `post-${post.ID}`,
      content: post.content || '',
      excerpt: post.excerpt || post.post_excerpt || '',
      featured_image: post.featured_image || post.thumbnail || '',
      category: post.categories?.[0]?.name || post.category_names?.[0] || 'Uncategorized',
      author: post.author?.display_name || post.author_name || '',
      published_at: post.date || new Date().toISOString(),
      status: action === 'trash' ? 'draft' : (post.status === 'publish' ? 'published' : 'draft'),
      seo_title: post.seo?.title || post.title || '',
      seo_description: post.seo?.description || post.excerpt || post.post_excerpt || '',
      seo_keywords: post.seo?.keywords || []
    };

    // Handle different actions
    if (action === 'trash') {
      // Mark as draft instead of deleting
      const { error } = await supabase
        .from('blog_posts')
        .update({ status: 'draft', updated_at: new Date().toISOString() })
        .eq('slug', blogPost.slug);

      if (error) {
        console.error('Error updating blog post status:', error);
        return new Response(JSON.stringify({ error: 'Database error' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    } else {
      // Upsert the blog post (create or update)
      const { error } = await supabase
        .from('blog_posts')
        .upsert({
          ...blogPost,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'slug'
        });

      if (error) {
        console.error('Error upserting blog post:', error);
        return new Response(JSON.stringify({ error: 'Database error' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Successfully processed ${action} action for post: ${blogPost.title}`
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
