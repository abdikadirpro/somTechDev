import React from "react";
import ui from "../../assets/image/uiux.jpg";
import { useSelector } from "react-redux";


const UiUx = () => {
    const darkMode = useSelector((state)=>state.posts.darkMode);
  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12 mb-6" :"bg-black text-white mb-6"}>


  <div className="mb-5 ">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      UI/UX Design
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
  Innovative, user-focused, and visually striking designs that enhance engagement and deliver seamless experiences.    </p>
  </div>


 <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }>    
       <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>

     We create clean, modern, and user-centered designs that make your product intuitive and visually appealing. 
          Every design is crafted to optimize user flow, improve engagement, and deliver an exceptional digital experience. 
          Additionally, we focus on responsive layouts and accessibility, ensuring your product looks and works flawlessly across all devices.
        </p>

    <img
      src={ui}
      alt="Web Development"
      className="md:w-96  max-w-md hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default UiUx;
