
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  

  return (
    <div className="flex flex-col gap-12 justify-center items-center py-10 px-4 sm:px-6 md:px-12">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 text-center">
        {t('about.title')}
      </h1>

      <div className="w-full max-w-2xl text-center">
        <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
          {t('about.description')}
        </p>
      </div>

      <div className="w-full max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-4">
          {t('about.whatWeDoTitle')}
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-slate-500 space-y-2 text-left sm:text-left mx-auto max-w-md">
          <li>{t('about.list.webApp')}</li>
          <li>{t('about.list.mobileApp')}</li>
          <li>{t('about.list.systemDesign')}</li>
          <li>{t('about.list.maintenance')}</li>
        </ul>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-2">
            {t('about.missionTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            {t('about.missionText')}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-400 mb-2">
            {t('about.visionTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed">
            {t('about.visionText')}
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
