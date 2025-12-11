import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Navigation from './assets/components/Navigation';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Particles from './assets/components/Particles';
import Projects from './assets/components/Projects';
import Certifications from './assets/components/Certifications';
import Achievements from './assets/components/Achievements';
import Leadership from './assets/components/Leadership';
import Stats from './assets/components/Stats';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
// import Hero from './sections/Hero/Hero';
// import About from './sections/About/About';
// import Projects from './sections/Projects/Projects';

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
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          sizeRandomness={1}
          alphaParticles={false}
          disableRotation={false}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          cameraDistance={20}
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        {/* Render sections inline for single-page navigation */}
        <main className="flex-grow">
          <Home />
          <About />
          <Projects />
          <Certifications />
          <Achievements />
          <Leadership />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;