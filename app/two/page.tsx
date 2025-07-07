import React from 'react'
import Hero from '@/components/hero'

export const metadata = {
  title: 'Two' ,
}

export default function Page() {
  return (
  <Hero imgUrl='/two.jpg' altText='Two' content='TWO' />
  )
}