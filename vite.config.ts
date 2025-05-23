import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // === React 플러그인 ===
  plugins: [
    react({
      // JSX 런타임 설정 (React 17+)
      jsxRuntime: 'automatic',

      // Babel 설정 (선택사항)
      babel: {
        plugins: [
          // 개발 환경에서만 디버깅 정보 추가
          ...(process.env.NODE_ENV === 'development' ? [] : []),
        ],
      },
    }),
  ],

  // === 경로 별칭 (TypeScript와 동기화) ===
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/store': path.resolve(__dirname, './src/store'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
    // 확장자 해결 순서
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  // === 개발 서버 설정 ===
  server: {
    port: 3000,
    host: true, // 네트워크 접근 허용 (모바일 테스트 등)
    open: true, // 브라우저 자동 열기
    strictPort: false, // 포트 사용 중일 때 다른 포트 시도
    cors: true, // CORS 허용

    // 프록시 설정 (API 서버 연동)
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ''), // 필요시 경로 재작성
      },
    },

    // HMR 설정
    hmr: {
      overlay: true, // 에러 오버레이 표시
    },
  },

  // === 빌드 설정 ===
  build: {
    outDir: 'dist',
    sourcemap: true, // 프로덕션에서도 소스맵 생성 (디버깅용)

    // 번들 분석
    rollupOptions: {
      output: {
        // 청크 분할 전략
        manualChunks: {
          // 벤더 라이브러리 분리
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          state: ['zustand'],
          query: ['@tanstack/react-query'],
          forms: ['react-hook-form', 'zod'],
          ui: ['lucide-react'],
        },
      },
    },

    // 청크 크기 경고 임계값
    chunkSizeWarningLimit: 1000,

    // 에셋 처리
    assetsInlineLimit: 4096, // 4KB 이하 파일은 인라인으로 처리

    // 빌드 타겟
    target: 'es2020',
    minify: 'esbuild', // 빠른 minification
  },

  // === 환경 변수 설정 ===
  envPrefix: 'VITE_', // VITE_로 시작하는 환경변수만 클라이언트에 노출

  // === 최적화 설정 ===
  optimizeDeps: {
    // 사전 번들링할 의존성들
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'zustand',
      '@tanstack/react-query',
      'axios',
      'react-hook-form',
      'zod',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    // 제외할 의존성들
    exclude: ['@vite/client', '@vite/env'],
  },

  // === CSS 설정 ===
  css: {
    // PostCSS 설정 (tailwind.config.js와 연동)
    postcss: './postcss.config.js',

    // CSS 모듈 설정
    modules: {
      localsConvention: 'camelCase',
    },

    // 개발 환경에서 소스맵 생성
    devSourcemap: true,
  },

  // === TypeScript 설정 ===
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react', // 필요한 것만 설정
    keepNames: true,
  },

  // === 미리보기 서버 (빌드 후 테스트용) ===
  preview: {
    port: 4173,
    host: true,
    strictPort: false,
  },
})
