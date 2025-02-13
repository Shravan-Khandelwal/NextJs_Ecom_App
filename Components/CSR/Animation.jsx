"use client";
import { motion } from "framer-motion";

const AnimatedLink = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "#f00", transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      style={{ display: "inline-block", textDecoration: "none", color: "#000" }}
      className="box flex items-center"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLink;
