import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Navigation from './assets/components/Navigation';
import Home from './assets/components/Home';
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
      <div className="relative z-10">
        <Navigation />
        {/* Render sections inline for single-page navigation */}
        <Home />
        <About />
        {/* Future sections: Projects, Achievements, Certifications, Stats, Contact */}
      </div>
    </div>
  );
}

export default App;
