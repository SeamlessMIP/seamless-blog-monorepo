// src/components/blog/BlogPostContent.tsx

import React from 'react'
import { PortableText } from '@portabletext/react'
import type {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { cn } from '@/lib/utils'

export type BlogContentProps = {
  blocks: PortableTextBlock[]
  className?: string
}

// Annotation type including required _type
type LinkAnnotation = { _type: 'link'; href: string }

// Components configured as Partial of PortableTextReactComponents
const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl mt-12 mb-6 font-playfair font-bold text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl mt-8 mb-4 font-playfair font-bold text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-playfair font-bold text-gray-900">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-6 leading-relaxed text-gray-700">{children}</p>
    ),
    // Render a horizontal rule as a page break
    pageBreak: () => (
      <hr
        className="my-8 border-t border-gray-300"
        style={{ pageBreakAfter: 'always' }}
      />
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: PortableTextMarkComponentProps) => (
      <em className="text-gray-800">{children}</em>
    ),
    link: ({ children, value }: PortableTextMarkComponentProps<LinkAnnotation>) => {
      const href = value?.href ?? '#'
      return (
        <a href={href} className="text-orange-600 hover:underline">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: any) => {
      // Add debug logging
      console.log('Image value:', value)
      
      if (!value?.asset?._ref) {
        console.warn('Image missing asset reference')
        return null
      }

      // Convert Sanity image reference to URL
      const imageRef = value.asset._ref
      const [_file, id, dimensions, extension] = imageRef.split('-')
      const [width, height] = dimensions.split('x')
      const url = `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/production/${id}-${dimensions}.${extension}`

      return (
        <img
          src={url}
          alt={value.alt ?? ''}
          width={width}
          height={height}
          className="rounded-xl shadow-md my-6 mx-auto"
        />
      )
    },
  },
}

const BlogContent: React.FC<BlogContentProps> = ({ blocks, className }) => {
  // Add debug logging
  console.log('Blocks:', blocks)
  
  return (
    <article className={cn('prose prose-lg max-w-4xl mx-auto px-4', className)}>
      <PortableText value={blocks} components={components} />
    </article>
  )
}

export default BlogContent
