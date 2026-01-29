import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 w-full">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold capitalize">
            Join and get amazing discounts
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">
            Subscribe to our newsletter to get updates and exclusive offers.
          </p>
        </div>

        
        <div className="w-full md:w-auto">
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center">
            <input
              type="text"
              placeholder="Your Name"
              name="YourName"
              id="YourName"
              className="bg-transparent border border-white rounded-md px-3 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/70 w-full sm:w-auto"
            />
            <input
              type="email"
              id="emails"
              name="emails"
              placeholder="Your Email"
              className="bg-transparent border border-white rounded-md px-3 py-2 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/70 w-full sm:w-auto"
            />
            <button className="bg-blue-50 text-blue-900 font-semibold px-6 py-2 rounded-md hover:bg-blue-700/90 hover:text-white transition">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  )
}

export default Footer
