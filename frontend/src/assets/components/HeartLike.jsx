import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeartLike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Namespace and key for CountAPI
  const NAMESPACE = 'mahesh-portfolio';
  const KEY = 'global-likes';

  // Check if user has already liked on component mount
  useEffect(() => {
    // Check localStorage to prevent multiple likes from same browser
    const hasLiked = localStorage.getItem('hasLikedPortfolio');
    if (hasLiked) {
      setIsLiked(true);
    }

    // Fetch current global like count from CountAPI
    fetchGlobalLikeCount();
  }, []);

  // Fetch the current global like count from CountAPI
  const fetchGlobalLikeCount = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`);
      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.value);
      } else {
        // Fallback to localStorage if API fails
        const storedLikeCount = localStorage.getItem('portfolioLikeCount') || 0;
        setLikeCount(parseInt(storedLikeCount, 10));
      }
    } catch (error) {
      // Fallback to localStorage if API fails
      const storedLikeCount = localStorage.getItem('portfolioLikeCount') || 0;
      setLikeCount(parseInt(storedLikeCount, 10));
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    // Prevent multiple likes from the same browser
    if (isLiked) return;

    try {
      // Increment global like count via CountAPI
      const response = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
      let newCount = likeCount;
      
      if (response.ok) {
        const data = await response.json();
        newCount = data.value;
      } else {
        // Fallback to local increment if API fails
        newCount = likeCount + 1;
      }
      
      setLikeCount(newCount);
      setIsLiked(true);
      
      // Store in localStorage to prevent multiple likes
      localStorage.setItem('hasLikedPortfolio', 'true');
      localStorage.setItem('portfolioLikeCount', newCount.toString());
      
      // Show thank you message
      setPopupMessage('Thanks for supporting ❤️');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (error) {
      // Handle API error gracefully
      const newCount = likeCount + 1;
      setLikeCount(newCount);
      setIsLiked(true);
      
      // Store in localStorage to prevent multiple likes
      localStorage.setItem('hasLikedPortfolio', 'true');
      localStorage.setItem('portfolioLikeCount', newCount.toString());
      
      // Show thank you message
      setPopupMessage('Thanks for supporting ❤️');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  // Show loading state while fetching initial count
  if (loading) {
    return (
      <>
        <div className="flex items-center gap-2 text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="cursor-pointer"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span className="text-white font-medium">...</span>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300 focus:outline-none"
        aria-label="Like portfolio"
        disabled={isLiked} // Disable button after liking
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