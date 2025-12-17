import React, { useState } from "react";
import { motion } from "framer-motion";
import Dock from './Dock';
import GlareHover from './GlareHover';
import { VscHome, VscArchive, VscAccount } from 'react-icons/vsc';
import ShinyText from './ShinyText.jsx'; // Import the ShinyText component

const projects = [
  {
    id: 1,
    title: "Career Guidance App",
    description: "carrier-gudience-app helps students discover colleges and scholarships that fit their academic profile. Users can create a profile, view recommended colleges based on exam scores and cutoffs, search the college dataset, check eligibility for different engineering/college exams, and explore curated scholarships gathered by scrapers. The app includes a chatbot interface for quick guidance, Google sign-in for authentication, and an admin-friendly backend that stores colleges, cutoffs, careers and scholarships in a MongoDB database. Scrapers and seed scripts keep scholarship and college data up to date.",
    github: "https://github.com/MAHESHKUMAR-KS/Carrier-guidence-app",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Google OAuth"],
    image: "/images/project1.jpg",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Cems App",
    description: "Fest Assist (College Event Management System) is a modern full-stack application designed to streamline event organization and participation on campus. The frontend is a TypeScript React app scaffolded with Vite and styled using Tailwind CSS and shadcn-ui components; it uses a component-driven UI with Radix-based primitives, animations via Framer Motion, and interactive widgets (carousel, charts, OTP input). The backend is a REST API built with Express and Mongoose, secured with JWTs and password hashing (bcryptjs), and provides endpoints for authentication, event CRUD, registration/unregistration, and a local chatbot feature to query events and history. The project includes seeding scripts, environment-based configuration, and scripts for development and production builds. Typical flows include user signup/login, event creation by event-members, student registrations, admin moderation, and conversational FAQs via the chatbot.",
    github: "https://github.com/MAHESHKUMAR-KS/cems-app",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
    image: "/images/project2.jpg",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Pneumonia Detection",
    description: "A medical imaging pipeline that uses transfer learning (VGG16) to classify chest X-rays as NORMAL or PNEUMONIA. The project includes data augmentation, class-weighted training to mitigate class imbalance, evaluation and visualization tools for misclassified samples, utilities to convert and save models, and a Streamlit web app for interactive predictions. Features preprocessing and augmentation, frozen ImageNet VGG16 backbone, custom top layers with L2 regularization and Dropout, callbacks (EarlyStopping, ModelCheckpoint, ReduceLROnPlateau, LR scheduler), and a Streamlit UI for demo and batch predictions.",
    github: "https://github.com/MAHESHKUMAR-KS/pnemonia-detection",
    technologies: ["Python", "TensorFlow/Keras", "Streamlit", "Pillow", "NumPy", "Matplotlib"],
    image: "/images/project3.jpg",
    category: "AI&ML"
  },
  {
    id: 4,
    title: "Fake News Detection",
    description: "This project trains a text-classification pipeline on public news datasets (contains Fake.csv and True.csv) to detect fake news. The model uses text normalization, combined word and character hashing features with TF-IDF, and an SGDClassifier (log loss) to produce calibrated probability scores; training artifacts and evaluation metrics are saved to metrics.json and model_pipeline.pkl. A lightweight Streamlit app (app.py) loads the pipeline to provide single-text and CSV batch predictions with an adjustable probability threshold for sensitivity control.",
    github: "https://github.com/MAHESHKUMAR-KS/fake-news-predection",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Streamlit", "joblib"],
    image: "/images/project4.jpg",
    category: "AI&ML"
  },
  // New project added here
  {
    id: 5,
    title: "Smart Wealth Investment",
    description: "WealthyWise Professional is an advanced mutual fund advisory platform designed to provide data-driven investment recommendations with AI-powered insights. The platform offers a comprehensive suite of tools for informed investment decision-making, analyzing over 800 mutual funds to deliver scientific risk profiling and personalized portfolio recommendations. The platform distinguishes itself through its AI-enhanced features that go beyond traditional robo-advisors by incorporating machine learning models for more accurate risk assessment and fund performance prediction. Rather than providing random suggestions, the system uses scientific methodologies to analyze user behavior patterns and market data.",
    github: "https://github.com/MAHESHKUMAR-KS/smart-wealth.git",
    technologies: ["Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "K-Means"],
    image: "/images/project5.jpg",
    category: "AI&ML"
  }
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
      onClick: () => setFilter("Full Stack") 
    },
    { 
      icon: <VscAccount size={18} />, 
      label: 'AI&ML', 
      onClick: () => setFilter("AI&ML") 
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
          style={{
            textShadow: "0 0 15px rgba(74, 222, 128, 0.3)"
          }}
        >
          <ShinyText 
            text="My Projects" 
            className="inline"
            speed={3}
          />
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
        <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${filter}-${index}`}
              initial={{ 
                opacity: 0, 
                x: (index % 2 === 0) ? -150 : 150
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
              }}
              whileHover={{ y: -10 }}
              className="h-full flex flex-col"
            >
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="16px"
                borderColor="rgba(74, 222, 128, 0.6)"
                glareColor="#4ade80"
                glareOpacity={0.5}
                glareSize={200}
                transitionDuration={400}
                className="border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-green-500/40 transition-all duration-300 flex-grow flex flex-col group"
                style={{
                  boxShadow: "0 0 25px rgba(74, 222, 128, 0.4)",
                }}
              >
                <div className="p-5 md:p-6 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="mb-4 md:mb-5 rounded-xl overflow-hidden h-40 md:h-48 flex-shrink-0 shadow-lg">
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
                  <div className="mb-2 md:mb-3">
                    <span className={`inline-block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-sans font-bold rounded-full bg-transparent border transition-all duration-300 ${
                      project.category === "AI&ML" 
                        ? "border-purple-500/50 text-purple-200 hover:border-purple-400 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.4)]" 
                        : "border-blue-500/50 text-blue-200 hover:border-blue-400 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-sans font-extrabold mb-2 md:mb-3 text-white tracking-tight transition-all duration-300 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                    <ShinyText 
                      text={project.title} 
                      className="inline"
                      speed={4}
                    />
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 md:px-3 md:py-1.5 bg-transparent rounded-lg text-xs font-sans font-bold text-gray-200 border border-gray-500/50 hover:border-green-400/70 transition-all duration-300 hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.3)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="mb-4 md:mb-6 text-gray-300 leading-relaxed flex-grow font-sans font-medium text-sm md:text-base">
                    <ShinyText 
                      text={project.description} 
                      className="inline"
                      speed={5}
                      disabled={false}
                    />
                  </p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700/50">
                    <span className="text-sm text-gray-500">{project.id === 5 ? '2024' : '2025'}</span>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 text-base sm:text-lg font-medium flex items-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;