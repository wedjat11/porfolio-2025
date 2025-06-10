"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";

const images = [
  "astro.svg",
  "jest.svg",
  "js.svg",
  "lit.svg",
  "mui.svg",
  "next.svg",
  "tailwind.svg",
  "react.svg",
  "ts.svg",
  "vue.svg",
];

export default function StackSection() {
  const section = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section
      ref={section}
      className="flex flex-col items-center justify-center gap-9 px-4 py-12 lg:px-0 lg:py-24 h-screen relative"
    >
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-8xl absolute top-24 left-10 ">
        My <span className="text-[#d4af37]">Stack</span>
      </h1>
      <motion.div
        initial={{ opacity: 1 }}
        className=" w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 place-items-center gap-4 md:gap-8 lg:gap-16 justify-center lg:w-11/12 mx-auto"
        style={{ y }}
      >
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={`/images/${image}`}
            className="size-[40px] lg:size-[100px] max-w-xs hover:scale-110 transition-all duration-300 ease-in-out"
            alt={image}
          />
        ))}
      </motion.div>
    </section>
  );
}
