import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const allIcons = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    bgColor: '#0A66C2',
    url: 'https://www.linkedin.com/in/maheshkumar-ks/'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    bgColor: '#181717',
    url: 'https://github.com/MAHESHKUMAR-KS'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    bgColor: '#25D366',
    url: 'https://wa.me/+919442626815'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    bgColor: '#E1306C',
    url: 'https://www.instagram.com/iammahesh266/?hl=en'
  },
  {
    name: 'Email',
    icon: <FiMail />,
    bgColor: '#D44638',
    url: 'mailto:maheshsenthil129@gmail.com'
  }
];

const SocialMediaIcons = ({ className = "", showInstagram = true }) => {
  
  const icons = showInstagram 
    ? allIcons 
    : allIcons.filter(icon => icon.name !== 'Instagram');

  return (
    <div className={`flex gap-4 ${className}`}>
      {icons.map(({ name, icon, bgColor, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="rounded-md p-2 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-110"
          style={{ backgroundColor: bgColor, width: '36px', height: '36px' }}
        >
          <div className="text-xl">{icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;