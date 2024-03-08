import type { ReactNode } from 'react';

import { cn } from '@/utils/tailwind-config/tailwind-merge';
import { VariantProps } from 'class-variance-authority';
import { tagStyles } from './styles';


type TagVariants = VariantProps<typeof tagStyles>;

interface TagProps extends TagVariants {
  className?: string
  children: ReactNode | string
}

const Tag = ({ className, children, variant }: TagProps) => {
  return <div className={cn(tagStyles({ variant, className }))}>{children}</div>
}

export default Tag