import React from "react";
import main from "../../assets/image/maintenance.jpg";

const Maintenance = () => {
  return (
   <section className="body-Poppins w-full bg-white px-6 md:px-12">


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Maintenance and support
    </h1>

    <p className="text-gray-500 text-3xl mt-1 max-w-xl leading-tight font-medium">
                Reliable, scalable, and performance-driven solutions to keep your digital products running flawlessly.
    </p>
  </div>


  <div className="flex flex-col md:flex-row items-start gap-8">
    
    <p className="
      text-lg text-gray-600 font-light leading-relaxed
      md:w-1/2
      my-5
    ">
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
