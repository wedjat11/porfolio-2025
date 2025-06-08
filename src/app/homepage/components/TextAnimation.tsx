"use client";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function AnimatedText() {
  const fullText =
    "Los labios de la sabiduría permanecen cerrados excepto para los oídos que comprenden.";
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;

    function typeNextChar() {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index < fullText.length) {
        setTimeout(typeNextChar, 40);
      } else {
        setDone(true);
      }
    }

    // Solo comienza una vez
    typeNextChar();
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white/60 text-lg lg:text-xl font-medium mt-8 text-center px-4"
    >
      {displayedText}
      {!done && <span className="animate-pulse">|</span>}
    </motion.p>
  );
}
