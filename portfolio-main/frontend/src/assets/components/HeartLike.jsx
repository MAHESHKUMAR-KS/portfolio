import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeartLike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Load like count and liked status from localStorage on component mount
  useEffect(() => {
    const storedLikeCount = localStorage.getItem('portfolioLikeCount');
    const storedIsLiked = localStorage.getItem('portfolioIsLiked');
    
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount, 10));
    }
    
    if (storedIsLiked === 'true') {
      setIsLiked(true);
    }
  }, []);

  // Save like count and liked status to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioLikeCount', likeCount.toString());
  }, [likeCount]);

  useEffect(() => {
    localStorage.setItem('portfolioIsLiked', isLiked.toString());
  }, [isLiked]);

  const handleLike = () => {
    if (isLiked) {
      // User already liked
      setPopupMessage('You already liked this!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    }

    // Increase like count
    const newCount = likeCount + 1;
    setLikeCount(newCount);
    setIsLiked(true);
    
    // Show thank you message
    setPopupMessage('Thanks for supporting ❤️');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 focus:outline-none"
        aria-label="Like portfolio"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? "#ef4444" : "none"}
          stroke={isLiked ? "#ef4444" : "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
          whileTap={{ scale: 1.2 }}
          animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </motion.svg>
        <span className="text-white font-medium">{likeCount}</span>
      </motion.button>

      {/* Popup message */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-md border border-green-500/60 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          {popupMessage}
        </motion.div>
      )}
    </>
  );
};

export default HeartLike;