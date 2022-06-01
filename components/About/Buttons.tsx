import React from "react";
import Image from "next/image";
import ghLogo from "../../assets/github.svg";
import emailLogo from "../../assets/email.svg";

const Buttons: React.FC = () => {
  return (
    <div className="flex justify-center gap-12 text-xs font-light mt-2">
      <a
        className="w-6 h-6 m-0"
        href="https://github.com/dejwi"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="github"
          src={ghLogo}
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <a
        className="w-6 h-6 m-0"
        href="mailto:dawidkrasowski05@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="github"
          src={emailLogo}
          layout="responsive"
          objectFit="cover"
        />
      </a>
    </div>
  );
};

export default Buttons;
