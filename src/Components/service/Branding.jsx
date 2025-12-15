import React from "react";
import brnad from "../../assets/image/branding2.png";

const Branding = () => {
  return (
   <section className="body-Poppins w-full bg-white px-6 md:px-12">


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
     Branding and Graphics
    </h1>

    <p className="text-gray-500 text-3xl mt-1 max-w-xl leading-tight font-medium">
       We help build strong brand identities with logos, visuals,
      and design assets that reflect your style and connect with your audience
    </p>
  </div>


  <div className="flex flex-col md:flex-row items-center rounded-xl shadow-lg px-5 
  hover:scale-105 duration-300 gap-20 mb-5">
    
    <p className="
      text-lg text-gray-600 font-light leading-relaxed
      md:w-1/2
      my-5
    ">
      We help build strong brand identities with logos, visuals,
  and design assets that reflect your style and connect with your audience.
  Our team also crafts cohesive digital experiences, ensuring your brand stands out
  across web and social platforms while maintaining consistency and impact.
    </p>

    <img
      src={brnad}
      alt="Web Development"
      className="md:w-72  max-w-md hover:scale-105 duration-300 "
    />
  </div>
</section>

  );
};

export default Branding;
