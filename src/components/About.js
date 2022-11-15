// src/components/About.js

import React from "react"

export default function About() {
  return (
    <section id='about'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <div className='container mx-auto py-5 items-center'>
        <div className='font-custom md:mb-0 items-center text-center'>
          <p className='my-4 text-1xl lg:text-2xl leading-relaxed'>
            Hi, I'm Darren.
          </p>
          <div className='top-text'>
            <h1 className='text-center overflow-none text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold mb-4'>
              I love designing and building useful web applications.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
