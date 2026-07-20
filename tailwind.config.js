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
        accent: {
          DEFAULT: '#5B8A8E',
          soft: '#8FB8BB',
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
      boxShadow: {
        panel: '0 1px 0 0 rgba(242,242,240,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(circle at 30% 20%, rgba(216,90,48,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
};