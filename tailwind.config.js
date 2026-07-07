/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E10',
        panel: '#18181B',
        line: '#232326',
        muted: '#8A8A90',
        faint: '#6B6B70',
        paper: '#F2F2F0',
        ember: {
          DEFAULT: '#D85A30',
          soft: '#F0997B',
          deep: '#4A1B0C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '920px',
      },
    },
  },
  plugins: [],
};