import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rightAnime } from "../animeOpts";
import Tech from "./Tech";
import Buttons from "./Buttons";
import Header from "./Header";
import LeftPart from "./LeftPart";

const Dejwibook: React.FC = () => {
  const [showTech, setShowTech] = useState(false);

  const [isBig, setIsBig] = useState(false);
  useEffect(() => {
    setIsBig(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  return (
    <article className="flex h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*container*/}
      <div className="grid grid-cols-art gap-5 md:gap-3 items-center justify-center">
        {/*img*/}
        <LeftPart />

        {/*content*/}
        <motion.div
          className="flex flex-col justify-center h-full relative z-40"
          {...rightAnime}
        >
          {/*header*/}
          <Header />

          {/*desc*/}
          <p className="w-[12rem] mt-3 text-[0.9rem] leading-[18px] tracking-[-0.035em]  md:w-[16rem] md:ml-1.5 md:mt-4">
            Facebook-like project. <strong>Features</strong>{" "}
            backend-authorization, smooth animations, whole friends & posts &
            feeds implementation and even a live-time chat!
          </p>

          {/*buttons*/}
          <Buttons TechClick={() => setShowTech(!showTech)} />

          <AnimatePresence>
            {showTech && <Tech isBig={isBig} />}
          </AnimatePresence>
        </motion.div>
      </div>
    </article>
  );
};

export default Dejwibook;
