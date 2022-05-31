import React from "react";
import Image from "next/image";
import ghLogo from "../assets/github.svg";
import emailLogo from "../assets/email.svg";
import { motion } from "framer-motion";

const About: React.FC = () => {
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
      <div className="flex flex-col justify-center items-center">
        {/*header*/}
        <h3 className="font-normal">Hello!</h3>

        {/*desc*/}
        <p className="w-[18rem]  leading-[18px] tracking-[-0.035em] text-center">
          I&apos;m a 16-year-old developer from Poland who wants to start his
          journey. I learn fast and can connect facts pretty easily. Always open
          to try out something new, with every project gained some unique
          knowledge, and looking to expand it even more.
        </p>
        {/*buttons*/}

        <h3 className="mt-8">
          <strong>Current</strong> Tech
        </h3>
        <p className="leading-[18px] tracking-[-0.035em] text-center w-[20rem] text-xs -mt-1">
          Typescript, React, Express, Passport, Tailwindcss, Framer-motion,
          Socket.io and diving into Next.js
        </p>

        <div className="flex justify-center gap-12 text-xs font-light mt-2">
          <a
            className="w-6 h-6 m-0"
            href="https://github.com/dejwi"
            target="_blank"
          >
            <Image
              alt="github"
              src={ghLogo}
              layout="responsive"
              objectFit="cover"
            />
          </a>
          <a className="w-6 h-6 m-0">
            <Image
              alt="github"
              src={emailLogo}
              layout="responsive"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default About;
