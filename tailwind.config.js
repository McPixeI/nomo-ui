
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '905px',
        lg: '1240px',
        xl: '1440px'
      },
      colors: {
        'primary': {
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#CCCCCC',
          600: '#707070',
          700: '#3B3B3B',
          900: '#1A1917',
        },
        'secondary': {
          50: '#F1EBFD',
          500: '#7633EF'
        },
        'tertiary': {
          50: '#FFF2EC',
          500: '#FD7B43'
        },
        'info': {
          50: '#F1EBFD',
          200: 'BT8AF3',
          300: '#9753EF',
          500: '#7633EF'
        },
        'negative': {
          50: '#FFF0F0',
          100: '#FFE1E1',
          200: '#FFB3B3',
          300: '#FF8C8C',
          500: '#FF6969'
        },
        'positive': {
          50: '#EFFBF7',
          100: '#D2F6E9',
          200: '#A5EDD3',
          500: '#1DD292'
        },
        'notice': {
          50: '#FFF7EC',
          100: '#FFEFDA',
          200: '#FFE0B5',
          500: '#FFB145'
        },
        'grayscale': {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#CCCCCC',
          500: '#B1B1B1',
          600: '#707070',
          700: '#3B3B3B',
          900: '#1A1917'
        }
      },
      fontSize: {
        'header-xxl': ['56px', {
          lineHeight: '68px',
          letterSpacing: '-0.5px',
          fontWeight: '700'
        }],
        'header-xl': ['40px', {
          lineHeight: '48px',
          letterSpacing: '-0.3px',
          fontWeight: '700'
        }],
        'header-l': ['40px', {
          lineHeight: '48px',
          letterSpacing: '-0.3px',
          fontWeight: '700'
        }],
        'header-m': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'header-s': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'header-xs': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.1px',
          fontWeight: '700'
        }],
        'body-l': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
        'body-m': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
        'body-s': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
        'button-m': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'button-s': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
        'detail-1': ['12px', {
          lineHeight: '16px',
          letterSpacing: '0px',
          fontWeight: '400'
        }],
        'detail-2': ['12px', {
          lineHeight: '16px',
          letterSpacing: '0px',
          fontWeight: '700'
        }]
      },
      spacing: {
        '4xl': '64px',
        '3xl': '56px',
        '2xl': '48px',
        xl: '40px',
        l: '32px',
        m: '24px',
        s: '16px',
        xs: '12px',
        '2xs': '8px',
        '3xs': '4px'
      }
    },
  },
  plugins: [
    function groupPeer ({ addVariant }) {
      const pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        'hover',
        'focus',
        'focus-visible',
        'active',
        'enabled',
        'disabled',

        'default',
        'checked',
        'indeterminate',
        'placeholder-shown',
        'autofill',
        'optional',
        'required',
        'valid',
        'invalid',
        'in-range',
        'out-of-range',
        'read-only'
      ].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`]
      )

      for (const [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          const result = typeof state === 'function' ? state(ctx) : state
          return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &')
        })
      }
    }
  ]
};
