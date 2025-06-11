"use client";
import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { MotionValue, useTransform } from "motion/react";

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
interface HeroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function StackSection({ scrollYProgress }: HeroSectionProps) {
  const section = useRef<HTMLDivElement>(null);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, 0]);
  return (
    <motion.section
      style={{ scale, rotate }}
      ref={section}
      className="flex flex-col items-center justify-center gap-9 px-4 py-12 lg:px-0 lg:py-24 h-screen relative  bg-[#d4af37]"
    >
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-8xl absolute top-24 left-10 ">
        My <span className="text-black">Stack</span>
      </h1>
      <motion.div
        initial={{ opacity: 1 }}
        className=" w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 place-items-center gap-4 md:gap-8 lg:gap-16 justify-center lg:w-11/12 mx-auto"
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
    </motion.section>
  );
}
