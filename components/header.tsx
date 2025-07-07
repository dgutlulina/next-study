'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { href: '/one', label: '1' },
  { href: '/two', label: '2' },
  { href: '/three', label: '3' },
];


export default function Header() {
  const pathname = usePathname()

  return (
 <div className="absolute  w-full z-10">
                  <div className="flex justify-between container mx-auto text-lg font-bold p-4 border-b-2 border-gray-200 ">
          <Link href="/">Home</Link>
          <div className="flex gap-4">
            {linkData.map(link => (
              <Link key={link.href} className={pathname === link.href ? 'text-blue-500' : ''} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

</div>
      
  
  )
}
