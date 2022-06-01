import React from "react";
import { motion } from "framer-motion";
import Buttons from "./Buttons";
import { animeOpts } from "./AnimeOpts";

const About: React.FC = () => {
  return (
    <motion.article
      className="flex flex-col h-[95vh] w-screen items-center justify-center font-[Rubik] font-light"
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

        <h3 className="mt-8">
          <strong>Current</strong> Tech
        </h3>
        <p className="leading-[18px] tracking-[-0.035em] text-center w-[20rem] text-xs -mt-1">
          Typescript, React, Express, Passport, Tailwindcss, Framer-motion,
          Socket.io and diving into Next.js
        </p>

        {/*buttons*/}
        <Buttons />
      </div>
    </motion.article>
  );
};

export default About;
