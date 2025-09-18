import { useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Navigation from './assets/components/Navigation';
import About from './assets/components/About';
import Particles from './assets/components/Particles';
// import Hero from './sections/Hero/Hero';
// import About from './sections/About/About';
// import Projects from './sections/Projects/Projects';
// import Contact from './sections/Contact/Contact';
// import Footer from './components/Footer';

function App() {
  // Smooth scroll to top on page load
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return (
    <div className="app relative min-h-screen overflow-hidden bg-black">
      <div className="fixed inset-0 w-full h-full">
        <Particles />
      </div>
      <div className="relative z-10">
        <Navigation />
        <About />
      </div>
    </div>
  );
}

export default App;
