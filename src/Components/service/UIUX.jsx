import React from "react";
import ui from "../../assets/image/uiux.jpg";

const UiUx = () => {
  return (
   <section className="body-Poppins w-full bg-white px-6 md:px-12">


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      UI/UX Design
    </h1>

    <p className="text-gray-500 text-3xl mt-1 max-w-xl leading-tight font-medium">
  Innovative, user-focused, and visually striking designs that enhance engagement and deliver seamless experiences.    </p>
  </div>


  <div className="flex flex-col md:flex-row items-start gap-8">
    
    <p className="
      text-lg text-gray-600 font-light leading-relaxed
      md:w-1/2
      my-5
    ">
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
