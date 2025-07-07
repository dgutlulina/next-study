import React from 'react'
import Hero from '@/components/hero'

export const metadata = {
  title: 'Three',
  description: 'Three',
}

export default function Page() {
  return (
  <Hero imgUrl='/three.png' altText='Three' content='THREE' />
  )
}
