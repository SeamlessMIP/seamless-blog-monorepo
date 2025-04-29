// src/components/blog/BlogHero.tsx

import { Calendar, Tag } from 'lucide-react'
import { Image } from '@/components/ui/image'
import React from 'react'

// Accept either a URL string or an object with url and alt text
type HeroImage = string | { url: string; alt?: string }

type BlogHeroProps = {
  title: string
  subheading?: string
  publishedDate: string   // this will receive post.publishedAt
  category: string
  heroImage?: HeroImage   // support string or object from CMS
}

export function BlogHero({
  title,
  subheading,
  publishedDate,
  category,
  heroImage,
}: BlogHeroProps) {
  // Format the published date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Derive image source & alt text
  let imageSrc: string | undefined
  let imageAlt = title

  if (heroImage) {
    if (typeof heroImage === 'string') {
      imageSrc = heroImage
    } else {
      imageSrc = heroImage.url
      imageAlt = heroImage.alt ?? title
    }
  }

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Image */}
      {imageSrc && (
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Category & Date */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="inline-flex items-center bg-orange-100 text-orange-800 text-sm font-medium rounded px-2.5 py-0.5">
          <Tag className="h-4 w-4 mr-1" />
          {category}
        </span>
        <span className="inline-flex items-center text-gray-600 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(publishedDate)}
        </span>
      </div>

      {/* Title & Subheading */}
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
        {title}
      </h1>
      {subheading && (
        <p className="text-xl text-gray-600 md:text-2xl leading-relaxed">
          {subheading}
        </p>
      )}
    </section>
  )
}
