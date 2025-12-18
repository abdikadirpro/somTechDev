import React from 'react'


function Footer() {

  return (
    <div className="flex justify-around lg:1/2 flex-col  items-center md:1/3 sm:flex-row bg-blue-400 w-screen h-[170px]  ">
      <div className="max-w-[1100px] mx-auto  flex justify-around lg:1/2 flex-col  items-center md:1/3 sm:flex-row bg-blue-400 w-screen ">
        <div >
        <h1 className='capitalize text-4xl text-white   '>Join and get amazing discoun</h1>
      </div>
      <div className=" flex justify-center items-center gap-y-2 ">
        <form action="" className='   grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full max-w-3xl  '>
            <input type="text" placeholder='your name'
            className='bg-transparent text-white placeholder:text-white outline-none focus:ring-2 focus:ring-blue-500 capitalize border border-l-gray-50 p-1 rounded-md'
            />
            <input type="text" placeholder='your email'
            className='bg-transparent text-white placeholder:text-white capitalize outline-none focus:ring-2 focus:ring-blue-500 border border-l-gray-50 p-1 rounded-md'
            />
            <button className='border border-l-gray-50 p-1 px-6 text-white hover:bg-blue-500'>subscribe</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Footer
