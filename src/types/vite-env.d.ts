/// <reference types="vite/client" />

// === 환경 변수 타입 정의 ===
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// === 정적 에셋 타입 정의 ===
declare module '*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}
