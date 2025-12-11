import React from 'react';
import AnimatedLogo from './AnimatedLogo';
import SocialMediaIcons from './SocialMediaIcons';

const Home = () => (
  <section id="home" className="bg-transparent text-white min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-start justify-start w-1/2 px-8 mt-20 ml-8">
      <h1 className="text-5xl font-bold mb-4">
        Hello <span role="img" aria-label="wave">👋</span>, I'm
      </h1>
      <h2 className="text-5xl font-bold mb-4 text-white">
        Mahesh Kumar KS
      </h2>
      <h3 className="text-2xl font-semibold mb-8 text-green-500">
        AI & DS Student
      </h3>
      <button 
        className="bg-green-500 text-white py-2 px-6 rounded-full mb-8 w-max hover:bg-green-600 transition-colors duration-300"
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        Contact
      </button>
      <SocialMediaIcons showInstagram={false} />
    </div>
  </section>
);

export default Home;