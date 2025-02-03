// import { cn } from '@/modules/core/utils'
// import type { AllHTMLAttributes, ElementType, ReactNode, ElementRef } from 'react'
// import { createElement } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'
import { cn } from '../utils'

type TypographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

const TypographyVariants = cva('text-neutral-700', {
  variants: {
    variant: {
      heading: 'text-xl font-bold',
      title: 'text-2xl font-semibold',
      subtitle: 'text-xl font-semibold',
      body: 'text-sm font-medium',
      small: 'text-xs font-medium',
      default: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type DynamicElementProps = PropsWithChildren &
  VariantProps<typeof TypographyVariants> & {
    as?: TypographyTags
    className?: string
  }

export const Typography: React.FC<DynamicElementProps> = ({
  as: Component = 'p',
  variant,
  className,
  ...props
}: DynamicElementProps) => {
  return <Component className={cn(TypographyVariants({ variant, className }))} {...props} />
}
