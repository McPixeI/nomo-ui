import { cn } from '@/utils'
import { VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'
import { cardStyles } from './styles'


interface CardProps {
  children: React.ReactNode
}

interface CardProps extends VariantProps<typeof cardStyles> {
  children: ReactNode
  className?: string
}


const Card = ({children, variant, className}: CardProps) => {
  return <div className={cn(cardStyles({variant, className}))}>{children}</div>
}

export default Card;