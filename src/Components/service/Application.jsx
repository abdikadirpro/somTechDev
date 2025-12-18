import React from "react";
import app from "../../assets/image/app1.png";
import { useSelector } from "react-redux";

const Application = () => {
    const darkMode = useSelector((state)=>state.posts.darkMode);

  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12 mb-6" :"bg-black text-white mb-6"}>


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      MObile app Development
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
    High-performance web applications built with modern technologies
    </p>
  </div>


  <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }>
    
  <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>

      We develop high-quality mobile applications for Android and iOS that deliver smooth,
  reliable, and engaging user experiences.
  <br /><br />
  Our apps are built with intuitive interfaces, strong performance, and features tailored
  to your exact goals — whether it’s a startup idea, business solution, or enterprise system.
  <br /><br />
  From concept and design to development and deployment, we focus on scalability,
  security, and long-term usability to ensure your app grows with your business.
    </p>

    <img
      src={app}
      alt="Web Development"
      className="md:w-[610px]  max-w-md hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default Application;
