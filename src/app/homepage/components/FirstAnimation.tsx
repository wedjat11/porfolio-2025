"use client";
import React from "react";
import * as motion from "motion/react-client";
import EyeAnimation from "./EyeAnimation";
import TextAnimation from "./TextAnimation";

export default function FirstAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <EyeAnimation />
      <TextAnimation />
    </motion.div>
  );
}
