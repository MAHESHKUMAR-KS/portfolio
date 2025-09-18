import React, { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";

import GooeyNav from "./GooeyNav";


const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "stats", label: "Stats", href: "#stats" },
  { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <GooeyNav items={navLinks} initialActiveIndex={0} />
      {/* ...existing navigation bar code... */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-black py-5"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left: Name */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white text-lg font-bold cursor-pointer"
              onClick={() => setActive("home")}
            >
              MaheshKumar KS
            </Link>

            {/* Right: Navigation Links */}
            <div className="flex items-center gap-8">
              <ul className="hidden md:flex gap-6 text-white font-medium">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      onSetActive={() => setActive(link.id)}
                      className={`cursor-pointer px-4 py-1 rounded-md transition-all ${
                        active === link.id
                          ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                          : "hover:text-blue-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

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
