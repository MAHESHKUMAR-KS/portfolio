import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    date: "Issued: 2025",
    skills: ["Data Modeling", "DAX Calculations", "Data Visualization"],
    logo: "/images/power1.png",
    url: "https://learn.microsoft.com/en-us/users/maheshkumarks-1849/credentials/820876eb5048bfb5"
  },
  {
    id: 2,
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    date: "Issued: 2025",
    skills: ["Schema Design", "Aggregation Framework", "CRUD Operations"],
    logo: "/images/mongo1 (2).png",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/43e85547-5fe5-42d4-bee2-63daf5f795b3-maheshkumar-k-s-654a2ab1-ec73-4efe-bbee-4eeb4104e960-certificate.pdf"
  },
  {
    id: 3,
    name: "Oracle APEX Cloud Developer Certified Professional",
    issuer: "Oracle",
    date: "Issued: 2025",
    skills: ["Cloud Application", "PL/SQL Programming", "Database Integration"],
    logo: "/images/oracle1.png",
    url: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC6065665&trackId=APEX24CDOCP&key=8eca8b2a4c418ad396ef9d1666c5cff1fd8ffb9d"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-transparent text-white py-16 md:py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
          style={{
            textShadow: "0 0 15px rgba(74, 222, 128, 0.3)"
          }}
        >
          My Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              {/* Solid matte black certification card with sharp edges and darker glow effect */}
              <div className="relative h-full group">
                <div className="absolute -inset-0.5 bg-green-500 rounded-none blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="bg-black border border-gray-800 rounded-none p-6 sm:p-8 h-full flex flex-col relative">
                  {/* Certification header */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="font-sans font-bold text-white text-xl sm:text-2xl mb-2 sm:mb-3">{cert.name}</h3>
                    <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">{cert.issuer}</p>
                    {/* Logo positioned below the name */}
                    {cert.id === 1 || cert.id === 2 || cert.id === 3 ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.name}
                        className={
                          cert.id === 2 ? "w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto" : 
                          cert.id === 3 ? "w-20 h-20 sm:w-28 sm:h-28 object-contain mx-auto" : 
                          "w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto"
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
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20 sm:w-24 sm:h-24 mx-auto" />
                    )}
                  </div>
                  
                  {/* Skills section */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="font-sans font-semibold text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">Skills</h4>
                    <div className="text-gray-200 text-base sm:text-lg">
                      {cert.skills.join(', ')}
                    </div>
                  </div>
                  
                  {/* Date and action link */}
                  <div className="mt-auto flex justify-between items-center pt-6 sm:pt-8 border-t border-gray-800">
                    <div className="flex items-center text-gray-500 text-base sm:text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{cert.date.replace('Issued: ', '')}</span>
                    </div>
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400 text-base sm:text-lg font-medium flex items-center"
                    >
                      View Credential
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;