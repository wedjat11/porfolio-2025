import React from "react";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen bg-hero w-full items-center flex flex-col justify-center gap-9"
    >
      <motion.div
        className="absolute top-0 p-3 left-0 w-1/2 flex flex-col  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-6xl ">
          <span className="text-[#d4af37]">Jesus</span> Montiel
        </h2>
      </motion.div>
      <motion.div className="bg-black/50 p-4 rounded-sm flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-8xl">
          Frontend <span className="text-[#d4af37]">Developer</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 px-4 lg:hidden"
      >
        <button className="bg-[#d4af37] text-black rounded-md px-4 py-2 font-semibold">
          Get in touch
        </button>
        <button className="bg-black text-white rounded-md px-4 py-2 font-semibold">
          Hire me
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-3 p-3 right-0 w-1/2 flex flex-col items-center justify-center "
      >
        <p className=" hidden lg:block text-shite/60 text-justify">
          I&apos;m a Frontend Developer with over 3 years of experience building
          and optimizing web interfaces for multiple companies. In addition to
          my frontend background, I’ve spent the last year working on backend
          development, which has helped me gain a well-rounded perspective on
          web development. My strongest expertise lies in React and Next.js (3
          years), and I also have experience with Astro and LitElement (1 year).
          I&apos;m known for always giving 100%, being proactive, and constantly
          striving to improve.
        </p>
      </motion.div>
    </motion.div>
  );
}
