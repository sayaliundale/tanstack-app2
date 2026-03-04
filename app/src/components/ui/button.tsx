import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20',
        outline:
          'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-xl shadow-black/5',
        secondary:
          'bg-slate-100 text-slate-800 hover:bg-slate-200',
        ghost:
          'hover:bg-slate-100 hover:text-slate-900 text-slate-600',
        destructive:
          'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20',
        link: 'text-emerald-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 text-base',
        xs: 'h-8 px-3 text-xs rounded-xl',
        sm: 'h-10 px-5 text-sm',
        lg: 'h-12 md:h-14 px-8 text-base',
        icon: 'size-11',
        'icon-xs': 'size-8 rounded-xl',
        'icon-sm': 'size-10',
        'icon-lg': 'size-12 md:size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
