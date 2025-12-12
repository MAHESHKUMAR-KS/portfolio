import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Handle success message after form submission
    setIsSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
        >
          Contact Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg h-full p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Get in Touch</h3>
              
              <div className="space-y-5 md:space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:maheshsenthil129@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm md:text-base">
                      maheshsenthil129@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-white">Phone</h4>
                    <a href="tel:+919442626815" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm md:text-base">
                      +91 9442626815
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300 text-sm md:text-base">Salem, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg h-full p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white text-center">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-5 md:p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-green-400 mx-auto mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-sm md:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/maheshsenthil129@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6"
                >
                  {/* Hidden fields for FormSubmit settings */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ y: -2, boxShadow: '0 10px 20px -5px rgba(74, 222, 128, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent text-sm md:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;