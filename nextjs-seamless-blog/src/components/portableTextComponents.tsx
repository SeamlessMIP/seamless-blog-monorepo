// src/app/components/portableTextComponents.tsx

import { type PortableTextComponents } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from '@/app/sanity/client'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const { projectId, dataset } = client.config()
const urlFor = (source: Image) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null
      const url = urlFor(value)?.url()
      if (!url) return null
      return <img src={url} alt={value.alt || ''} className="w-full rounded-md my-4" />
    },
    codeBlock: ({ value }) => (
      <SyntaxHighlighter
        style={dracula}
        language={value?.language || 'javascript'}
        className="rounded-md my-4"
      >
        {value?.code || ''}
      </SyntaxHighlighter>
    ),
    callToAction: ({ value }) => (
      <div className="bg-blue-100 p-6 rounded-md my-4 text-center">
        <Link href={value?.link || '#'} target={value?.openInNewTab ? '_blank' : '_self'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            {value?.text}
          </button>
        </Link>
      </div>
    ),
    pageBreak: ({ value }) => (
      <div className="w-full my-8">
        {value?.decorativeLine && <hr className="border-t-2 border-gray-300" />}
        <div className="text-center italic text-sm text-gray-500">Page Break</div>
        {value?.decorativeLine && <hr className="border-t-2 border-gray-300 mt-2" />}
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  block: {
    normal: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mb-1">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-1 rounded font-mono text-sm">{children}</code>,
    link: ({ value, children }) => {
      const href = value?.href || ''
      return href ? (
        <a href={href} className="text-blue-500 hover:underline">
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )
    },
  },
}
