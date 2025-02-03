import { cn } from '@/modules/core/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

type CardTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'span'
  | 'div'
  | 'li'
  | 'ul'
  | 'ol'
  | 'a'
  | 'section'
  | 'article'
  | 'main'
  | 'nav'
  | 'aside'
  | 'header'
  | 'footer'
  | 'button'

const cardVariants = cva('rounded-lg bg-white p-4', {
  variants: {
    variant: {
      default: 'shadow-md border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type Props = PropsWithChildren &
  VariantProps<typeof cardVariants> & {
    as?: CardTags
    className?: string
  }

export function Card({ as: Component = 'div', variant, className, ...props }: Props) {
  return <Component className={cn(cardVariants({ variant, className }))} {...props} />
}
