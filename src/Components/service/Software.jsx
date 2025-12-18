import React from "react";
import soft from "../../assets/image/soft2.jpg";
import { useSelector } from "react-redux";

const Software = () => {
    const darkMode = useSelector((state)=>state.posts.darkMode);

  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12 mb-6" :"bg-black text-white mb-6"}>

  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Software solutions
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
      Innovative, reliable, and performance-focused web solutions
       designed to grow your business and enhance user experience.
    </p>
  </div>


   <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }>  
    
     <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>

     We provide custom software that simplifies your business operations. 
  From automation tools to full systems, our solutions are built to match your workflow 
  and support your growth. We focus on intuitive interfaces, seamless integrations, 
  and scalable architecture to help your team work smarter and achieve more.
    </p>

    <img
      src={soft}
      alt="Web Development"
      className="md:w-80  max-w-md hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default Software;
