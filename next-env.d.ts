/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace webpack {
    export type Compiler = any
    export type Plugin = any
  }
  declare module "next/dist/compiled/webpack/webpack" {
    export const webpack: any
  }
// / <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
