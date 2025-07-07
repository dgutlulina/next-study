import React from 'react'
import Hero from '@/components/hero'

export const metadata = {
  title: 'home',
}

export default function Page() {
  return (
    <Hero imgUrl='/home.jpg' altText='Home' content='Home' />
  )
}

