import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface MemberProps {
  id: string
  link: string
  name: string
  socialId: string
}

export const Member: React.FC<MemberProps> = ({ id, link, name, socialId }) => {
  return (
    <div>
      <Image
        alt={`${id} illustration`}
        src={`/assets/team/margelo_faces_${id}.svg`}
        height={1555}
        width={1366}
      />
      <h3 className="text-2xl xl:text-3xl">{name}</h3>
      <div className="text-xl hover:underline">
        <Link href={link}>
          <a target="_blank" rel="noreferrer">
            {socialId}
          </a>
        </Link>
      </div>
    </div>
  )
}
