import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaMediumM } from 'react-icons/fa';

const logos = [
  { icon: <FiLinkedin />, color: '#0A66C2', name: 'LinkedIn' },
  { icon: <FiGithub />, color: '#6e5494', name: 'GitHub' },
  { icon: <FaWhatsapp />, color: '#25D366', name: 'WhatsApp' },
  { icon: <FaMediumM />, color: '#00ab6c', name: 'Medium' },
  { icon: <FiMail />, color: '#D44638', name: 'Mail' }
];

const AnimatedLogo = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Person Illustration */}
      <div className="relative w-64 h-96 bg-green-600 rounded-3xl flex items-center justify-center">
        {/* Simplified person shape */}
        <div className="w-24 h-24 bg-white rounded-full absolute top-8 left-1/2 transform -translate-x-1/2"></div>
        <div className="w-40 h-64 bg-green-800 rounded-2xl absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        {/* Phone */}
        <div className="w-12 h-20 bg-white rounded-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="w-8 h-16 bg-green-600 rounded"></div>
        </div>
      </div>

      {/* Floating Logos */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        {logos.map((logo, index) => {
          const angle = (index / logos.length) * 360;
          const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '40px',
            height: '40px',
            margin: '-20px',
            color: logo.color,
            animation: `floatLogo 6s ease-in-out infinite`,
            animationDelay: `${index * 1.2}s`,
            transformOrigin: '0 100px',
            transformBox: 'fill-box',
            transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`
          };
          return (
            <div key={logo.name} style={style} title={logo.name} className="text-4xl">
              {logo.icon}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes floatLogo {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
