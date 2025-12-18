import React from "react"
import web1 from "../../assets/image/web2.avif"
import { useSelector } from "react-redux"

const Web = () => {
  const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <section
      className={`font-poppins my-10 px-4 sm:px-6 md:px-12 ${
        darkMode ? "bg-white text-gray-800" : "bg-black text-white"
      }`}
    >
    
      <div className="mb-8">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide relative
          after:block after:w-14 after:h-1 after:bg-primary after:mt-2`}
        >
          Web Development
        </h1>

        <p
          className={`mt-3 max-w-xl text-base sm:text-lg md:text-xl font-medium ${
            darkMode ? "text-gray-500" : "text-gray-300"
          }`}
        >
          Modern, scalable, and performance-driven web solutions
        </p>
      </div>

    
      <div
        className={`flex flex-col md:flex-row items-center gap-8 rounded-xl p-6 transition-transform md:hover:scale-105
        ${darkMode ? "shadow-lg" : "shadow-lg shadow-stone-600"}`}
      >
       
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed md:w-1/2 ${
            darkMode ? "text-gray-600" : "text-gray-300"
          }`}
        >
          We build fast, responsive, and user-friendly websites that deliver a
          seamless experience on every device. From personal portfolios to
          full-scale business platforms, we combine clean design with powerful
          functionality. Using modern technologies and best practices, we create
          secure, scalable, and high-performing solutions designed to grow with
          your business and leave a lasting impression.
        </p>

      
        <img
          src={web1}
          alt="Web Development"
          className="w-full sm:w-3/4 md:w-80 max-w-md rounded-lg object-cover transition-transform md:hover:scale-105"
        />
      </div>
    </section>
  )
}

export default Web
