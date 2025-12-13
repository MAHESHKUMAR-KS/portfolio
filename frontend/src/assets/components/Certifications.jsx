import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "Issued: 2025",
    skills: ["Data Modeling", "DAX Calculations", "Power Query for Data Cleaning", "Data Visualization in Power BI", "Business Intelligence Reporting"],
    logo: "/images/power1.png",
    url: "https://learn.microsoft.com/en-us/users/maheshkumarks-1849/credentials/820876eb5048bfb5"
  },
  {
    id: 2,
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    date: "Issued: 2025",
    skills: ["Schema Design", "Aggregation Framework", "CRUD Operations", "Indexing and Query Optimization", "Data Modeling in NoSQL"],
    logo: "/images/mongo1 (2).png",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/43e85547-5fe5-42d4-bee2-63daf5f795b3-maheshkumar-k-s-654a2ab1-ec73-4efe-bbee-4eeb4104e960-certificate.pdf"
  },
  {
    id: 3,
    name: "Oracle APEX Cloud Developer Certified Professional",
    issuer: "Oracle",
    date: "Issued: 2025",
    skills: ["Cloud Application Development", "PL/SQL Programming", "Low Code UI Design", "Database Integration", "APEX Workspace and Deployment"],
    logo: "/images/oracle1.png",
    url: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC6065665&trackId=APEX24CDOCP&key=8eca8b2a4c418ad396ef9d1666c5cff1fd8ffb9d"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
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
          My Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full group"
            >
              <SpotlightCard className="h-full bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-green-500/40 transition-all duration-300 flex flex-col group-hover:shadow-xl group-hover:shadow-green-500/30">
                <div className="p-5 md:p-6 flex flex-col h-full">
                  {/* Top Section - Certification Info */}
                  <div className="mb-5 md:mb-6">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-1">{cert.name}</h3>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{cert.date}</span>
                    </div>
                  </div>
                  
                  {/* Middle Section - Certification Logo */}
                  <div className="flex justify-center items-center mb-5 md:mb-6 flex-grow">
                    {cert.id === 1 || cert.id === 2 || cert.id === 3 ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.name}
                        className={
                          cert.id === 2 ? "w-36 h-36 md:w-48 md:h-48 object-contain" : 
                          cert.id === 3 ? "w-32 h-32 md:w-44 md:h-44 object-contain" : 
                          "w-28 h-28 md:w-36 md:h-36 object-contain"
                        }
                        onError={(e) => {
                          e.target.onerror = null;
                          if (cert.id === 1) {
                            e.target.src = "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg";
                          } else if (cert.id === 2) {
                            e.target.src = "https://university.mongodb.com/images/mongodb-university-logo.png";
                          } else {
                            e.target.src = "https://www.oracle.com/content/dam/oracle/images/logos/oracle-og-banner.png";
                          }
                        }}
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                        <span className="text-gray-500 text-sm text-center">Certification Logo</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom Section - Skills */}
                  <div className="mt-auto">
                    <h4 className="text-base font-sans font-semibold text-gray-300 mb-2">
                      <span className="font-bold">Skills</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <React.Fragment key={skillIndex}>
                          <span className="px-2 py-1 bg-transparent rounded-md text-xs md:text-sm font-sans font-medium text-gray-200">
                            {skill}
                          </span>
                          {skillIndex < cert.skills.length - 1 && <span className="text-gray-200">,</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-teal-500/50 text-white font-sans font-medium py-2 px-4 rounded-lg w-full mt-5 md:mt-6 transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/40 text-sm md:text-base group-hover:shadow-lg group-hover:shadow-teal-500/30"
                  >
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;