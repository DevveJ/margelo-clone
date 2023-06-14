import React, { useCallback, useContext, useRef, useState } from 'react'
import Image from 'next/image'
import { ScrollContext } from '@/utils/scroll-observer'

export const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <section
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-20"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover -z-20"
      >
        <source src="/assets/masthead-bg.webm" />
      </video>
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/assets/logo.svg"
          width={128 / 3}
          height={114 / 3}
          alt="Margelo Logo"
        />
      </div>
      <div className="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development,</span> <span>done right.</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
        }`}
      >
        <Image
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
          alt="Scroll Down"
          className="w-auto h-auto"
          onLoad={handleImageLoaded}
        />
      </div>
    </section>
  )
}
