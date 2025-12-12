import React from 'react';
import { FaReact } from 'react-icons/fa';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-gray-300 py-6 md:py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Side - Social Icons */}
          <div className="flex justify-start md:justify-start w-full md:w-auto">
            <SocialMediaIcons className="justify-start text-sm md:text-base" />
          </div>
          
          {/* Center - Text with React Icon */}
          <div className="flex items-center justify-center text-sm md:text-base">
            <span className="mr-1 md:mr-2">This website was made with</span>
            <FaReact className="text-blue-400 animate-pulse text-sm md:text-base" />
          </div>
          
          {/* Right Side - Signature */}
          <div className="flex justify-end md:justify-end w-full md:w-auto">
            <span className="text-gray-200 font-medium text-sm md:text-base">@Maheshkumar K S</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;