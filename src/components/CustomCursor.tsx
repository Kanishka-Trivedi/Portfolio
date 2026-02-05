import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const PulsingCursor = () => {
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by 16px to center the 32px cursor
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{ x: cursorX, y: cursorY, width: 32, height: 32 }}
    >
      {/* 1. THE PULSING BLUE RING/SPHERE */}
      <motion.div
        className="absolute border-purple-500 rounded-full bg-purple-500/20"
        animate={{
          // Pulsing scale
          scale: [1, 1.8, 2, 1],
          // Transitions from solid sphere (16px border) to thin ring (2px border)
          borderWidth: [16, 2, 16],
          // Fades slightly when it becomes a thin ring
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: "100%", height: "100%" }}
      />

      {/* 2. THE STEADY CENTER ORANGE DOT */}
      <div className="w-3 h-3 bg-orange-500 rounded-full z-10 shadow-sm" />
    </motion.div>
  );
};

export default PulsingCursor;