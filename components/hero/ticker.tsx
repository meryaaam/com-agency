"use client"

import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { projects } from '../../data/projects'
import ServicesWrapper from './services-wrapper'

export default function Tricker() {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  
useEffect(() => {
  const lenis = new Lenis()

  function raf(time:any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
},[])

  return (
    <main className='relative mt-[50vh]'>
      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05)
          return <ServicesWrapper key={index} i={index} {...project} progress={scrollYProgress} range={[index*0.25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}