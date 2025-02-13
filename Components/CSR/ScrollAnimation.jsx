"use client";
import "/app/globals.css";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollAnimation = ({ children, className }) => {
  const carouselRef = React.useRef(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={className} ref={carouselRef}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {children}
    </div>
  );
};

export default ScrollAnimation;
