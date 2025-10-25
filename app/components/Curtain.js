"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Curtain({ onOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    // Reveal portfolio slightly after curtains open
    setTimeout(onOpen, 1800);
  };
  
  return (
    <div className="curtain-container" onClick={handleClick}>
      {/* Left curtain */}
      <motion.div
        className="curtain left"
        animate={open ? { x: "-100%" } : { x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.77, 0, 0.175, 1], // smooth bezier
        }}
      />

      {/* Right curtain */}
      <motion.div
        className="curtain right"
        animate={open ? { x: "100%" } : { x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.77, 0, 0.175, 1],
        }}
      />

      {/* Velvet shimmer effect & text */}
      {!open && (
        <div className="curtain-text">
          <h1>🎭 Click to Enter</h1>
        </div>
      )}
    </div>
  );
}
