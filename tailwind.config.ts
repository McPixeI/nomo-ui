import { colors } from './src/utils/tailwind-config/semantics/colors';
import { fontSize } from './src/utils/tailwind-config/semantics/font-size';
import { screens } from './src/utils/tailwind-config/semantics/screens';
import { spacing } from './src/utils/tailwind-config/semantics/spacing';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: screens,
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: fontSize,
      colors: colors,
      spacing: spacing
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
