"use client";
import { useEffect, useState } from "react";
import FirstAnimation from "./components/FirstAnimation";
import HeroSection from "./components/HeroSection";
import { ReactLenis } from "lenis/react";
import StackSection from "./components/StackSection";
export default function HomePage() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 6000); // duración de animación
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      {showAnimation ? (
        <FirstAnimation />
      ) : (
        <div>
          <HeroSection />
          <StackSection />
        </div>
      )}
    </ReactLenis>
  );
}
