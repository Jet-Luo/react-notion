import { cva, VariantProps } from 'class-variance-authority'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

const spinnerVariants = cva(
  // 'animate-spin rounded-full border-4 border-t-4 border-gray-200 dark:border-gray-700',
  // 'text-muted-foreground animate-spin rounded-full border-t-transparent',
  'text-muted-foreground animate-spin',
  {
    variants: {
      size: {
        default: 'h-4 w-4',
        small: 'h-2 w-2',
        large: 'h-6 w-6',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string // 允许传入额外的 className，允许用户自定义样式并覆盖预设的样式
}

// export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
//   return (
//     // <div className={spinnerVariant({ size })} />
//     <svg
//       className={spinnerVariant({ size })}
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//     >
//       <circle
//         className="opacity-25"
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeWidth="4"
//       ></circle>
//       <path
//         className="opacity-75"
//         fill="currentColor"
//         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//       ></path>
//     </svg>
//   )
// }
export const Spinner = ({ size, className }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }), className)} />
}
