import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import SocialMediaIcons from './SocialMediaIcons';
import ShinyText from './ShinyText'; // Import the ShinyText component

const Home = () => (
  <section id="home" className="bg-transparent text-white min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-start justify-start w-full md:w-1/2 px-4 md:px-8 mt-20 md:mt-20 ml-4 md:ml-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hello <span role="img" aria-label="wave">👋</span>, I'm
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Mahesh Kumar KS
      </h2>
      {/* Example usage of ShinyText component */}
      <ShinyText 
        text="AI & DS Student" 
        className="text-xl md:text-2xl font-semibold mb-6 md:mb-8" 
        speed={3}
      />
      <button 
        className="bg-green-500 text-white py-2 px-6 rounded-full mb-6 md:mb-8 w-max hover:bg-green-600 transition-colors duration-300"
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        Contact
      </button>
      <SocialMediaIcons showInstagram={false} className="w-full" />
    </div>
  </section>
);

export default Home;