import React from "react";
import * as motion from "motion/react-client";

export default function StackSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-9 px-4 py-12 lg:px-0 lg:py-24 h-screen"
    >
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-8xl">
        My Stack
      </h1>
      <p className="text-shite/60 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </p>
    </motion.div>
  );
}
