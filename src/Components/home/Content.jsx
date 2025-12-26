import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Content = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.posts.darkMode)
  return (
    <div className="flex flex-col justify-start items-start max-w-[1100px] w-full px-4 sm:px-6 md:px-8 gap-5 mx-auto text-center font-body">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl capitalize">
        {t("content.title")}
      </h1>
      <p className={`"text-2xl sm:text-xl md:text-xl ${darkMode ? "text-gray-800 text-start":"text-gray-300 text-start "}  max-w-3xl "`}>
        {t("content.description")}
      </p>
    </div>
  );
};

export default Content;
