"use client";
import React from "react";
import { motion } from "framer-motion";

function PopUpAnimation({ children }) {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 4,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default PopUpAnimation;
