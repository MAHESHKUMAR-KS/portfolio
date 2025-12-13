import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, onSnapshot, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

const HeartLike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const likeRef = doc(db, "likes", "global");

  useEffect(() => {
    // prevent multiple likes from same browser
    if (localStorage.getItem("hasLikedPortfolio")) {
      setIsLiked(true);
    }

    // realtime listener
    const unsubscribe = onSnapshot(
      likeRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setLikeCount(docSnap.data().count ?? 0);
        } else {
          // safety: create doc if missing
          setDoc(likeRef, { count: 0 });
        }
        setLoading(false);
      },
      (error) => {
        console.error("Realtime listener error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    if (isLiked) return;

    try {
      await updateDoc(likeRef, {
        count: increment(1),
      });

      localStorage.setItem("hasLikedPortfolio", "true");
      setIsLiked(true);

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  if (loading) {
    return <span className="text-white">...</span>;
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        disabled={isLiked}
        className="flex items-center gap-2 text-white hover:text-red-500 transition"
        aria-label="Like portfolio"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? "#ef4444" : "none"}
          stroke={isLiked ? "#ef4444" : "currentColor"}
          strokeWidth="2"
          animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" />
        </motion.svg>

        <span className="font-medium">{likeCount}</span>
      </motion.button>

      {showPopup && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg z-50">
          Thanks for supporting ❤️
        </div>
      )}
    </>
  );
};

export default HeartLike;
