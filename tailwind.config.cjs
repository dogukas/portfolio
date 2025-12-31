/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Dark mode'u class bazlı yapıyoruz
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'dark-bg': '#111827',
        'dark-card': '#1F2937'
      }
    },
  },
  plugins: [],
} 