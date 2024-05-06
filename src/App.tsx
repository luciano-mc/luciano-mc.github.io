import Header from '@/components/Header.tsx';
import Hero from '@/components/Hero.tsx';
import About from '@/components/About.tsx';
import Skills from '@/components/Skills.tsx';
import Projects from '@/components/Projects.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';
import { useThemeContext } from '@/context/ThemeContext.tsx';
import { useEffect } from 'react';

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <div className="bg-background text-primary overflow-hidden transition px-4 2xl:px-80 font-['Poppins']">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
