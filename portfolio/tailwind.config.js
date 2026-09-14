/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-bg': '#0D0E10',
        'base-surface': '#141619',
        'base-border': '#24282F',
        'base-text': '#ECEFEF',
        'base-muted': '#8A939E',
        'accent': '#FF4D00',
        'signal': '#10B981',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'sm': '3px',
        'md': '6px',
        'lg': '12px',
      }
    },
  },
  plugins: [],
}