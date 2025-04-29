// src/pages/Blog.tsx

import React, { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BlogListHero } from '@/components/blog/BlogListHero'
import { BlogFilterBar } from '@/components/blog/BlogFilterBar'
import { BlogPostGrid } from '@/components/blog/BlogPostGrid'
import { sanityClient } from '@/lib/sanityClient'

// Define the shape of a post as our UI needs it
type Post = {
  id: string
  title: string
  subheading?: string
  date: string
  category: string
  excerpt?: string
  slug: string
  heroImage?: string
}

// GROQ query to fetch all posts with the fields we need
const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  subheading,
  "date": publishedAt,
  "category": category->title,
  excerpt,
  "slug": slug.current,
  "heroImage": thumbnail.asset->url
}`

export default function Blog() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  // Fetch posts on mount
  useEffect(() => {
    console.log('Fetching posts...')  // Add logging
    sanityClient
      .fetch(postsQuery)
      .then((data: any[]) => {
        console.log('Received data:', data)  // Add logging
        // Map the raw doc into our Post type
        const posts: Post[] = data.map((doc) => ({
          id: doc._id,
          title: doc.title,
          subheading: doc.subheading,
          date: doc.date,
          category: doc.category,
          excerpt: doc.excerpt,
          slug: doc.slug,
          heroImage: doc.heroImage,
        }))
        setAllPosts(posts)
      })
      .catch((err) => console.error('Sanity fetch error:', err))
  }, [])

  // Derive unique categories for the filter dropdown
  const categories = Array.from(new Set(allPosts.map((p) => p.category)))

  // Apply category filter
  const filtered = selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts

  // Apply sort order
  const sorted = filtered.sort((a, b) => {
    const aTime = new Date(a.date).getTime()
    const bTime = new Date(b.date).getTime()
    return sortOrder === 'newest' ? bTime - aTime : aTime - bTime
  })

  // Date formatting function
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  // Reset filters to defaults
  const onResetFilters = () => {
    setSelectedCategory('')
    setSortOrder('newest')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Hero */}
          <BlogListHero />

          {/* Filter & Sort Controls */}
          <BlogFilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            setSortOrder={(val) => setSortOrder(val as 'newest' | 'oldest')}
            categories={categories}
          />

          {/* Posts Grid */}
          <BlogPostGrid
            posts={sorted.map((p) => ({
              id: p.id,
              title: p.title,
              category: p.category,
              date: p.date,
              excerpt: p.excerpt || '',
              slug: p.slug,
              heroImage: p.heroImage,
              subheading: p.subheading,
            }))}
            formatDate={formatDate}
            onResetFilters={onResetFilters}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}