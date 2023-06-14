import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo.svg" width={18} height={18} alt="Margelo Logo" />
    <Link href="/terms">
      <a className="hover:underline">Terms</a>
    </Link>
    <Link href="privacy">
      <a className="hover:underline">Privacy Policy</a>
    </Link>
  </footer>
)
