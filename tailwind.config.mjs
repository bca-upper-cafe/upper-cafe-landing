/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bca: {
          gold: '#C5B358',
          'gold-light': '#E5D68A',
          'gold-dark': '#9E8D38',
          dark: '#0B0E14',
          surface: '#151B23',
          'surface-card': '#1B222D',
          border: '#262F3D',
          muted: '#8B949E',
        },
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
