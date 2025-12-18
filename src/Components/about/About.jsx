import React from 'react'

function About() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center py-10 px-4 sm:px-6 md:px-12">

    
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-slate-400 text-center">
        About Us
      </h1>

    
      <div className="w-full max-w-2xl text-center">
        <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
          We are a dedicated software solutions company committed to delivering innovative, reliable, and user-friendly digital products. Our goal is to help businesses, institutions, and individuals improve efficiency, productivity, and growth through modern technology.
        </p>
      </div>

    
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-4">
          What We Do
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-slate-500 space-y-2 text-left sm:text-left mx-auto max-w-md">
          <li>Web application development</li>
          <li>Mobile application development</li>
          <li>System design and integration</li>
          <li>Maintenance and technical support</li>
        </ul>
      </div>

     
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
       
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-2">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            To deliver high-quality software solutions that solve real problems, add value to our clients, and support digital transformation.
          </p>
        </div>

        
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-2">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            To become a trusted technology partner by consistently providing innovative, efficient, and sustainable software solutions.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
