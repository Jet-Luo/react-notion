import { Logo } from '@/app/(landing)/_components/Logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    // <div className="w-full border-t mt-10">
    //     <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-gray-500">
    //         © 2025 Yestion. All rights reserved.
    //     </div>
    // </div>
    <div className="bg-background z-50 flex w-full items-center p-6 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="text-muted-foreground flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}
