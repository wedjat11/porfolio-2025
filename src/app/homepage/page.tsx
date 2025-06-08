"use client";
import { useEffect, useState } from "react";
import FirstAnimation from "./components/FirstAnimation";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 10000); // duración de animación
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAnimation && <FirstAnimation />}
      {!showAnimation && <HeroSection />}
    </>
  );
}
