import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: "92zpz7ki",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
}

export const client = createClient(config)
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}