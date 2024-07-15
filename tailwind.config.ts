import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'primary-hover': 'var(--primary-color-hover)',
        'button-text': 'var(--button-text-color)',
        'footer-text': 'var(--footer-text-color)',
        'footer-link-hover': 'var(--footer-link-hover-color)',
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'form-bg-color': 'var(--form-bg-color)',
        'input-bg-color': 'var(--input-bg-color)',
        'error-color': 'var(--error-color)',
        'title-color': 'var(--title-color)',
        'card-bg-color': 'var(--card-bg-color)',
        'button-color': 'var(--button-color)',
      },
      backgroundColor: {
        'navbar-bg': 'rgba(0, 0, 0, 0.5)',
        'navbar-bg-scrolled': 'rgba(0, 0, 0, 0.8)',
        'footer-bg': 'rgba(var(--footer-bg-color-rgb), 0.6)',
        'footer-bg-hover': 'rgba(var(--footer-bg-color-rgb), 0.8)',
      },
      maxWidth: {
        '7xl': '1500px',
      },
      animation: {
        'blink': 'blink 0.7s infinite',
        'fade-in-out': 'fadeInOut 0.5s ease-in-out',
        'spinner': 'spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'slide-down': 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideDown: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' },
        },
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      transitionProperty: {
        'opacity': 'opacity',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      width: {
        '15': '60px',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      opacity: ['group-hover', 'disabled'],
      cursor: ['disabled'],
      scale: ['group-hover'],
      backdropFilter: ['responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.backdrop-blur-md': {
          'backdrop-filter': 'blur(12px)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

export default config