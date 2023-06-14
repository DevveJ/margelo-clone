import React from 'react'
import Image from 'next/image'
import { SliderContainer, SliderItem } from './Slider'

export const ClientLogos: React.FC = () => (
  <>
    <SliderContainer contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/audubon.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/assets/trustedby/pinkpanda.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/facebook.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/status.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/tocsen.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/rainbow.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/meta.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
    <div className="mt-6"></div>
    <SliderContainer contentWidth={1290} initialOffsetX={1}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/showtime.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/exodus.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/coinbase.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/expensify.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/picnic.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/shopify.png"
          width={150}
          height={50}
          alt="Audubon"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
)
