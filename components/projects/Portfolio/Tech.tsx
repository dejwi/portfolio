import React from "react";
import { motion } from "framer-motion";

const Tech: React.FC<{ isBig: boolean }> = ({ isBig }) => {
  const variants = {
    move: {
      x: isBig ? -95 : 50,
      y: 55,
      opacity: 0,
      scale: 0.3,
    },
    def: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="absolute shadow p-1 flex flex-col bg-neutral-100 right-[10.5rem] md:left-[10.5rem] ml-[23rem] mt-[2rem] "
      variants={variants}
      initial={"move"}
      animate={"def"}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      exit={"move"}
    >
      <span>Typescript</span>
      <span>Next.js</span>
      <span>Tailwindcss</span>
      <span>Framer-motion</span>
    </motion.div>
  );
};

export default Tech;
