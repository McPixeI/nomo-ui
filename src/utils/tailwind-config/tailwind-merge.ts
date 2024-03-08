import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { colors } from './semantics/colors';
import { fontSize } from './semantics/font-size';
import { spacing } from './semantics/spacing';

// NOTE: Important to use extendTailwindMerge instead of twMerge because we are extending the tailwind config and twMerge doesn't work properly if not do this
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: Object.keys(spacing).map(key => key),
      colors: Object.keys(colors).map(key => key)
    },
    classGroups: {
      'font-size': Object.keys(fontSize).map((key) => `text-${key}`),
    },
  }
})

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

