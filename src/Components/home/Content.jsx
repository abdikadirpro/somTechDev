import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center max-w-[1100px] w-full px-4 sm:px-6 md:px-8 gap-5 mx-auto text-center">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl capitalize">
        {t("content.title")}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl">
        {t("content.description")}
      </p>
    </div>
  );
};

export default Content;
