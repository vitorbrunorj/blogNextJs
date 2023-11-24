import type { Config } from 'tailwindcss'
function generateScale(
  start: number,
  end: number,
  factor: number = 1.33
): Record<string, string> {
  const scale: Record<string, string> = {}

  for (let i = start; i <= end; i++) {
    const pxValue = Math.round(i * factor)
    scale[`r${pxValue}px`] = `${pxValue}px` // Usa o valor real em pixels como valor
  }

  const orderedScale: Record<string, string> = {}
  Object.keys(scale)
    .sort((a, b) => Number(a.slice(1, -2)) - Number(b.slice(1, -2))) // Ordena as chaves em ordem crescente de pixels
    .forEach((key) => {
      orderedScale[key] = scale[key]
    })

  return orderedScale
}
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
        '9px': '0.5625rem', // 9px/16
        '12px': '0.75rem', // 12px/16
        '16px': '1rem', // 16px/16
        '21px': '1.3125rem', // 21px/16
        '38px': '2.375rem', // 38px/16
        '52px': '3.25rem', // 52px/16
        h1: ['2.375rem', { lineHeight: '2.5rem' }],
        h2: ['2rem', { lineHeight: '2.25rem' }],
        h3: ['1.75rem', { lineHeight: '2rem' }],
        h4: ['1.5rem', { lineHeight: '1.75rem' }],
        h5: ['1.3125rem', { lineHeight: '1.5rem' }],
        h6: ['1rem', { lineHeight: '1.25rem' }],
        paragraph: ['1rem', { lineHeight: '1.5rem' }]
      },

      height: {
        ...generateScale(0.1, 725, 1.33),
        '10': '0.6rem', // 10px
        '12': '0.75rem', // 12px
        '16': '1rem', // 16px
        '21': '1.34rem', // 21px
        '29': '1.78rem', // 29px
        '38': '2.4rem', // 38px
        '52': '3.25rem', // 52px
        '55': '3.437rem', // 55px
        '69': '4.32rem', // 69px
        '93': '5.8rem', // 93px
        '124': '7.75rem', // 124px
        '166': '10.4rem', // 166px
        '223': '13.93rem', // 223px
        '299': '18.7rem', // 299px
        '400': '25rem', // 400px
        '536': '33.5rem' // 536px
      },
      width: {
        ...generateScale(0.1, 725, 1.33),
        '26': '1.618rem', // 26px
        '42': '2.618rem', // 42px
        '68': '4.236rem', // 68px
        '110': '6.854rem', // 110px
        '178': '11.09rem', // 178px
        '287': '17.944rem', // 287px
        '465': '29.034rem', // 465px
        '762': '46.978rem', // 752px
        '10': '0.6rem', // 10px
        '12': '0.75rem', // 12px
        '16': '1rem', // 16px
        '21': '1.34rem', // 21px
        '29': '1.78rem', // 29px
        '38': '2.4rem', // 38px
        '52': '3.25rem', // 52px
        '55': '3.4375rem', // 55px
        '69': '4.32rem', // 69px
        '93': '5.8rem', // 93px
        '124': '7.75rem', // 124px
        '166': '10.4rem', // 166px
        '223': '13.93rem', // 223px
        '299': '18.7rem', // 299px
        '400': '25rem', // 400px
        '536': '33.5rem' // 536px
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
      textShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.5)',
        soft: '0 2px 5px rgba(0, 0, 0, 0.3)',
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
        xl: '0 2px 20px rgba(0, 0, 0, 0.5)',
        '2xl': '0 2px 25px rgba(0, 0, 0, 0.5)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
      },
      boxShadow: {
        icon: '0 2px 5px rgba(0, 0, 0, 0.5)'
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      spacing: {
        '0.1': '0.1rem', // 1.6px
        '0.15': '0.15rem', // 2.4px
        '0.2': '0.2rem', // 3.2px
        '0.25': '0.25rem', // 4px
        '0.35': '0.35rem', // 5.6px
        '0.5': '0.5rem', // 8px
        '0.75': '0.75rem' // 12px
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('tailwindcss-textshadow')]
}

export default config
