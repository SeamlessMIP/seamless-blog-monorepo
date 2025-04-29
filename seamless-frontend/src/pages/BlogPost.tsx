// src/pages/BlogPost.tsx

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { BlogHero } from '@/components/blog/BlogHero'
import BlogContent from '@/components/blog/BlogContent'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { sanityClient } from '@/lib/sanityClient'

// GROQ query string mapping schema fields to UI props
const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  subheading,
  publishedAt,
  category,
  "heroImage": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
  metaTitle,
  metaDescription,
  body,
  "slug": slug.current,
  excerpt
}`

type HeroImage = { url: string; alt?: string }

type Post = {
  title: string
  subheading?: string
  publishedAt: string
  category: string
  heroImage?: HeroImage
  metaTitle?: string
  metaDescription?: string
  body: any[]
  slug: string
  excerpt?: string
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    if (slug) {
      console.log('Fetching post with slug:', slug)
      sanityClient
        .fetch(postQuery, { slug })
        .then((data) => {
          console.log('Received post data:', data)
          setPost(data)
        })
        .catch((err) => console.error('Sanity fetch error:', err))
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Navigation />
        <main className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Loading…</h1>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        {post.metaDescription && (
          <meta name="description" content={post.metaDescription} />
        )}
      </Helmet>
      <Navigation />

      <main>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            className="text-orange-600 -ml-2 hover:bg-orange-50"
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        <BlogHero
          title={post.title}
          subheading={post.subheading}
          publishedDate={post.publishedAt}
          category={post.category}
          heroImage={post.heroImage}
        />

        <BlogContent blocks={post.body} />

        <RelatedPosts
          currentPostId={post.slug}
          category={post.category}
          posts={[]} // fetch and pass real related posts as needed
        />
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  )
}

export default BlogPost
