import React from 'react'
import Image from 'next/image'

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image
            src="/assets/logo.svg"
            width={30}
            height={30}
            alt="Margelo Logo"
          />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            id="companyName"
            maxLength={128}
            name="companyName"
            placeholder="Company name"
            required
            type="text"
          />
          <input
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            id="email"
            maxLength={128}
            name="email"
            placeholder="Your E-mail"
            required
            type="email"
          />
          <textarea
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
            id="message"
            maxLength={1048576}
            name="message"
            placeholder="Additional information"
            required
          />
          <div className="text-center pt-10">
            <button
              type="submit"
              className="bg-white text-black rounded-3xl px-8 py-3 font-medium hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
