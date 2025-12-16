import React, { useState } from "react";
import { motion } from "framer-motion";
import ShinyText from './ShinyText.jsx'; // Import the ShinyText component

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-white py-20 md:py-28 relative"
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#4ade80] text-center"
        >
          <ShinyText 
            text="Contact Me" 
            className="inline"
            speed={3}
          />
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch">

          {/* LEFT — Contact Info (RESTORED) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg h-full p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                <ShinyText 
                  text="Get in Touch" 
                  className="inline"
                  speed={4}
                />
              </h3>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg
                    className="h-6 w-6 text-green-400 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold">
                      <ShinyText 
                        text="Email" 
                        className="inline"
                        speed={4}
                      />
                    </h4>
                    <a
                      href="mailto:maheshsenthil129@gmail.com"
                      className="text-gray-300 hover:text-green-400 transition"
                    >
                      <ShinyText 
                        text="maheshsenthil129@gmail.com" 
                        className="inline"
                        speed={5}
                      />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg
                    className="h-6 w-6 text-green-400 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold">
                      <ShinyText 
                        text="Phone" 
                        className="inline"
                        speed={4}
                      />
                    </h4>
                    <a
                      href="tel:+919442626815"
                      className="text-gray-300 hover:text-green-400 transition"
                    >
                      <ShinyText 
                        text="+91 9442626815" 
                        className="inline"
                        speed={5}
                      />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <svg
                    className="h-6 w-6 text-green-400 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.66 16.66L13.41 20.9a2 2 0 01-2.83 0l-4.24-4.24a8 8 0 1111.32 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold">
                      <ShinyText 
                        text="Location" 
                        className="inline"
                        speed={4}
                      />
                    </h4>
                    <p className="text-gray-300">
                      <ShinyText 
                        text="Salem, Tamil Nadu, India" 
                        className="inline"
                        speed={5}
                      />
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="bg-transparent border border-green-500/60 rounded-2xl backdrop-blur-md shadow-lg h-full p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <ShinyText 
                  text="Send a Message" 
                  className="inline"
                  speed={4}
                />
              </h3>

              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    <ShinyText 
                      text="Message Sent Successfully!" 
                      className="inline"
                      speed={4}
                    />
                  </h4>
                  <p className="text-gray-300">
                    <ShinyText 
                      text="Thank you for reaching out. I'll get back to you soon." 
                      className="inline"
                      speed={5}
                    />
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg"
                  />

                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Your message"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg resize-none"
                  />

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-lg font-medium"
                  >
                    <ShinyText 
                      text="Send Message" 
                      className="inline"
                      speed={4}
                    />
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