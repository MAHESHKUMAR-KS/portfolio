import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const icons = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    bgColor: '#0A66C2',
    url: 'https://linkedin.com/'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    bgColor: '#181717',
    url: 'https://github.com/'
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp />,
    bgColor: '#25D366',
    url: 'https://wa.me/942626815'
  },
  {
    name: 'Email',
    icon: <FiMail />,
    bgColor: '#D44638',
    url: 'mailto:your@email.com'
  }
];

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-4">
      {icons.map(({ name, icon, bgColor, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="rounded-md p-2 text-white flex items-center justify-center"
          style={{ backgroundColor: bgColor, width: '36px', height: '36px' }}
        >
          <div className="text-xl">{icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
