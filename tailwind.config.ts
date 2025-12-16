import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-primary': '#C8702E',
        'brand-secondary': '#E8A87C',
        'brand-dark': '#1A1A1A',
        'brand-light': '#F9F9F7',
        'brand-gold': '#DAA520',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/wallpaper01.jpg')", // Ensure assets are in /static
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} as Config;