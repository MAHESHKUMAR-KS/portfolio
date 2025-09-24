import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './logoloop';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
    <section id="about" className="min-h-screen bg-transparent text-white py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* About me heading with green color */}
          <h2 className="text-5xl font-bold mb-16 text-[#4ade80]">About me</h2>
          
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg leading-relaxed mb-6">
                  Hi there! I'm Mahesh Kumar, a Full Stack Developer passionate about creating efficient and scalable web solutions.
                  With a strong foundation in both front-end and back-end development, I specialize in building modern, responsive web applications.
                </p>

                <p className="text-lg leading-relaxed">
                  I work extensively with React.js, Node.js, and various modern web technologies to create seamless user experiences.
                  My focus is on writing clean, maintainable code and implementing best practices in web development.
                </p>
              </motion.div>

              {/* Skills section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <h3 className="text-2xl text-[#4ade80] mb-8 text-center">Here are my main skills:</h3>
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
