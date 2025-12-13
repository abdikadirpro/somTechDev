import React from "react";
import soft from "../../assets/image/soft2.jpg";

const Software = () => {
  return (
   <section className="body-Poppins w-full bg-white py-8 px-6 md:px-12">

  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Software solutions
    </h1>

    <p className="text-gray-500 text-3xl mt-1 max-w-xl leading-tight font-medium">
      Innovative, reliable, and performance-focused web solutions
       designed to grow your business and enhance user experience.
    </p>
  </div>


  <div className="flex flex-col md:flex-row items-start gap-8">
    
    <p className="
      text-lg text-gray-600 font-light leading-relaxed
      md:w-1/2
      my-5
    ">
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
