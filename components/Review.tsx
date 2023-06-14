import React from 'react'

interface ReviewProps {
  by: string
  children: React.ReactNode
}

export const Review: React.FC<ReviewProps> = ({ by, children }) => (
  <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
    <p className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight">
      &ldquo;{children}&rdquo;
    </p>
    <span className="mt-6">&mdash; {by}</span>
  </div>
)
