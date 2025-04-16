// src/app/[slug]/page.tsx

import { PortableText, type PortableTextComponents } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { client } from "@/app/sanity/client";
import type { SanityDocument } from "next-sanity";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: Image) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageBuilder = urlFor(value);
      const imageUrl = imageBuilder?.url();
      if (!imageUrl) return null;
      return (
        <img
          src={imageUrl}
          alt={value.alt || ' '}
          className="w-full rounded-md my-4"
        />
      );
    },
    codeBlock: ({ value }: { value: { language?: string; code?: string } }) => (
      <SyntaxHighlighter
        language={value?.language || 'javascript'}
        style={dracula}
        className="rounded-md my-4"
      >
        {value?.code || ''}
      </SyntaxHighlighter>
    ),
    callToAction: ({ value }: { value: { link?: string; openInNewTab?: boolean; text?: string } }) => (
      <div className="bg-blue-100 p-6 rounded-md my-4 text-center">
        <Link
          href={value?.link || '#'}
          target={value?.openInNewTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            {value?.text}
          </button>
        </Link>
      </div>
    ),
    pageBreak: ({ value }: { value: { decorativeLine?: boolean } }) => (
      <div className="w-full my-8">
        {value?.decorativeLine && <hr className="border-t-2 border-gray-300" />}
        <div className="text-center text-gray-500 italic text-sm">Page Break</div>
        {value?.decorativeLine && <hr className="border-t-2 border-gray-300 mt-2" />}
      </div>
    ),
  },

  // ← Add list handling here
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },

  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base leading-relaxed mb-2">{children}</p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mb-2">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold mb-1">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-100 rounded px-1 font-mono text-sm">{children}</code>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => {
      const href = value?.href || '';
      return href ? (
        <a href={href} className="text-blue-500 hover:underline">
          {children}
        </a>
      ) : (
        <span>{children}</span>
      );
    },
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // If you’re on Next.js 15+, you may need:
  // const { slug } = await params;

  const post = await client.fetch<
    SanityDocument & {
      title: string;
      slug: { current: string };
      publishedAt: string;
      mainImage?: Image;
      body: any[];
    }
  >(POST_QUERY, { slug: params.slug }, options);

  const postImageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
    </main>
  );
}

