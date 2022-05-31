import React, { useState } from "react";
import Image from "next/image";
import appScreenshot from "../../assets/dejwibook.jpg";
import ghLogo from "../../assets/github.svg";
import { motion, AnimatePresence } from "framer-motion";
import { leftAnime, rightAnime } from "./animeOpts";

const Dejwibook: React.FC = () => {
  const [showTech, setShowTech] = useState(true);
  return (
    <article className="flex h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*img*/}
      <div className="grid grid-cols-art gap-5 md:gap-3 items-center justify-center">
        <motion.div
          className="w-[8.5rem] md:w-[14rem] shadow-md"
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
          <div className="grid auto-rows-min md:-mt-16">
            <span className="-mb-4 ml-0.5 text-[#707070] text-xs tracking-[-0.035em] md:text-[0.9rem] md:-mb-3.5 md:ml-1">
              Full-Stack App
            </span>
            <h3 className="tracking-[-0.035em] text-[2.5rem] md:text-[3.3rem] md:-mt-1.5">
              Dejwibook
            </h3>
            <span className="-mt-4 justify-self-end text-[#707070] text-xs tracking-[-0.035em] mr-1 md:text-[0.95rem] md:-mt-[1.25rem] md:mr-8">
              Express + React
            </span>
          </div>

          {/*desc*/}
          <p className="w-[12rem] mt-3 text-[0.9rem] leading-[18px] tracking-[-0.035em]  md:w-[16rem] md:ml-1.5 md:mt-4">
            Facebook-like project. <strong>Features</strong>{" "}
            backend-authorization, smooth animations, whole friends & posts &
            feeds implementation and even a live-time chat!
          </p>
          {/*buttons*/}
          <div className="w-full flex justify-center">
            <div className="flex justify-between w-[10.5rem] text-xs md:text-[0.85rem] md:w-[14rem] mt-4">
              <a
                className="flex items-center"
                href="https://github.com/dejwi/fb-clone"
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
                href="https://dejwibook.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <button
                onClick={() => setShowTech(!showTech)}
                className="font-light"
              >
                Tech
              </button>
            </div>
          </div>
          <AnimatePresence>
            {showTech && (
              <motion.div
                className="absolute shadow p-1 flex flex-col -right-[10rem] top-[6rem] "
                initial={{ x: -105, y: 80, opacity: 0, scale: 0.3 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                exit={{ x: -105, y: 80, opacity: 0, scale: 0.3 }}
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
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </article>
  );
};

export default Dejwibook;
