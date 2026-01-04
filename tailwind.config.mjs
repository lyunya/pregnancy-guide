/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F4',
        blush: '#FFF5F5',
        sage: '#F0F7F4',
        sky: '#F0F8FF',
        peach: '#FFF4ED',
        coral: '#E8736C',
        forest: '#2D5A47',
        plum: '#6B4E71',
        warm: {
          50: '#FFFAF7',
          100: '#FFF5ED',
          200: '#FFEBD6',
          300: '#FFD9B8',
          400: '#FFC799',
          500: '#FFB57A',
        },
      },
    },
  },
  plugins: [],
};
