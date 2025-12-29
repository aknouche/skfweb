/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /**
       * SKF Brand Colors
       * Based on Svenska Kickboxningsförbundet Grafisk Profil
       *
       * Primary palette:
       * - Blue: Main brand color, authoritative and official
       * - Yellow: Accent color, energy and movement
       * - Black: Text and contrast
       */
      colors: {
        skf: {
          blue: {
            DEFAULT: '#0F2454',
            50: '#E8EBF2',
            100: '#C5CCE0',
            200: '#9EABCC',
            300: '#7789B8',
            400: '#5A6FA8',
            500: '#3D5598',
            600: '#2F4480',
            700: '#223466',
            800: '#16244D',
            900: '#0F2454',
          },
          yellow: {
            DEFAULT: '#F5DC32',
            50: '#FFFEF5',
            100: '#FEF9D6',
            200: '#FCF3A8',
            300: '#FAEC7A',
            400: '#F8E456',
            500: '#F5DC32',
            600: '#E5C80A',
            700: '#B59E08',
            800: '#857406',
            900: '#554A04',
          },
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      /**
       * SKF Typography
       * Primary: Frutiger (licensed) → Fallback to Inter/Arial
       *
       * Hierarchy:
       * - H1: Black weight, main headings
       * - H2-H3: Bold weight, subheadings
       * - Body: Roman/Regular weight
       */
      fontFamily: {
        sans: ['Inter', 'Frutiger', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Frutiger', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Custom scale for clear hierarchy
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      /**
       * Spacing and Layout
       * Generous whitespace for calm, professional feel
       */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      /**
       * Container
       */
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
