import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rightAnime } from "../animeOpts";
import Tech from "./Tech";
import Buttons from "./Buttons";
import Header from "./Header";
import LeftPart from "./LeftPart";

const PixelTogether: React.FC = () => {
  const [showTech, setShowTech] = useState(false);

  const [isBig, setIsBig] = useState(false);
  useEffect(() => {
    setIsBig(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  return (
    <article className="flex h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*container*/}
      <div className="grid grid-cols-art gap-3.5">
        {/*img*/}
        <LeftPart isBig={isBig} />

        {/*content*/}
        <motion.div
          className="flex flex-col justify-center h-full relative z-40"
          {...rightAnime}
        >
          {/*header*/}
          <Header />

          {/*desc*/}
          <p className="w-[13rem] mt-3 text-[0.84rem] ml-1 leading-[17px] tracking-[-0.035em] md:text-[0.95rem md:w-[15rem] md:ml-2">
            A smaller project of mine. Allows users to draw{" "}
            <strong>together</strong> in <strong>real-time</strong> using room
            based system.
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

export default PixelTogether;
