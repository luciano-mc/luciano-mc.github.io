import '@/styles/hero.css';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <main className="h-[90vh] flex items-center justify-center">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-2xl">{t('intro')}<br/><span className="text-4xl text-secondary font-bold text-shadow-custom title-neon"><span className="title-flicker">FRONT<span className="title-tilt">E</span>ND DEVELO<span className="title-tilt title-tilt-delay">P</span>ER</span></span> 
        
        {/* <br></br><span className=" ml-[30%] bg-gradient-to-r from-[#55ffe2] to-[#0092cc] bg-clip-text text-transparent cursor-pointer">D</span><span className="animate-[flicker_1.8s_ease-in-out_infinite]">E</span><span className="V">V</span> */}
        
        </h1>
        <p>{t('description')}</p>
        <div>
          <a className="flex items-center group justify-center w-[50px] h-[50px] rounded-[50%] overflow-hidden border-2 border-secondary text-center relative m-auto animate-[bounce-top_1s] animate-[fillmode_forward] after:absolute after:z-10 after:inset-0 after:h-0 after:bg-secondary after:transition-all after:duration-300 after:ease-out hover:after:h-full focus:outline-none focus:outline-secondary" href="#about" aria-label="arrow"><svg className="absolute z-30" width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path className="stroke-secondary group-hover:stroke-background" d="M6 13L12 19L18 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary group-hover:stroke-background" d="M6 5L12 11L18 5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
        </div>
      </div>
    </main>
  )
}

export default Hero;