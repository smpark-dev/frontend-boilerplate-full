/** @type {import('tailwindcss').Config} */
export default {
  // === 콘텐츠 경로 설정 ===
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  // === 테마 설정 ===
  theme: {
    extend: {
      // === 커스텀 컬러 ===
      colors: {
        // 브랜드 컬러
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // 메인 컬러
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // 그레이 스케일 (커스텀)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // 상태 컬러
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },

      // === 커스텀 폰트 ===
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },

      // === 커스텀 스페이싱 ===
      spacing: {
        18: '4.5rem', // 72px
        88: '22rem', // 352px
        128: '32rem', // 512px
      },

      // === 커스텀 브레이크포인트 ===
      screens: {
        xs: '475px',
        '3xl': '1680px',
      },

      // === 애니메이션 ===
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },

      // === 키프레임 ===
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      // === 박스 섀도우 ===
      boxShadow: {
        soft: '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        medium: '0 4px 25px 0 rgba(0, 0, 0, 0.12)',
        hard: '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
      },

      // === 보더 반경 ===
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },

  // === 플러그인 ===
  plugins: [
    // 폼 스타일링 플러그인
    // require('@tailwindcss/forms'),
    // 타이포그래피 플러그인
    // require('@tailwindcss/typography'),
    // 애스펙트 비율 플러그인
    // require('@tailwindcss/aspect-ratio'),
    // 컨테이너 쿼리 플러그인
    // require('@tailwindcss/container-queries'),
  ],

  // === 다크모드 설정 ===
  darkMode: 'class', // 'media' 또는 'class'

  // === CSS 변수 사용 ===
  corePlugins: {
    // 필요에 따라 비활성화
    // preflight: false,
  },
}
