import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Tech: React.FC<{ isBig: boolean }> = ({ isBig }) => {
  const variants = {
    move: {
      x: isBig ? -105 : 105,
      y: 80,
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
      className="absolute shadow p-1 flex flex-col md:-right-[10rem] md:top-[6rem] bg-neutral-100"
      variants={variants}
      initial={"move"}
      exit={"move"}
      animate={"def"}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
    >
      <span>Typescript</span>
      <span>React</span>
      <span>Tailwindcss</span>
      <span>Framer-motion</span>
      <span>Socket.io</span>
      <span>Express</span>
      <span>Passportjs</span>
      <span>MongoDB database</span>
      <span>AWS s3 bucket</span>
    </motion.div>
  );
};

export default Tech;
