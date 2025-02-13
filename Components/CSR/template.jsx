"use client";

import { motion } from "framer-motion";
import ResponsiveMessage from "../SSR/ResponsiveMessage";
import { useContext, useState } from "react";
import { AppContext } from "./../../Store/AppContext";
// import ToastMessage from './ToastMessage';

export default function Template({ children }) {
  const { IsMobile } = useContext(AppContext);

  return (
    <>
      {IsMobile === true ? (
        <ResponsiveMessage></ResponsiveMessage>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          {children}
          {/* <ToastMessage></ToastMessage> */}
        </motion.div>
      )}
    </>
  );
}
