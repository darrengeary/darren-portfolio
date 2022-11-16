import React from "react"
import { AcademicCapIcon, LibraryIcon } from "@heroicons/react/solid"

export default function Upcoming() {
  return (
    <section id='upcomings'>
      <div className='container px-5 py-10 mx-auto text-center'>
        <LibraryIcon className='w-10 inline-block mb-4' />
        <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
          Upcoming Project
        </h1>
        <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 md:px-10 mx-auto mb-12'>
          I am currently working on a school lunch ordering system for schools
          who receive government funded lunches by suppliers.
        </p>
        <img className='w-30 m-auto' alt='ithe' src='./ithe.png'></img>
        <div className='upcoming-cont'>
          <img className='uml' alt='usecase' src='./usecase.png'></img>
          <img className='uml' alt='activity' src='./activity.png'></img>
        </div>{" "}
      </div>
    </section>
  )
}
