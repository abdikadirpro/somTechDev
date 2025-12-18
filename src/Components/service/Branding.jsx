import React from "react";
import brnad from "../../assets/image/branding2.png";
import { useSelector } from "react-redux";

const Branding = () => {
    const darkMode = useSelector((state)=>state.posts.darkMode);

  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12 mb-6" :"bg-black text-white mb-6"}>


  <div className="mb-5">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
     Branding and Graphics
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
       We help build strong brand identities with logos, visuals,
      and design assets that reflect your style and connect with your audience
    </p>
  </div>


 <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }>
    
       <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>

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
