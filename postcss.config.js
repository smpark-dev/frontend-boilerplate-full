export default {
  plugins: {
    // Tailwind CSS 처리
    tailwindcss: {},

    // 벤더 프리픽스 자동 추가
    autoprefixer: {},

    // 프로덕션 빌드에서 CSS 최적화
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}
