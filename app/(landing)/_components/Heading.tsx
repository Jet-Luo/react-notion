// app/(landing)/_components/Heading.tsx
// _components 表示这是 landing 中会用到的组件，而非通用组件，所以放在这里而不是放在 components 目录下，
// components 目录下的组件是整个应用通用的组件，比如 Button、Input 等等，而不是某个特定页面或模块使用的组件。
'use client' // 用处： 指示这是一个客户端组件

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const Heading = () => {
  return (
    // <>
    //     <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Our App</h1>
    //     <p className="text-lg text-gray-700 mb-8">Discover amazing features and seamless experience.</p>
    //     <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    //         Get Started
    //     </button>
    // </>
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        {/* Welcome to <span className="text-blue-600">Yestion</span> */}
        Your Ideas, Documents & Knowledge, Organized. Welcome to{' '}
        <span className="underline">Yestion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Yestion is a Notion-like app built with Next.js and Tailwind CSS, designed to help you
        capture, organize, and share your ideas effortlessly.
      </h3>
      <Button>
        Enter Yestion
        {/*<ArrowRight className="h-4 2-4 ml-2"/>*/}
        <ArrowRight />
      </Button>
    </div>
  )
}
