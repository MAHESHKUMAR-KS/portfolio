import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section id="stats" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative overflow-hidden">
      {/* 3D Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
        >
          My Statistics
        </motion.h2>
        
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8 justify-center items-stretch`}>
          {/* LeetCode 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
            style={{
              perspective: '1000px'
            }}
          >
            <div 
              className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(255, 165, 0, 0.25)',
                background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
                transform: 'rotateX(0deg) rotateY(0deg)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 10;
                const rotateX = ((centerY - y) / centerY) * 10;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = `0 ${10 + Math.abs(rotateY)}px ${20 + Math.abs(rotateX) * 2}px -12px rgba(255, 165, 0, ${0.25 + Math.abs(rotateX) * 0.01})`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                card.style.boxShadow = '0 25px 50px -12px rgba(255, 165, 0, 0.25)';
              }}
            >
              {/* Floating Shadow */}
              <div 
                className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl -z-10 transition-all duration-500"
                style={{
                  transform: 'translateZ(-50px)'
                }}
              ></div>
              
              {/* Embossed LeetCode Icon */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-orange-500">
                    <path d="M16.183 17.156l-1.414-1.414-2.829 2.829-2.828-2.829-1.414 1.414 2.828 2.829-2.828 2.828 1.414 1.414 2.828-2.828 2.829 2.828 1.414-1.414-2.829-2.828 2.829-2.829zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10z"/>
                  </svg>
                </div>
              </div>
              
              {/* Orange Accent Glow Title */}
              <div className="pt-20 px-6 pb-4 flex justify-center">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(255,165,0,0.5)] text-center">
                  LeetCode Performance
                </h3>
              </div>
              
              {/* Stats Widget */}
              <div className="px-6 pb-6">
                <div className="rounded-xl overflow-hidden border-2 border-orange-500/30 shadow-lg">
                  <iframe 
                    src="https://leetcard.jacoblin.cool/mahesh_kumarks?theme=dark&border=0&font=Roboto" 
                    title="LeetCode Stats"
                    className="w-full h-64 md:h-72 border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              {/* 3D Progress Ring */}
              <div className="absolute bottom-6 right-6">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#333" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="url(#orangeGradient)" 
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF8C00" />
                        <stop offset="100%" stopColor="#FFA500" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-sm">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* GitHub 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
            style={{
              perspective: '1000px'
            }}
          >
            <div 
              className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25)',
                background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
                transform: 'rotateX(0deg) rotateY(0deg)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 10;
                const rotateX = ((centerY - y) / centerY) * 10;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = `0 ${10 + Math.abs(rotateY)}px ${20 + Math.abs(rotateX) * 2}px -12px rgba(147, 51, 234, ${0.25 + Math.abs(rotateX) * 0.01})`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                card.style.boxShadow = '0 25px 50px -12px rgba(147, 51, 234, 0.25)';
              }}
            >
              {/* Floating Shadow */}
              <div 
                className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl -z-10 transition-all duration-500"
                style={{
                  transform: 'translateZ(-50px)'
                }}
              ></div>
              
              {/* Embossed GitHub Icon */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.491.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576 4.752-1.575 8.2-6.065 8.2-11.385 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
              
              {/* Soft Red Glow Title */}
              <div className="pt-20 px-6 pb-4 flex justify-center">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] text-center">
                  GitHub Contributions
                </h3>
              </div>
              
              {/* GitHub Contributions Graph */}
              <div className="px-6 pb-6">
                <div className="rounded-xl overflow-hidden border-2 border-purple-500/30 shadow-lg relative bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-red-900/20 rounded-xl"></div>
                  <img 
                    src="https://ghchart.rshah.org/MAHESHKUMAR-KS" 
                    alt="GitHub Contributions"
                    className="w-full h-64 md:h-72 object-contain relative z-10 p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Try alternative username format
                      e.target.src = "https://ghchart.rshah.org/maheshkumar-ks";
                      // Add another fallback handler
                      e.target.onerror = () => {
                        e.target.src = "https://via.placeholder.com/600x200.png/1f2937/FFFFFF?text=GitHub+Contributions+Graph+Loading...";
                      };
                    }}
                  />
                  {/* Curved 3D Frame */}
                  <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-white/10"></div>
                </div>
              </div>
              
              {/* Floating Score Badge */}
              <div className="absolute bottom-6 right-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-red-600 flex items-center justify-center shadow-lg transform rotate-3 transition-transform duration-300 hover:rotate-6">
                    <span className="text-white font-bold text-sm">127</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-red-600 blur-md opacity-50 -z-10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;