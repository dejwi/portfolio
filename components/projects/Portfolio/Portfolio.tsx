import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tech from "./Tech";
import Buttons from "./Buttons";

const Portfolio: React.FC = () => {
  const [showTech, setShowTech] = useState(false);

  const [isBig, setIsBig] = useState(false);
  useEffect(() => {
    setIsBig(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  const animeOpts = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 0.4,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    viewport: {
      amount: 0.75,
    },
  };

  return (
    <motion.article
      className="flex flex-col h-[90vh] w-screen items-center justify-center font-[Rubik] font-light relative"
      {...animeOpts}
    >
      {/*content*/}
      <div className="flex flex-col">
        {/*header*/}
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[-0.035em] text-[2.5rem]">Portfolio</h3>
          <span className="-mt-4  text-[#707070] text-xs md:text-sm">
            Next.js
          </span>
        </div>

        {/*desc*/}
        <p className="w-[15rem] mt-3 leading-[18px] tracking-[-0.035em] text-center">
          You’re here! First time using Next.js and loving it. Very minimalistic
          site with I hope nice animations :)
        </p>

        {/*buttons*/}
        <Buttons TechClick={() => setShowTech(!showTech)} />
      </div>
      <AnimatePresence>{showTech && <Tech isBig={isBig} />}</AnimatePresence>
    </motion.article>
  );
};

export default Portfolio;
