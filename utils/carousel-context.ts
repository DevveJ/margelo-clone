import { EmblaCarouselType } from 'embla-carousel-react'
import React from 'react'

interface CarouselContextValue {
  embla: EmblaCarouselType | undefined
  selectedIndex: number
}

export const CarouselContext = React.createContext<CarouselContextValue>({
  embla: undefined,
  selectedIndex: -1
})
