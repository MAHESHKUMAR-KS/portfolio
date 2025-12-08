import React, { useState } from "react";
import { motion } from "framer-motion";
import Dock from './Dock';
import GlareHover from './GlareHover';
import { VscHome, VscArchive, VscAccount } from 'react-icons/vsc';

const projects = [
  {
    title: "Career Guidance App",
    description: "A comprehensive career guidance application for school and college students to explore various career paths with personalized recommendations.",
    github: "https://github.com/MAHESHKUMAR-KS/Carrier-guidence-app",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/project1.jpg",
    category: "Full Stack Application"
  },
  {
    title: "CEMS App",
    description: "College Event Management System for organizing and managing college events, registrations, and schedules efficiently.",
    github: "https://github.com/MAHESHKUMAR-KS/cems-app",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/project2.jpg",
    category: "Full Stack Application"
  },
  {
    title: "Pneumonia Detection",
    description: "AI-powered pneumonia detection system using chest X-ray images with deep learning models for medical diagnosis assistance.",
    github: "https://github.com/MAHESHKUMAR-KS/pnemonia-detection",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    image: "/images/project3.jpg",
    category: "Artificial Intelligence and Machine Learning Project"
  },
  {
    title: "Fake News Detection",
    description: "Machine learning project that classifies news articles as fake or real using natural language processing techniques.",
    github: "https://github.com/MAHESHKUMAR-KS/fake-news-predection",
    technologies: ["Python", "Scikit-learn", "NLP", "Pandas"],
    image: "/images/project4.jpg",
    category: "Artificial Intelligence and Machine Learning Project"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const dockItems = [
    { 
      icon: <VscHome size={18} />, 
      label: 'All', 
      onClick: () => setFilter("All") 
    },
    { 
      icon: <VscArchive size={18} />, 
      label: 'Full Stack', 
      onClick: () => setFilter("Full Stack Application") 
    },
    { 
      icon: <VscAccount size={18} />, 
      label: 'AI/ML', 
      onClick: () => setFilter("Artificial Intelligence and Machine Learning Project") 
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
        >
          My Projects
        </motion.h2>
        
        {/* Dock Component - Positioned at top */}
        <div className="flex justify-center mb-14">
          <Dock 
            items={dockItems}
            magnification={70}
            baseItemSize={50}
            distance={200}
            panelHeight={64}
            dockHeight={256}
            spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
          />
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="auto"
              background="transparent"
              borderRadius="16px"
              borderColor="rgba(74, 222, 128, 0.6)"
              glareColor="#4ade80"
              glareOpacity={0.5}
              glareSize={200}
              transitionDuration={400}
              className="border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-green-500/40 transition-all duration-300"
              style={{
                boxShadow: "0 0 25px rgba(74, 222, 128, 0.4)",
              }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Project Image */}
                <div className="mb-5 rounded-xl overflow-hidden h-48 flex-shrink-0 shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200.png/1f2937/FFFFFF?text=Project+Image";
                    }}
                  />
                </div>
                
                {/* Project Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-4 py-2 text-sm font-sans font-bold rounded-full bg-transparent border ${
                    project.category.includes("Artificial Intelligence") 
                      ? "border-purple-500/50 text-purple-200" 
                      : "border-blue-500/50 text-blue-200"
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-sans font-extrabold mb-3 text-white tracking-tight">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1.5 bg-transparent rounded-lg text-xs font-sans font-semibold text-gray-200 border border-gray-500/50 hover:border-gray-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="mb-6 text-gray-300 leading-relaxed flex-grow font-sans font-medium text-base">
                  {project.description}
                </p>
                
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-transparent border border-teal-500/50 text-white font-sans font-bold py-3 px-6 rounded-xl w-full justify-center transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/40"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span>View on GitHub</span>
                </motion.a>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;