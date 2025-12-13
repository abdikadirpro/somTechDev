import React from "react";
// import web from "../../assets/image/web.jpg";
import web1 from "../../assets/image/web2.avif";
// import web2 from "../../assets/image/web1.jpg";

const Web = () => {
  return (
   <section className="body-Poppins w-full bg-white py-8 px-6 md:px-12">


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Web Development
    </h1>

    <p className="text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight">
      Modern, scalable, and performance-driven web solutions
    </p>
  </div>


  <div className="flex flex-col md:flex-row items-start gap-8">
    
    <p className="
      text-lg text-gray-600 font-light leading-relaxed
      md:w-1/2
      my-5
    ">
      We build fast, responsive, and user-friendly websites that deliver a seamless experience on every device.
      From personal portfolios to full-scale business platforms, we combine clean design with powerful functionality.
      Using modern technologies and best practices, we create secure, scalable, and high-performing solutions
      designed to grow with your business and leave a lasting impression.
    </p>

    <img
      src={web1}
      alt="Web Development"
      className="md:w-80  max-w-md  hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default Web;
