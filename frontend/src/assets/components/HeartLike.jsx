import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const HeartLike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  // Firestore document reference
  const likeRef = doc(db, "likes", "global");

  // Fetch initial like count
  useEffect(() => {
    const hasLiked = localStorage.getItem("hasLikedPortfolio");
    if (hasLiked) setIsLiked(true);

    const fetchLikes = async () => {
      try {
        const snap = await getDoc(likeRef);

        if (snap.exists()) {
          setLikeCount(snap.data().count || 0);
        } else {
          // Create doc if it doesn't exist
          await setDoc(likeRef, { count: 0 });
          setLikeCount(0);
        }
      } catch (err) {
        console.error("Failed to fetch likes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, []);

  // Handle like click
  const handleLike = async () => {
    if (isLiked) return;

    try {
      const snap = await getDoc(likeRef);

      if (!snap.exists()) {
        await setDoc(likeRef, { count: 1 });
        setLikeCount(1);
      } else {
        await updateDoc(likeRef, {
          count: increment(1),
        });
        setLikeCount((prev) => prev + 1);
      }

      setIsLiked(true);
      localStorage.setItem("hasLikedPortfolio", "true");

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center gap-2 text-white">
        <span>...</span>
      </div>
    );
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        disabled={isLiked}
        className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-300"
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
          animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
        </motion.svg>

        <span className="font-medium">{likeCount}</span>
      </motion.button>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg z-50"
        >
          Thanks for supporting ❤️
        </motion.div>
      )}
    </>
  );
};

export default HeartLike;
