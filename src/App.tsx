import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useThemeContext } from '@/context/ThemeContext';
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
