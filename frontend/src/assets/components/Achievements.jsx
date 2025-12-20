import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import ShinyText from './ShinyText.jsx';


const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "2nd Prize in Aventrix Web Development Event",
      issuer: "Computer Society of India (CSI)",
      date: "Issued: 2024",
      description: "I secured 2nd Prize in the Aventrix Web Development Event organized by the Computer Society of India (CSI).\n\nThis competition was a valuable learning experience that challenged me to think creatively, solve problems efficiently, and apply my web development skills to build innovative solutions under competitive conditions.\n\nI am grateful to the organizers and judges for conducting such an inspiring event and for recognizing my efforts. This achievement has further motivated me to continuously improve my skills and build impactful, user-focused web applications.",
      image: "/achievements/achivements1.jpg",
      linkedinUrl: "https://www.linkedin.com/posts/maheshkumar-ks_webdevelopment-achievement-csi-activity-7270691093074046976-wFNR?utm_source=share&utm_medium=member_android&rcm=ACoAAFEkopgBnmfNKuWug-dRRcWFqbwlZZERv2o"
    },
    {
      id: 2,
      title: "Secured  Top 25 in  Ruby Year Technofest",
      issuer: "Kongu Engineering College",
      date: "Issued: 2024",
      description: "I placed in the Top 25 at the Ruby Year Technofest for my project Smart Wealth Investment.\n\nThe project focused on helping users make better financial decisions through simple analytics, clear visual insights and a smooth decision flow.\n\nThis event gave me a chance to present my work, get feedback from faculty and industry reviewers and improve the overall design. It pushed me to think more clearly about user needs, data accuracy and real world usability.",
      image: "/images/achivements1.png",
      certificateUrl: "/images/achivements1.pdf"
    }
  ];

  return (
    <section id="achievements" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
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
            text="My Achievements" 
            className="inline"
            speed={3}
          />
        </motion.h2>
        
        <div className="flex flex-col gap-8 justify-center items-center">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-4xl group"
            >
              <SpotlightCard className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-green-500/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/30">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Achievement Image */}
                  <div className="mb-6 rounded-xl overflow-hidden h-80 flex-shrink-0 shadow-lg">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/600x400.png/1f2937/FFFFFF?text=Award+Image";
                      }}
                    />
                  </div>
                  
                  {/* Achievement Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-sans font-extrabold mb-3 text-white tracking-tight transition-all duration-300 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)] md:hover:text-green-400 md:hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                      <ShinyText 
                        text={achievement.title} 
                        className="inline"
                        speed={4}
                      />
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      <ShinyText 
                        text={achievement.issuer} 
                        className="inline"
                        speed={4}
                      />
                    </p>
                    
                    <p className="mb-6 text-gray-300 leading-relaxed flex-grow font-sans font-medium text-base whitespace-pre-line">
                      <ShinyText 
                        text={achievement.description} 
                        className="inline"
                        speed={5}
                        disabled={false}
                      />
                    </p>
                  </div>
                  
                  {/* Footer with Date and Links */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700/50">
                    <span className="text-sm text-gray-500">
                      <ShinyText 
                        text={achievement.date} 
                        className="inline"
                        speed={5}
                      />
                    </span>
                    <div className="flex gap-2">
                      {achievement.certificateUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-transparent border border-purple-500/50 text-white font-sans font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          <span>View Certificate</span>
                        </motion.a>
                      )}
                      {achievement.linkedinUrl ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={achievement.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-transparent border border-blue-500/50 text-white font-sans font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/40 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          <span>View on LinkedIn</span>
                        </motion.a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;