"use client";
import { useEffect, useRef, useState } from "react";
import FirstAnimation from "./components/FirstAnimation";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "lenis/react";
import StackSection from "./components/StackSection";
import ProjectsSection from "./components/ProjectsSection";
import { useScroll } from "motion/react";
export default function HomePage() {
  const [showAnimation, setShowAnimation] = useState(true);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 6000); // duración de animación
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      {showAnimation ? (
        <FirstAnimation />
      ) : (
        <>
          <div ref={container} className="h-[200vh] relative bg-[#5c5b5b]">
            <HeroSection scrollYProgress={scrollYProgress} />
            <StackSection scrollYProgress={scrollYProgress} />
          </div>
          <div>
            <ProjectsSection />
          </div>
        </>
      )}
    </ReactLenis>
  );
}
