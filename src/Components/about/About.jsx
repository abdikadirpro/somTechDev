
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function About() {
  const { t } = useTranslation();
    const darkMode = useSelector((state) => state.posts.darkMode)

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 px-5 sm:px-5 md:px-12">

      <h1 className={`"text-3xl sm:text-2xl md:text-3xl font-bold py-5 ${darkMode ? "text-blue-950" : "text-white"} text-center"`}>
        {t('about.title')}
      </h1>

      <div className="w-full max-w-2xl text-center">
        <p className={`"text-base sm:text-md md:text-lg text-center ${darkMode ? "text-black/60":"text-white/85"}  leading-relaxed"`}>
          {t('about.description')}
        </p>
      </div>

      <div className="w-full max-w-2xl text-center">
        <h2 className={`"text-2xl sm:text-2xl md:text-3xl font-semibold ${darkMode ? "text-blue-950" : "text-white"} mb-4"`}>
          {t('about.whatWeDoTitle')}
        </h2>
        <ul className={`"list-disc list-inside text-base sm:text-md md:text-lg ${darkMode ? "text-center text-black/60":"text-center text-white/85"}  space-y-2 text-center sm:text-center mx-auto max-w-md"`}>
          <li>{t('about.list.webApp')}, {t('about.list.mobileApp')}</li>
          <li>{t('about.list.systemDesign')}, {t('about.list.maintenance')}</li>
          <li></li>
        </ul>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="text-center md:text-left">
          <h2 className={`"text-2xl sm:text-2xl md:text-3xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}  mb-2"`}>
            {t('about.missionTitle')}
          </h2>
          <p className={`"text-base sm:text-md md:text-lg ${darkMode ? "text-black/60":"text-white/85"}  leading-relaxed"`}>
            {t('about.missionText')}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className={`"text-2xl sm:text-2xl md:text-3xl font-semibold ${darkMode ? "text-blue-950" : "text-white"}  mb-2"`}>
            {t('about.visionTitle')}
          </h2>
          <p className={`"text-base sm:text-md md:text-lg leading-relaxed ${darkMode ? "text-black/60":"text-white/85"} "`}>
            {t('about.visionText')}
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
