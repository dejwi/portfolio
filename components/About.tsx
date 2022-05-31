import React from "react";
import Image from "next/image";
import ghLogo from "../assets/github.svg";
import emailLogo from "../assets/email.svg";

const About: React.FC = () => {
  return (
    <article className="flex flex-col h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*content*/}
      <div className="flex flex-col justify-center items-center">
        {/*header*/}
        <h3 className="font-normal">Hello!</h3>

        {/*desc*/}
        <p className="w-[18rem]  leading-[18px] tracking-[-0.035em] text-center">
          I&apos;m a 16 year old developer from Poland with a dedication. I
          learn fast and can connect points pretty easily. Always open to try
          out something new, with every project always gained unique knowledge,
          and didn&apos;t stop at major roadblocks.
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
          <a className="w-6 h-6 m-0">
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
    </article>
  );
};

export default About;
