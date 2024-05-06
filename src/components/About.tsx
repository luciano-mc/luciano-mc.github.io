import Portrait from '@/assets/portrait.png';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center mb-24" id="about">
      <div className="flex flex-col text-center items-center gap-5 md:flex-row md:text-left">
        <div className="flex-2 h-[350px] w-[400px] relative">
          <img src={Portrait} alt="Luciano" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <h2 className="text-3xl font-bold text-secondary">{t('about.title')}</h2>
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          {/* <div>
            <a href="#" className="m-auto w-fit bg-secondary text-background font-semibold border-2 border-secondary rounded-3xl py-2 px-6 mr-5 focus:outline-none focus:outline-secondary">Ver más</a>
            <a href="#" className="m-auto w-fit border-2 border-secondary rounded-3xl py-2 px-6 mr-5 transition duration-200 hover:brightness-[1.2] focus:outline-none focus:outline-secondary">Ver más</a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About;