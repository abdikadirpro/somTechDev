import React from "react";
// import web from "../../assets/image/web.jpg";
import web1 from "../../assets/image/web2.avif";
// import web2 from "../../assets/image/web1.jpg";

  import { useSelector,useDispatch } from "react-redux";

const Web = () => {
  const darkMode = useSelector((state)=>state.posts.darkMode);

  return (
   <section className={darkMode ? "body-Poppins w-fu bg-white my-5 px-6 md:px-12" :"bg-black text-white"}>


  <div className="mb-5 ">
    <h1 className="
      text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide
      relative
      after:block after:w-14 after:h-1 after:bg-primary after:mt-1
    ">
      Web Development
    </h1>

    <p className={darkMode ? "text-gray-500 text-3xl mt-1 max-w-xl font-medium  leading-tight":"text-white"}>
      Modern, scalable, and performance-driven web solutions
    </p>
  </div>


  <div className={darkMode ? "flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg px-5  hover:scale-105 duration-300":
    " flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg shadow-stone-500 px-5  hover:scale-105 duration-300"
  }>
    
    <p className={darkMode ? "text-lg text-gray-600 font-light leading-relaxed md:w-1/2 my-5" : "text-white"}>
      We build fast, responsive, and user-friendly websites that deliver a seamless experience on every device.
      From personal portfolios to full-scale business platforms, we combine clean design with powerful functionality.
      Using modern technologies and best practices, we create secure, scalable, and high-performing solutions
      designed to grow with your business and leave a lasting impression.
    </p>

    <img
      src={web1}
      alt="Web Development"
      className={darkMode ?  "md:w-80  max-w-md mb-2 hover:scale-105 duration-300 ":"bg-slate-700 md:w-80  max-w-md mb-2 hover:scale-105 duration-300"}
    />
  </div>
</section>

  );
};

export default Web;
