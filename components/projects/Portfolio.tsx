import React from "react";
import Image from "next/image";
import ghLogo from "../../assets/github.svg";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
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
      className="flex flex-col h-[90vh] w-screen items-center justify-center font-[Rubik] font-light"
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
        <div className="flex justify-center gap-12 text-xs font-light mt-2">
          <a className="flex items-center">
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
          <a>Tech</a>
        </div>
      </div>
    </motion.article>
  );
};

export default Portfolio;
