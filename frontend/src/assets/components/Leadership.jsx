import React from 'react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';

const Leadership = () => {
  const leadershipRoles = [
    {
      id: 1,
      title: "AI Association",
      position: "Technical Team",
      organization: "Kongu Engineering College",
      period: "2024-2025",
      logo: "KEC",
      description: "Worked with a team of developers to build a community outreach platform. Handled sprint planning, code reviews and feature development. Helped the team deliver the project earlier than planned.",
      achievements: [
        "Helped improve team productivity through agile practices",
        "Guided 2 junior developers as they learned project workflow",
        "Set up a basic CI/CD process that made deployments faster and consistent"
      ]
    },
    {
      id: 2,
      title: "CSI",
      position: "Executive Member",
      organization: "Kongu Engineering College",
      period: "2024-2025",
      logo: "KEC",
      description: "Coordinated technical workshops and hackathons for 200+ students. Took care of logistics, session planning and participant communication throughout the events.",
      achievements: [
        "Helped increase student participation through better planning",
        "Supported the team in securing sponsorships for the annual event",
        "Improved event organization by streamlining schedules and volunteer roles"
      ]
    },
    {
      id: 3,
      title: "IEF",
      position: "Executive Member",
      organization: "Kongu Engineering College",
      period: "Dec-2025",
      logo: "KEC",
      description: "Supported new contributors in understanding open-source workflows. Created simple learning materials and guided students through their first contributions.",
      achievements: [
        "Helped grow community participation from 15 to 65 members",
        "Built an onboarding guide that other groups later reused",
        "Represented the community at regional events and shared project updates"
      ]
    }
  ];

 
  const generateLogo = (text, index, id) => {
    // For ID 1, use the specific image
    if (id === 1) {
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-2 border-white/30 backdrop-blur-sm bg-white">
          <img 
            src="/images/aia.png" 
            alt="AI Association Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    
    // For ID 2, use the CSI image
    if (id === 2) {
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-2 border-white/30 backdrop-blur-sm bg-white">
          <img 
            src="/images/csi.png" 
            alt="CSI Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    
    // For ID 3, use the IEF image
    if (id === 3) {
      return (
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl overflow-hidden border-2 border-white/30 backdrop-blur-sm bg-white">
          <img 
            src="/images/ief.png" 
            alt="IEF Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    
    // For other IDs, use the gradient circles (fallback)
    const colors = [
      "bg-gradient-to-br from-blue-500 to-purple-600",
      "bg-gradient-to-br from-green-500 to-teal-600",
      "bg-gradient-to-br from-yellow-500 to-orange-600"
    ];
    
    return (
      <div className={`${colors[(id - 1) % colors.length]} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-white/30 backdrop-blur-sm`}>
        {text.substring(0, 2)}
      </div>
    );
  };

  return (
    <section id="leadership" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
          style={{
            textShadow: "0 0 15px rgba(74, 222, 128, 0.3)"
          }}
        >
          Leadership Experience
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full lg:w-4/12 group"
            >
              <PixelCard variant="blue" className="border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-green-500/40 transition-all duration-300 h-full group-hover:shadow-xl group-hover:shadow-green-500/30">
                <div className="p-5 md:p-6 flex flex-col h-full relative z-10">
                  <div className="flex items-start mb-3">
                    {generateLogo(role.logo, index, role.id)}
                    <div className="ml-4 flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl md:text-2xl font-sans font-extrabold mb-1 text-white tracking-tight transition-all duration-300 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                            {role.title}
                          </h3>
                          
                          <p className="text-sm text-gray-400">{role.organization}</p>
                        </div>
                        <span className="mt-2 md:mt-0 text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-gray-300 leading-relaxed font-sans font-medium text-sm md:text-base flex-grow">
                    {role.description}
                  </p>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {role.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2 text-sm">✓</span>
                          <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;