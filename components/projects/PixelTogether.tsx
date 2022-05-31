import React, { useState } from "react";
import Image from "next/image";
import appScreenshot from "../../assets/pixelt.png";
import ghLogo from "../../assets/github.svg";
import { AnimatePresence, motion } from "framer-motion";
import { leftAnime, rightAnime } from "./animeOpts";

const PixelTogether: React.FC = () => {
  const [showTech, setShowTech] = useState(false);
  return (
    <article className="flex h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*img*/}
      <div className="grid grid-cols-art gap-3.5">
        <motion.div
          className="w-[8.5rem] md:w-[14.5rem] shadow-md"
          {...leftAnime}
        >
          <Image
            src={appScreenshot}
            alt="app screenshot"
            layout="responsive"
            objectFit="cover"
            className="rounded"
          />
        </motion.div>

        {/*content*/}
        <motion.div
          className="flex flex-col justify-center h-full relative"
          {...rightAnime}
        >
          {/*header*/}
          <div className="grid auto-rows-min md:-mt-12">
            <span className="-mb-3.5 ml-0.5 text-[#707070] text-xs tracking-[-0.035em] md:text-[0.9rem] md:-mb-3 md:ml-1">
              Full-Stack App
            </span>
            <h3 className="tracking-[-0.035em] text-[2.3rem] md:text-[3rem] md:-mt-1.5">
              PixelTogether
            </h3>
            <span className="-mt-3.5 justify-self-end text-[#707070] text-xs tracking-[-0.035em]  md:text-[0.9rem] md:-mt-[1.1rem]">
              Express + React
            </span>
          </div>

          {/*desc*/}
          <p className="w-[13rem] mt-3 text-[0.84rem] ml-1 leading-[17px] tracking-[-0.035em] md:text-[0.95rem md:w-[15rem] md:ml-2">
            A smaller project of mine. Allows users to draw{" "}
            <strong>together</strong> in <strong>real-time</strong> using room
            based system.
          </p>
          {/*buttons*/}
          <div className="w-full flex justify-center">
            <div className="flex justify-between w-[10.5rem] text-xs font-light mt-4 md:text-[0.85rem] md:w-[14rem]">
              <a
                className="flex items-center"
                href="https://github.com/dejwi/PixelTogether"
                target="_blank"
              >
                <div className="w-4 h-4 m-0">
                  <Image
                    alt="github"
                    src={ghLogo}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                Details
              </a>
              <a
                href="https://dejwi.github.io/PixelTogether"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <button
                className="font-light"
                onClick={() => setShowTech(!showTech)}
              >
                Tech
              </button>
            </div>
          </div>
          <AnimatePresence>
            {showTech && (
              <motion.div
                className="absolute shadow p-1 flex flex-col -right-[8rem] top-[7rem] "
                initial={{ x: -95, y: 55, opacity: 0, scale: 0.3 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                exit={{ x: -95, y: 55, opacity: 0, scale: 0.3 }}
              >
                <span>Typescript</span>
                <span>React</span>
                <span>Tailwindcss</span>
                <span>Framer-motion</span>
                <span>Socket.io</span>
                <span>Express</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </article>
  );
};

export default PixelTogether;
