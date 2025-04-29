import { createClient } from '@sanity/client'

// Reads VITE_ vars from import.meta.env
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,                    // `false` if you want fresh data
  apiVersion: '2025-04-25',       // use today's date for the stable API
  token: import.meta.env.VITE_SANITY_API_TOKEN, // only needed for mutations/drafts
  perspective: 'published',
  stega: false
})
