// global.d.ts
// (in your Studio root, next to package.json)

///////////////////////
// Sanity Core Stubs //
///////////////////////
declare module 'sanity' {
    /** For sanity.config.ts */
    export function defineConfig<T>(config: T): T
  
    /** For your schema files */
    export function defineType<T extends Record<string, any>>(schema: T): T
    export function defineField<T extends Record<string, any>>(field: T): T
  }
  
  /////////////////////////////
  // Sanity Structure & Vision
  /////////////////////////////
  declare module 'sanity/structure' {
    export function structureTool(): any
  }
  declare module '@sanity/vision' {
    export function visionTool(): any
  }
  
  /////////////////////////
  // Sanity Types Stub   //
  /////////////////////////
  declare module '@sanity/types' {
    /** Minimal stand‑in for Rule */
    export type Rule = any
  }

  declare module 'sanity/cli' {
    /** Stub for the CLI config helper */
    export function defineCliConfig<T>(config: T): T
  }
  
  
