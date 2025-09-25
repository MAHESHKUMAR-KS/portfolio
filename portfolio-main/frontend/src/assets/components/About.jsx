import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './logoloop';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Smooth slide-from-right + fade variants for description
  const descriptionContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const fadeSlideItem = {
    hidden: { opacity: 0, x: 64 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeInOut' }
    }
  };

  const logos = [
    { node: <i className="devicon-react-original colored text-4xl"></i>, alt: 'React' },
    { node: <i className="devicon-javascript-plain colored text-4xl"></i>, alt: 'JavaScript' },
    { node: <i className="devicon-nodejs-plain colored text-4xl"></i>, alt: 'Node.js' },
    { node: <i className="devicon-express-original text-4xl text-white"></i>, alt: 'Express' },
    { node: <i className="devicon-mongodb-plain colored text-4xl"></i>, alt: 'MongoDB' },
    { node: <i className="devicon-tailwindcss-plain colored text-4xl"></i>, alt: 'Tailwind' },
    { node: <i className="devicon-github-original text-4xl text-white"></i>, alt: 'GitHub' },
    { node: <i className="devicon-java-plain colored text-4xl"></i>, alt: 'Java' },
    { node: <span className="text-4xl">🐧</span>, alt: 'Linux' },
    { node: <span className="text-4xl">🤗</span>, alt: 'Hugging Face' },
    { node: <i className="devicon-html5-plain colored text-4xl"></i>, alt: 'HTML5' }
  ];

  const skillDetails = {
    react: {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      icon: "devicon-react-original colored",
      color: "#61DAFB",
    },
    javascript: {
      name: "JavaScript",
      description: "The programming language of the web",
      icon: "devicon-javascript-plain colored",
      color: "#F7DF1E",
    },
    nodejs: {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      icon: "devicon-nodejs-plain colored",
      color: "#339933",
    },
    express: {
      name: "Express",
      description: "Fast, unopinionated web framework for Node.js",
      icon: "devicon-express-original",
      color: "#ffffff",
    },
    mongodb: {
      name: "MongoDB",
      description: "Document-based NoSQL database",
      icon: "devicon-mongodb-plain colored",
      color: "#47A248",
    },
    vite: {
      name: "Vite",
      description: "Next generation frontend tooling",
      color: "#646CFF",
    },
    tailwind: {
      name: "Tailwind",
      description: "A utility-first CSS framework",
      icon: "devicon-tailwindcss-plain colored",
      color: "#38B2AC",
    },
    github: {
      name: "GitHub",
      description: "Web-based version control and collaboration",
      icon: "devicon-github-original",
      color: "#ffffff",
    },
    java: {
      name: "Java",
      description: "Object-oriented programming language",
      icon: "devicon-java-plain colored",
      color: "#007396",
    },
    linux: {
      name: "Linux",
      description: "Open-source operating system",
      icon: "🐧",
      color: "#FCC624",
    },
    huggingface: {
      name: "Hugging Face",
      description: "AI and machine learning platform",
      icon: "🤗",
      color: "#FF6B35",
    },
    html5: {
      name: "HTML5",
      description: "Markup language for web development",
      icon: "devicon-html5-plain colored",
      color: "#E34F26",
    }
  };

  return (
    <section id="about" className="min-h-screen bg-transparent text-white py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* About me heading with modern typography */}
          <h2 className="font-inter font-black text-4xl md:text-5xl lg:text-6xl mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side - Profile Image */}
            <div className="md:w-1/3">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full overflow-hidden w-72 h-72 mx-auto bg-gradient-to-b from-[#4ade80] to-transparent p-1"
              >
                <img
                  src="/profile.jpg"
                  alt="Mahesh Kumar - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full bg-gray-800"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400.png?text=MK";
                  }}
                />
              </motion.div>
            </div>

            {/* Right side - Content */}
            <div className="md:w-2/3 space-y-8">
              <motion.div
                variants={descriptionContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35, margin: '0px 0px -100px 0px' }}
              >
                <motion.p
                  variants={fadeSlideItem}
                  className="font-inter font-medium text-lg md:text-xl leading-relaxed tracking-wide text-gray-200 mb-6"
                >
                  Hi there! I'm Mahesh Kumar, a Full Stack Developer passionate about creating efficient and scalable web solutions.
                  With a strong foundation in both front-end and back-end development, I specialize in building modern, responsive web applications.
                </motion.p>

                <motion.p
                  variants={fadeSlideItem}
                  className="font-inter font-medium text-lg md:text-xl leading-relaxed tracking-wide text-gray-200"
                >
                  I work extensively with React.js, Node.js, and various modern web technologies to create seamless user experiences.
                  My focus is on writing clean, maintainable code and implementing best practices in web development.
                </motion.p>
              </motion.div>

              {/* Skills section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <h3 className="font-inter font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#4ade80] to-[#22d3ee] leading-tight tracking-wide drop-shadow-md">
                  Here are my main skills:
                </h3>
                <LogoLoop
                  logos={logos}
                  speed={60}
                  direction="left"
                  logoHeight={40}
                  gap={32}
                  pauseOnHover={true}
                  scaleOnHover={true}
                  className="justify-center"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
