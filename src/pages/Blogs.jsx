import React from 'react'
import Post from '../Components/blogs/Post'
import Footer from '../Components/footer/Footer'
import Footers from '../Components/footer/Footers'

const Blogs = () => {
  return (
    <div>
    <div className="w-full md:max-w-[1100px] md:mx-auto px-4">
        <Post/>
     </div>
        <Footer/>
        <Footers/>
    </div>
  )
}

export default Blogs