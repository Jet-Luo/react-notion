'use client'

import { Logo } from '@/app/(landing)/_components/Logo'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/mode-toggle'

export const Navbar = () => {
  const scrolled = useScrollTop()

  return (
    // <nav className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-6">
    //     <Logo />
    // </nav>
    <nav
      className={cn(
        'bg-background fixed top-0 z-50 flex w-full items-center p-6 transition-all dark:bg-[#1F1F1F]',
        scrolled &&
          'border-b border-neutral-200 shadow-sm dark:border-neutral-800 dark:shadow-neutral-200/10'
      )}
    >
      <Logo />
      <div className="flex items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        <ModeToggle />
      </div>
    </nav>
  )
}
