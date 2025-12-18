import React from "react";
import main from "../../assets/image/maintenance.jpg";
import { useSelector } from "react-redux";

const Maintenance = () => {
    const darkMode = useSelector((state)=>state.posts.darkMode);

  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12 mb-6" :"bg-black text-white mb-6"}>


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Maintenance and support
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
                Reliable, scalable, and performance-driven solutions to keep your digital products running flawlessly.
    </p>
  </div>


 <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }> 
    
         <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>

    We offer ongoing updates, fixes, and improvements to keep your website, system, or mobile app running smoothly. 
  Our support ensures your digital products stay secure and up-to-date. 
  Additionally, we provide performance monitoring, optimization, and timely guidance to prevent issues before they arise, 
  giving you peace of mind and allowing your business to operate without interruptions.
    </p>

    <img
      src={main}
      alt="Web Development"
      className="md:w-80  max-w-md hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default Maintenance;
