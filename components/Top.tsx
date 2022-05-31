import React from "react";
import { motion } from "framer-motion";

const Top: React.FC = () => {
  const animeOpts = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.9,
    },
  };

  return (
    <motion.div
      className="flex flex-col h-screen w-screen items-center justify-center"
      {...animeOpts}
    >
      <h1 className="font-cool text-[3.4rem] md:text-[6rem] tracking-[0.12em] -mt-20 md:-mt-16">
        Dawid Krasowski
      </h1>
      <h2 className="font-poppi text-sm md:text-lg tracking-[0.11em] -mt-4 md:-mt-[1.65rem]">
        Aspiring young Full-Stack Developer
      </h2>
    </motion.div>
  );
};

export default Top;
