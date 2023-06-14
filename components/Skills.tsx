import { ScrollContext } from '@/utils/scroll-observer'
import React, { useContext, useReducer, useRef } from 'react'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

export const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0

  const { current: elContanier } = refContainer
  if (elContanier) {
    const { clientHeight, offsetTop } = elContanier
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <section ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <p
          className="transition-opacity duration-[400ms]"
          style={{
            opacity: opacityForBlock(progress, 0)
          }}
        >
          We know our tools inside out.
        </p>
        <p
          className="transition-opacity duration-[400ms] inline-block after:content-['_']"
          style={{
            opacity: opacityForBlock(progress, 1)
          }}
        >
          Our team has contributed 302 commits to React Native core, powering
          thousands of apps worldwide.
        </p>
        <p
          className="transition-opacity duration-[400ms] inline-block"
          style={{
            opacity: opacityForBlock(progress, 2)
          }}
        >
          We&apos;re maintaining some of the most popular open-source projects,
          with over <strong>49 million downloads.</strong>
        </p>
      </div>
    </section>
  )
}
