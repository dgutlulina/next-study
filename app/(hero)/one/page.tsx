import React from 'react'
import Hero from '@/components/hero'

export const metadata = {
  title: 'One',
  description: 'One page'
}

export default function Page() {
  return (
  <Hero imgUrl='/one.jpg' altText='One' content='One' />
  )
}
