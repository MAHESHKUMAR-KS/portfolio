import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] leading-tight tracking-tight drop-shadow-lg text-center"
        >
          Contact Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch">

          {/* LEFT — Contact Info */}
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a href="mailto:maheshsenthil129@gmail.com" className="text-gray-300 hover:text-green-400 transition">
                      maheshsenthil129@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a href="tel:+919442626815" className="text-gray-300 hover:text-green-400 transition">
                      +91 9442626815
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-300">Salem, Tamil Nadu, India</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg h-full p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Send a Message</h3>

              {/* SUCCESS MESSAGE */}
              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (

                /* FIXED FORM */
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    fetch("/", {
                      method: "POST",
                      headers: { "Content-Type": "application/x-www-form-urlencoded" },
                      body: new URLSearchParams(formData).toString()
                    })
                    .then(() => setIsSubmitted(true))
                    .catch((error) => {
                      console.error("Form submission error:", error);
                      alert("Error submitting form. Please try again.");
                    });
                  }}
                  className="space-y-6"
                >
                  {/* Netlify Forms hidden inputs */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
                  {/* Honeypot field (hidden) */}
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium text-base"
                  >
                    Send Message
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
