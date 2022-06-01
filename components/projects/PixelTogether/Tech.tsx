import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Tech: React.FC<{ isBig: boolean }> = ({ isBig }) => {
  const variants = {
    move: {
      x: isBig ? -95 : 95,
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
      className="absolute shadow p-1 flex flex-col md:-right-[8rem] md:top-[7rem] bg-neutral-100"
      variants={variants}
      initial={"move"}
      animate={"def"}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      exit={"move"}
    >
      <span>Typescript</span>
      <span>React</span>
      <span>Tailwindcss</span>
      <span>Framer-motion</span>
      <span>Socket.io</span>
      <span>Express</span>
    </motion.div>
  );
};

export default Tech;
