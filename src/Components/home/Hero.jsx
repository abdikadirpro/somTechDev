import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Hero = () => {
    const darkMode = useSelector((state) => state.posts.darkMode)
   const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center" >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-w-[1100px] mx-auto px-4">

       
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 
            className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight capitalize">
            {t("hero.title")}
          </h1>

          <p className={`"text-base sm:text-lg md:text-xl mt-4 ${darkMode ? "text-gray-800":"text-gray-300"} "`}>
             {t("hero.description")}
          </p>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 transition font-semibold text-white px-6 py-3 rounded-lg">
            {t("hero.button")}
          </button>
        </div>

       
        <img
          className="w-full max-w-[400px] h-auto object-cover rounded-xl shadow-lg"
          src="https://media.istockphoto.com/id/2220470068/photo/successful-professional-typing-on-laptop-working-intently-at-sleek-workspace-with-focused.webp?a=1&b=1&s=612x612&w=0&k=20&c=1nntQfSRPum3qhApfrL3AbF18VqCxp1DfH3dan_fAaI="
          alt="Digital product development"
        />
      </div>
    </section>
  )
}

export default Hero
