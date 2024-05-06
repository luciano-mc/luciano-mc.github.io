import Logo from '@/assets/logo.png';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

function Header() {
  const { theme, language, handleTheme, handleLanguage } = useThemeContext();
  const { t } = useTranslation();

  return (
    <nav className="flex justify-between items-center text-primary font-semibold h-[10vh]">
      <div className="h-20 w-24 relative">
        <img src={Logo} alt="Luciano" className={`w-full h-full object-contain ${theme === 'dark' ? 'invert-[.96] sepia-100 saturate-[0] hue-rotate-[299deg] brightness-[1.09] contrast-[1.01]' : ''}`} />
        <span className="absolute bottom-[26px] right-[-10px] w-2 h-2 rounded-full bg-secondary animate-[glowing_2s_ease-in-out_infinite]"></span>
      </div>
      <div className="flex gap-5 items-center">
        <ul className="hidden sm:flex gap-5">
          <li>
            <a href="#about" className="hover:brightness-[1.1] focus:outline-none focus-visible:outline-secondary">{t('navlinks.about')}</a>
          </li>
          <li>
            <a href="#projects" className="hover:brightness-[1.1] focus:outline-none focus-visible:outline-secondary">{t('navlinks.projects')}</a>
          </li>
          <li>
            <a href="#contact" className="hover:brightness-[1.1] focus:outline-none focus-visible:outline-secondary">{t('navlinks.contact')}</a>
          </li>
        </ul>
        <div className="flex justify-center items-center relative">
          <div className="w-0 sm:before:w-[1px] before:h-full before:bg-primary before:absolute before:left-0 before:top-0"></div>
          <button className="bg-secondaryBackground text-secondary w-14 h-10 ml-8 mr-4 transition focus:outline-none focus-visible:outline-secondary hover:brightness-[1.1]" aria-label="theme" title="Theme" onClick={() => handleTheme()}>
            {theme === 'dark' ?
              <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg" color="#000000"><path className="stroke-secondary" d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                :
              <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg" color="#000000"><path className="stroke-secondary" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M22 12L23 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M12 2V1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M12 23V22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M20 20L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M20 4L19 5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M4 20L5 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M4 4L5 5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="stroke-secondary" d="M1 12L2 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            }
          </button>
          <button className="bg-secondaryBackground text-secondary w-14 h-10 mx-4 transition focus:outline-none focus-visible:outline-secondary hover:brightness-[1.1]" aria-label="language" title="Language" onClick={() => handleLanguage()}>{language.toUpperCase()}</button>
        </div>
      </div>
    </nav>
  )
}

export default Header;