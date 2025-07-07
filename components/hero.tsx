import React from 'react'
import Image, { StaticImageData } from 'next/image' // 导入 Image 组件

interface IProps {
  imgUrl: string;
  altText: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0'>
        <Image 
          src={props.imgUrl}        // 直接引用根路径（public/home.jpg）
          alt={props.altText}      // 必设：提升可访问性
          fill                   // 充满父容器（需父容器定位正确）
          objectFit="cover"      // 可选：保持图片比例，覆盖整个容器
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950 '></div>
      </div>
      <div>
        <h1 className='center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>
          {props.content}</h1>
      </div> 
    </div>
  )
}