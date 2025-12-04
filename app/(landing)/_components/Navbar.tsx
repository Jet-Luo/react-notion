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
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 transition-all',
        scrolled &&
          'border-b border-neutral-200 dark:border-neutral-800 shadow-sm dark:shadow-neutral-200/10'
      )}
    >
      <Logo />
      <div className="md:ml-auto flex items-center justify-between md:justify-end gap-x-2">
        <ModeToggle />
      </div>
    </nav>
  )
}
