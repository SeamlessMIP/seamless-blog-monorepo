
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

    // Get the webhook payload from Sanity
    const payload = await req.json();
    console.log('Received webhook from Sanity:', payload);

    // Verify webhook secret if needed
    // const secret = req.headers.get('x-sanity-webhook-secret');
    // if (secret !== Deno.env.get('SANITY_WEBHOOK_SECRET')) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    //   });
    // }

    // Check if this is a publish or unpublish event
    if (!payload.ids || !payload.operation) {
      return new Response(JSON.stringify({ error: 'Invalid webhook payload' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Process the document IDs that were affected
    const ids = payload.ids;
    const operation = payload.operation;
    
    // A simple implementation example - in reality, you might want to fetch the full document from Sanity API
    if (operation === 'create' || operation === 'update') {
      // Assuming the payload contains the full document data
      if (payload.result && payload.result._type === 'post') {
        const post = payload.result;
        
        // Convert Sanity data to our database structure
        const blogPost = {
          title: post.title,
          slug: post.slug?.current || '',
          content: post.content || post.body || '', // Depending on your Sanity schema
          excerpt: post.excerpt,
          featured_image: post.mainImage?.asset?._ref ? `https://cdn.sanity.io/images/${post.mainImage.asset._ref}` : null,
          category: post.categories?.[0]?.title || '',
          author: post.author?.name || '',
          published_at: post._updatedAt || new Date().toISOString(),
          status: post.published ? 'published' : 'draft',
          seo_title: post.seo?.title || post.title,
          seo_description: post.seo?.description || post.excerpt,
          seo_keywords: post.seo?.keywords || []
        };

        // Upsert the blog post to the database
        const { data, error } = await supabase
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

        return new Response(JSON.stringify({ success: true, operation, id: post._id }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    } else if (operation === 'delete' || operation === 'unpublish') {
      // Handle deletion or unpublishing
      // You would need the document ID or slug from Sanity
      // For this example, let's assume we have the slug
      if (payload.slug) {
        const { error } = await supabase
          .from('blog_posts')
          .update({ status: 'draft' })
          .eq('slug', payload.slug);

        if (error) {
          console.error('Error updating blog post status:', error);
          return new Response(JSON.stringify({ error: 'Database error' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
      }
    }

    return new Response(JSON.stringify({ success: true }), {
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
