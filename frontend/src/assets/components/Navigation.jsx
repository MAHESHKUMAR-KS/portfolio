import React, { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; // Added menu icons for mobile

import GooeyNav from "./GooeyNav";
import HeartLike from "./HeartLike";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'projects',
      'achievements',
      'leadership',
      'certifications',
      'stats',
      'contact',
    ];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -70% 0px", // Adjusted margins for better detection
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // Added 0 threshold for better detection
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home", to: "#home" },
    { id: "about", label: "About", to: "#about" },
    { id: "projects", label: "Projects", to: "#projects" },
    { id: "certifications", label: "Certifications", to: "#certifications" },
    { id: "achievements", label: "Achievements", to: "#achievements" },
    { id: "leadership", label: "Leadership", to: "#leadership" },
    { id: "stats", label: "Stats", to: "#stats" },
    { id: "contact", label: "Contact", to: "#contact" },
  ];

 
  const handleLinkClick = (to) => {
    setMobileMenuOpen(false);
    
    // Scroll to the section
    const id = (to || '').replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-transparent py-5"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left: Name and Heart Like for mobile */}
            <div className="flex items-center gap-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#home"); // Close mobile menu and scroll to home
                }}
                className="text-white text-lg font-bold cursor-pointer"
              >
                MaheshKumar KS
              </a>
              {/* Heart Like Component for mobile - shown next to name */}
              <div className="md:hidden">
                <HeartLike />
              </div>
            </div>

            {/* Mobile menu button - visible only on small screens */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Right: Navigation Links and Heart Like Component - hidden on mobile, visible on medium screens and up */}
            <div className="hidden md:flex items-center gap-8">
              <GooeyNav items={navLinks} initialActiveIndex={0} activeId={activeId} />

              {/* Resume Button */}
              <a
                href="/resume.pdf?v=20260802"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                download
              >
                <FiDownload className="text-lg" />
                <span>Resume</span>
              </a>
              
              {/* Heart Like Component */}
              <HeartLike />
            </div>

            {/* Mobile menu - visible only when mobileMenuOpen is true */}
            {mobileMenuOpen && (
              <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center space-y-8">
                  {/* Simple vertical navigation for mobile */}
                  <nav className="flex flex-col items-center space-y-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.to}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.to);
                        }}
                        className={`text-2xl font-medium transition-colors duration-300 ${
                          activeId === link.id 
                            ? "text-green-400" 
                            : "text-white hover:text-green-400"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  
                  {/* Resume Button for mobile */}
                  <a
                    href="/resume.pdf?v=20260802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-xl"
                    download
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FiDownload className="text-lg" />
                    <span>Resume</span>
                  </a>
                  
                  {/* Heart Like Component moved to be near the name */}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;