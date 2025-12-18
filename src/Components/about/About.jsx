import React from 'react'

function About() {
  return (
    <div className='flex flex-col gap-10 justify-center items-center my-3'>
        <h1 className='text-4xl font-semibold text-slate-500'>About us</h1>
      <div className="w-[800px] mx-auto ">
         <span className='space-x-1 text-2xl text-slate-500'>We are a dedicated software solutions company committed to delivering innovative, reliable, and user-friendly digital products. Our goal is to help businesses, institutions, and individuals improve efficiency, productivity, and growth through modern technology.</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className='text-4xl font-semibold text-slate-500 my-2'>What We Do</h1>
        <span className='text-2xl text-slate-500 my-2'>We provide a wide range of software services, including:</span>
        <ul className='text-2xl text-slate-500 list-disc'>
            <li>
                Web application development
            </li>
            <li>
               Mobile application development 
            </li>
            <li>
               System design and integration 
            </li>
            <li>
            Maintenance and technical support
            </li>
           
        </ul>
      </div>
        <div className="flex flex-col justify-center items-center w-[800px] mx-auto">
        <h1 className='text-4xl font-semibold text-slate-500 my-2'>Our Mission</h1>
       <span className='text-2xl text-slate-600 my-2'>To deliver high-quality software solutions that solve real problems, add value to our clients, and support digital transformation.</span>
      </div>
     <div className="flex flex-col justify-center items-center w-[800px] mx-auto">
         <h1 className='text-4xl font-semibold text-slate-500 my-2'>Our Vision</h1>
       <span className='text-2xl text-slate-600 my-2'>To become a trusted technology partner by consistently providing innovative, efficient, and sustainable software solutions.</span>
      </div>
    </div>
  )
}

export default About;
