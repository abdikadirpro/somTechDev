import React from "react"
import app from "../../assets/image/app1.png"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next";

const Application = () => {
   const { t } = useTranslation();
  const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <section
      className={`font-poppins my-10 px-4 sm:px-6 md:px-12 ${
        darkMode ? "bg-white text-gray-800" : "bg-black text-white"
      }`}
    >
     
      <div className="mb-8">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide relative
          after:block after:w-14 after:h-1 after:bg-blue-500 after:mt-2`}
        >
            {t("application.title")}
        </h1>

        <p
          className={`mt-3 max-w-xl text-base sm:text-lg md:text-xl font-medium ${
            darkMode ? "text-gray-500" : "text-gray-300"
          }`}
        >
           {t("application.subtitle")}
        </p>
      </div>

    
      <div
        className={`flex flex-col md:flex-row items-center gap-8 rounded-xl p-6 transition-transform md:hover:scale-105
        ${darkMode ? "shadow-lg" : "shadow-lg shadow-blue-500"}`}
      >
       
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed md:w-1/2 ${
            darkMode ? "text-gray-600" : "text-gray-300"
          }`}
        >
            {t("application.paragraph1")}
          <br />
          <br />
            {t("application.paragraph2")}
          <br />
          <br />
         {t("application.paragraph3")}
        </p>

       
        <img
          src={app}
          alt="Mobile App Development"
          className="w-full sm:w-3/4 md:w-96 max-w-md rounded-lg object-contain transition-transform md:hover:scale-105"
        />
      </div>
    </section>
  )
}

export default Application
