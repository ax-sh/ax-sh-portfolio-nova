import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: { DEFAULT: 'var(--secondary)' },
        accent: { DEFAULT: 'var(--accent)' },
      },
    },
    keyframes: {
      'fade-left': {
        from: { transform: 'scale(1) translateX(0)', opacity: '1' },
        to: { transform: 'scale(0.8) translateX(-30%)', opacity: '0' },
      },
      'fade-right': {
        from: { transform: 'scale(1) translateX(0)', opacity: '1' },
        to: { transform: 'scale(0.8) translateX(30%)', opacity: '0' },
      },
    },
    animation: {
      'fade-left': 'fade-left 3s ease-in-out',
      'fade-right': 'fade-right 3s ease-in-out',
    },
  },
  plugins: [typography, forms],
} satisfies Config;
