import React from 'react'
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight
} from './Work'

export const Works: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <h6>We Built</h6>
                <h4 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="https://bambooassets.com/">
                    Pink Panda&apos;s
                  </WorkLink>{' '}
                  app.
                </h4>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/pinkpanda.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Pink Panda App"
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <h6>We made</h6>
                <h4 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="https://www.coinbase.com/">
                    Steakwallet
                  </WorkLink>{' '}
                  faster.
                </h4>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/steakwallet.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Steakwallet App"
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <h6>We helped</h6>
                <h4 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="https://showtime.xyz/">Showtime</WorkLink>{' '}
                  ship faster.
                </h4>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/works/showtime.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="Showtime App"
                />
              </WorkRight>
            </WorkContainer>
          )}
        />
      </TileContent>
    </TileWrapper>
  )
}
