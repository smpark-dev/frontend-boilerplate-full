import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind CSS 클래스명을 조건부로 결합하고 중복을 제거하는 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 다크모드 토글 함수
 */
export function toggleDarkMode() {
  const isDark = document.documentElement.classList.contains('dark')

  if (isDark) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}

/**
 * 시스템 테마 감지 및 적용
 */
export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

/**
 * 반응형 값 계산 (px to rem)
 */
export function pxToRem(px: number, base: number = 16): string {
  return `${px / base}rem`
}

/**
 * 색상 투명도 조절
 */
export function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
