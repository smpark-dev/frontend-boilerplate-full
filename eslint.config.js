import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  // === 무시할 파일들 (기존 .eslintignore 역할) ===
  {
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      '.yarn/**',
      '.pnp.*',
      '*.config.js',
      'postcss.config.js',
      'tailwind.config.js',
      '*.min.js',
      '*.bundle.js',
      '.vscode/**',
      '.idea/**',
      '.env*',
      '*.log',
    ],
  },

  // === 기본 JavaScript/TypeScript 설정 ===
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // === 기본 ESLint 규칙 ===
      ...js.configs.recommended.rules,

      // === TypeScript 규칙 ===
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // === React 규칙 ===
      'react/prop-types': 'off', // TypeScript 사용 시 불필요
      'react/react-in-jsx-scope': 'off', // React 17+ 불필요
      'react/jsx-uses-react': 'off', // React 17+ 불필요

      // React Hooks 규칙
      ...reactHooks.configs.recommended.rules,

      // React 18 새로운 훅 지원
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useDeferredValue|useTransition)',
        },
      ],

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // === 일반 규칙 ===
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-unused-vars': 'off', // TypeScript 규칙 사용
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // === 테스트 파일 특별 규칙 ===
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },

  // === 설정 파일 특별 규칙 ===
  {
    files: ['*.config.{js,ts}', 'eslint.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'off',
    },
  },

  // === Storybook 파일 ===
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
]
