import { ScrollContext } from '@/utils/scroll-observer'
import { TileContext } from '@/utils/tile-context'
import React, { useContext, useRef } from 'react'

interface TileWrapperProps {
  children: React.ReactNode
  numOfPages: number
}

interface TileBackgroundProps {
  children: React.ReactNode
}

interface TileContentProps {
  children: React.ReactNode
}

interface TileProps {
  page: number
  renderContent: (props: { progress: number }) => React.ReactNode
}

export const TileWrapper: React.FC<TileWrapperProps> = ({
  children,
  numOfPages
}) => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)
  let currentPage = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    currentPage = percentY * numOfPages
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <section
        ref={refContainer}
        className="relative bg-black text-white"
        style={{
          height: numOfPages * 100 + 'vh'
        }}
      >
        {children}
      </section>
    </TileContext.Provider>
  )
}

export const TileBackground: React.FC<TileBackgroundProps> = ({ children }) => (
  <div className="absolute w-full h-full">{children}</div>
)

export const TileContent: React.FC<TileContentProps> = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
)

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext)
  const progress = Math.max(0, currentPage - page)
  const refContainer = useRef<HTMLDivElement>(null)

  let opacity = Math.min(1, Math.max(0, progress * 4))
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity
      }}
    >
      {renderContent({ progress })}
    </div>
  )
}
