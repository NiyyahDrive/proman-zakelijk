/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  // Brand-specifieke kleuren in JIT zijn dynamisch — safelist de classes die we runtime samenstellen.
  safelist: [
    // Brand gradient backgrounds
    'from-brand-jobs-from', 'to-brand-jobs-to',
    'from-brand-home-from', 'to-brand-home-to',
    'from-brand-care-from', 'to-brand-care-to',
    'from-brand-ascento-from', 'to-brand-ascento-to',
    'from-brand-winsearch-from', 'to-brand-winsearch-to',
    'from-brand-amplo-from', 'to-brand-amplo-to',
    // Brand accent colors
    'bg-brand-jobs', 'text-brand-jobs', 'border-brand-jobs', 'hover:bg-brand-jobs',
    'bg-brand-home', 'text-brand-home', 'border-brand-home', 'hover:bg-brand-home',
    'bg-brand-care', 'text-brand-care', 'border-brand-care', 'hover:bg-brand-care',
    'bg-brand-ascento', 'text-brand-ascento', 'border-brand-ascento', 'hover:bg-brand-ascento',
    'bg-brand-winsearch', 'text-brand-winsearch', 'border-brand-winsearch', 'hover:bg-brand-winsearch',
    'bg-brand-amplo', 'text-brand-amplo', 'border-brand-amplo', 'hover:bg-brand-amplo',
  ],
  theme: {
    extend: {
      colors: {
        // Hoofd-PROMAN identity (consistent met bestaande site)
        proman: {
          orange: '#F58220',
          'orange-dark': '#D96C0E',
          'orange-light': '#FFB070',
          navy: '#1E2D5C',
          'navy-dark': '#142046',
          'navy-light': '#2C4080',
          cream: '#FBF7F1',
          mint: '#E8F2EC',
          gray: '#F4F5F7',
        },
        // Per-merk kleuren — gebaseerd op merkidentiteit van Proman Group
        brand: {
          jobs: '#F58220',
          'jobs-from': '#F58220',
          'jobs-to': '#D96C0E',
          home: '#E91E63',
          'home-from': '#E91E63',
          'home-to': '#AD1457',
          care: '#7CB342',
          'care-from': '#7CB342',
          'care-to': '#558B2F',
          ascento: '#1565C0',
          'ascento-from': '#1565C0',
          'ascento-to': '#0D47A1',
          winsearch: '#7B1FA2',
          'winsearch-from': '#7B1FA2',
          'winsearch-to': '#4A148C',
          amplo: '#26A69A',
          'amplo-from': '#26A69A',
          'amplo-to': '#00695C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(30, 45, 92, 0.08)',
        'card': '0 2px 12px -2px rgba(30, 45, 92, 0.10)',
        'lift': '0 16px 40px -12px rgba(30, 45, 92, 0.18)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.proman.navy / 0.85'),
            '--tw-prose-headings': theme('colors.proman.navy'),
            '--tw-prose-links': theme('colors.proman.orange'),
            '--tw-prose-bold': theme('colors.proman.navy'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [],
};
