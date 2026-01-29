import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Content = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.posts.darkMode)
  return (
    <div className="flex flex-col justify-ceneter items-start msax-w-[1100px] w-full px-4 sm:px-6 md:px-8 gap-5 mx-auto text-center font-body">
      <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl capitalize ${darkMode ? 'text-blue-950' : 'text-white'}`}>
        {t("content.title")}
      </h1>
      <p className={`"text-2xl sm:text-md md:text-lg ${darkMode ? "text-gray-800/80":"text-white/85"}  max-w-3xl "`}>
        {t("content.description")}
      </p>
    </div>
  );
};

export default Content;
