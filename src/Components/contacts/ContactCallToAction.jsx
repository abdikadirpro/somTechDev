import { GiStarsStack } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ContactCallToAction = () => {
      const darkMode = useSelector((state) => state.posts.darkMode)

  const { t } = useTranslation();

  return (
    <div className="border-l border-r border-slate-400 py-20">
      <div className="flex flex-col justify-center items-center gap-6 px-4 py-8 sm:px-6 md:px-12 max-w-3xl mx-auto">
        
        <p className="bg-slate-500 p-3 flex items-center gap-3 rounded-xl text-white text-base sm:text-lg md:text-xl">
          <GiStarsStack className="text-blue-400 text-2xl sm:text-3xl" />
          {t("contact.ctaText")}
        </p>

        <h1 className={`"text-3xl sm:text-4xl md:text-5xl font-semibold ${darkMode ? "text-gray-800":"text-gray-200"}  text-center"`}>
          {t("contact.title")}
        </h1>

        <p className={`"text-base sm:text-lg md:text-xl ${darkMode ? "text-gray-700":"text-gray-400"} text-center leading-relaxed"`}>
          {t("contact.description")}
          <span className="text-blue-400 font-semibold"> {t("contact.highlight")}</span>
        </p>

      </div>
    </div>
  );
};

export default ContactCallToAction;
