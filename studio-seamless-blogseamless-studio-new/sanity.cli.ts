// studio-seamless-blogseamless-studio-new/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '92zpz7ki',
    dataset: 'production',
  },
  // disable auto-updates so it doesn’t try to parse @sanity/vision
  autoUpdates: false,
})
