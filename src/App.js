import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Services from './components/Service';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Resume darkMode={darkMode}/>
      <Services darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
     
      
    </div>
  );
}

export default App;