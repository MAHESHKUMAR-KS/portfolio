
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => (
  <section id="about" className="bg-transparent text-white min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Hi, I'm <span className="text-gray-300">MAHESHKUMAR KS</span>
      </h1>
      <h2 className="text-2xl font-semibold mb-8 text-center text-gray-400">
        AI & DS Student
      </h2>
      <div className="flex gap-8 mb-8 justify-center">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FiGithub className="text-purple-400 text-2xl" /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-blue-400 text-2xl" /></a>
        <a href="mailto:your@email.com"><FiMail className="text-yellow-400 text-2xl" /></a>
        <a href="https://wa.me/942626815" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-green-400 text-2xl" /></a>
        <a href="/resume.pdf" download className="flex items-center gap-2 text-gray-300">
          <FiDownload className="text-red-500 text-2xl" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  </section>
);

export default About;