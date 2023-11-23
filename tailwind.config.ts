import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em'
        /* widest: '.25em', */ // Adicionado um espaçamento de letras mais amplo
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],
        h2: ['2rem', { lineHeight: '2.25rem' }],
        h3: ['1.75rem', { lineHeight: '2rem' }],
        h4: ['1.5rem', { lineHeight: '1.75rem' }],
        h5: ['1.25rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.25rem' }],
        paragraph: ['1rem', { lineHeight: '1.5rem' }]
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        primary: '#69d0b3',
        secondary: '#cde5b3',
        tertiary: '#9cdab3',
        danger: '#e3342f',
        light: '#f7fafc',
        dark: '#343a40',
        success: '#38c172',
        info: '#6cb2eb',
        warning: '#ffed4a',
        error: '#e3342f',
        white: '#fff',
        black: '#000',
        'gray-100': '#f7fafc',
        'gray-200': '#edf2f7',
        'gray-300': '#e2e8f0',
        'gray-400': '#cbd5e0',
        'gray-500': '#a0aec0',
        'gray-600': '#718096',
        'gray-700': '#4a5568',
        'gray-800': '#2d3748',
        'gray-900': '#1a202c'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      spacing: {}
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    // Aqui você pode adicionar plugins personalizados do Tailwind
  ]
}

export default config
