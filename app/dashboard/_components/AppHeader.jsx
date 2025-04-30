import { UserButton } from '@stackframe/stack'
import { School } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AppHeader() {

  return (
    <div className='px-6 py-4 border-b flex justify-between items-center shadow-sm'>
      <Link href={"/"}>
        <div className="flex items-center gap-2 ">
          <School className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EduConnect</span>
        </div>
      </Link>
      <UserButton />
    </div>
  )
}

export default AppHeader