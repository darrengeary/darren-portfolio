// src/components/Projects.js

import { CollectionIcon } from "@heroicons/react/solid"
import React from "react"
import { projects } from "../data"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

export default function Projects() {
  return (
    <section id='projects' className='text-gray-400 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20 font-custom '>
          <CollectionIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl title-font mb-4 text-white'>
            Web Applications
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Some of the web applications I have built.
          </p>
        </div>
        <div className='flex flex-wrap'>
          {projects.map((project) => (
            <Popup
              trigger={
                <a key={project.image} className='sm:w-1/2 w-100 p-4'>
                  <div className='flex relative'>
                    <img
                      alt='gallery'
                      className='absolute inset-0 w-full h-full object-cover object-center'
                      src={project.image}
                    />
                    <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-900 bg-gray-800 opacity-0 hover:opacity-100'>
                      <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                        {project.subtitle}
                      </h2>
                      <h1 className='title-font text-lg font-medium text-white mb-3'>
                        {project.title}
                      </h1>
                      <p className='leading-relaxed'>{project.description}</p>
                    </div>
                  </div>
                </a>
              }
              modal
              nested
            >
              {(close) => (
                <div className='modal pb-8'>
                  <button className='close' onClick={close}>
                    &times;
                  </button>
                  <img alt='gallery' className=' w-full' src={project.image} />
                  <div className='content '>
                    <div className='px-8 py-10 text-center relative z-10 w-full'>
                      <h2 className='tracking-widest text-xl title-font font-medium text-green-400 mb-1'>
                        {project.subtitle}
                      </h2>
                      <h1 className='title-font text-xl font-medium mb-3'>
                        {project.title}
                      </h1>
                      <p className='text-lg leading-relaxed'>
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className='actions buttons-cont'>
                    <button
                      className='button-modal flex'
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = project.git
                      }}
                    >
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fab'
                        data-icon='github'
                        class='w-5 git'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 496 512'
                      >
                        <path
                          fill='currentColor'
                          d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                        ></path>
                      </svg>
                      Github
                    </button>
                    <button
                      className='button-modal'
                      onClick={(e) => {
                        e.preventDefault()
                        window.location.href = project.link
                      }}
                    >
                      Demo
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          ))}
        </div>
      </div>
    </section>
  )
}
