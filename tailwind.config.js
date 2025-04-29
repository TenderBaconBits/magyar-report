/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#d9e2ed',
          200: '#b3c5db',
          300: '#8da9c9',
          400: '#6282b0',
          500: '#476a9d',
          600: '#365080',
          700: '#284067', // Main primary color
          800: '#1b2d47',
          900: '#0e1a2c',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffe49d',
          300: '#ffd06b',
          400: '#ffbc38',
          500: '#f59e0b', // Main accent color (gold)
          600: '#e08106',
          700: '#b86207',
          800: '#94500d',
          900: '#78410f',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};