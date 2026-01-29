import React from "react";
import brnad from "../../assets/image/branding2.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Branding = () => {
  const darkMode = useSelector((state) => state.posts.darkMode);
  const { t } = useTranslation();

  return (
    <section
      className={`font-poppins my-10 px-4 sm:px-6 md:px-12 ${
        darkMode ? "bg-[#0000ff02] text-gray-800" : "bg-[#282828] text-white"
      }`}
    >
      <div className="mb-8">
        <h1
          className={`text-3xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide relative
          after:block after:w-20 after:h-0.5 after:bg-blue-600 after:mt-2 ${darkMode ? "text-blue-950" : "text-white"}`}
        >
          {t("branding.title")}
        </h1>

        <p
          className={`mt-3 max-w-xl text-sm sm:text-md md:text-lg font-medium ${darkMode ? "text-gray-800/80":"text-white/85"}`}
        >
          {t("branding.subtitle")}
        </p>
      </div>

      <div
        className={`flex flex-col md:flex-row items-center gap-8 rounded-xl p-6 transition-transform md:hover:scdale-105
       ${darkMode ? "text-gray-800/80":"text-white/85"}`}
      >
        <p
          className={`text-md sm:text-lg md:text-xl leading-relaxed md:w-1/1 ${darkMode ? "text-gray-800/80":"text-white/85"}`}
        >
          {t("branding.paragraph")}
        </p>

        <img
          src={brnad}
          alt={t("branding.imageAlt")}
          className="w-full sm:w-3/4 md:w-96 max-w-md rounded-lg object-contain transition-transform md:hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Branding;
