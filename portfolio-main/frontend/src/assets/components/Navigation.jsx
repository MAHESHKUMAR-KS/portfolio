import React, { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";

import GooeyNav from "./GooeyNav";


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

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
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Home", to: "#home" },
    { id: "about", label: "About", to: "#about" },
    { id: "projects", label: "Projects", to: "#projects" },
    { id: "achievements", label: "Achievements", to: "#achievements" },
    { id: "certifications", label: "Certifications", to: "#certifications" },
    { id: "stats", label: "Stats", to: "#stats" },
    { id: "contact", label: "Contact", to: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-black py-5"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left: Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('home');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-white text-lg font-bold cursor-pointer"
            >
              MaheshKumar KS
            </a>

            {/* Right: Navigation Links */}
            <div className="flex items-center gap-8">
              <GooeyNav items={navLinks} initialActiveIndex={0} activeId={activeId} />

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                download
              >
                <FiDownload className="text-lg" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
