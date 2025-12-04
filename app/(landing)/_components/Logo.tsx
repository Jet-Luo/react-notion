import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
})

export const Logo = () => {
  return (
    <div className="hidden md:flex md:items-center md:gap-x-2">
      <Image src="/logo.svg" alt="Yestion Logo" width={40} height={40} className="dark:hidden" />
      <Image
        src="/logo-dark.svg"
        alt="Yestion Logo"
        width={40}
        height={40}
        className="hidden dark:block"
      />
      {/*<span className={`${font.className} text-2xl font-semibold`}>Yestion</span>*/}
      <span className={cn('font-semibold', font.className)}>Yestion</span>
    </div>
  )
}
