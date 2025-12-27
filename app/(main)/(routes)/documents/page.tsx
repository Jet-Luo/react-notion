'use client'

import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

const DocumentsPage = () => {
  const { user } = useUser()
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image src="/empty.png" alt="Empty" height={300} width={300} className="dark:hidden" />
      <Image
        src="/empty-dark.png"
        alt="Empty"
        height={300}
        width={300}
        className="hidden dark:block"
      />
      {/*<h2>{user ? `Hello, ${user.firstName || user.username || 'User'}!` : 'Hello, User!'}</h2>*/}
      <h2 className="text-xl font-medium">
        {user
          ? `Welcome to ${user.firstName || user.username || 'User'}'s PageFlow!`
          : 'Welcome to PageFlow'}
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4" />
        Create your first Page
      </Button>
      {/*<h1 className="text-2xl font-bold">Documents Page</h1>*/}
      {/*<p className="mt-4">This is the documents page content.</p>*/}
    </div>
  )
}

export default DocumentsPage
