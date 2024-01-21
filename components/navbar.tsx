import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Menu, Sparkle } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

const Navbar = () => {
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
        <div className='flex items-center'>
            <Menu className='block md:hidden'/>
            <Link href='/'>
                <h1 className={cn('hidden md:block text-xl text-3xl font-bold text-primary',
                font.className)}>companion.ai</h1>
            </Link>
        </div>
        <div className='flex items-center gap-x-3'>
            <Button variant='premium' size='sm'>Upgrade
                <Sparkle className='h-4 ml-2 fill-white text-white'/>
            </Button>
            <ModeToggle />
            <UserButton />
        </div>
    </div>
  )
}

export default Navbar