import React, { useState } from "react";
import { motion } from "framer-motion";

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
    category: "AI&ML"
  },
  {
    title: "Fake News Detection",
    description: "Machine learning project that classifies news articles as fake or real using natural language processing techniques.",
    github: "https://github.com/MAHESHKUMAR-KS/fake-news-predection",
    technologies: ["Python", "Scikit-learn", "NLP", "Pandas"],
    image: "/images/project4.jpg",
    category: "AI&ML"
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen bg-transparent text-white py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
        >
          My Projects
        </motion.h2>
        
        {/* Project Type Logos - Clickable Filters */}
        <div className="flex justify-center gap-8 mb-16">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("All")}
            className={`p-5 rounded-full bg-gray-800/60 backdrop-blur-md border-2 transition-all duration-300 shadow-lg ${
              filter === "All" 
                ? "border-teal-400 scale-110 shadow-teal-500/30" 
                : "border-white/10 hover:border-white/30 hover:shadow-white/20"
            }`}
            aria-label="Show all projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("Full Stack Application")}
            className={`p-5 rounded-full bg-gray-800/60 backdrop-blur-md border-2 transition-all duration-300 shadow-lg ${
              filter === "Full Stack Application" 
                ? "border-blue-400 scale-110 shadow-blue-500/30" 
                : "border-white/10 hover:border-white/30 hover:shadow-white/20"
            }`}
            aria-label="Show full stack projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("Artificial Intelligence and Machine Learning Project")}
            className={`p-5 rounded-full bg-gray-800/60 backdrop-blur-md border-2 transition-all duration-300 shadow-lg ${
              filter === "Artificial Intelligence and Machine Learning Project" 
                ? "border-purple-400 scale-110 shadow-purple-500/30" 
                : "border-white/10 hover:border-white/30 hover:shadow-white/20"
            }`}
            aria-label="Show AI/ML projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 border border-white/10 rounded-2xl bg-transparent backdrop-blur-md hover:bg-gray-700/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-xl hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="mb-5 rounded-xl overflow-hidden h-52 flex-shrink-0 shadow-lg">
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
              
              <h3 className="text-2xl font-sans font-extrabold mb-3 text-white">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-transparent rounded-lg text-xs font-sans font-semibold text-gray-200 border border-gray-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="mb-6 text-gray-300 leading-relaxed flex-grow font-sans font-medium">
                {project.description}
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-teal-500/50 text-white font-sans font-bold py-3 px-6 rounded-xl w-full justify-center transition-all duration-300 hover:bg-teal-500/10"
              >
                <span>View on GitHub</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;