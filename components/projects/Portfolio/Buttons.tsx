import React from "react";
import Image from "next/image";
import ghLogo from "../../../assets/github.svg";

const Buttons: React.FC<{ TechClick: () => void }> = ({ TechClick }) => {
  return (
    <div className="flex justify-center gap-12 text-xs font-light mt-2">
      <a
        className="flex items-center"
        href="https://github.com/dejwi/portfolio"
        target="_blank"
        rel="noreferrer"
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
      <button className="font-light" onClick={TechClick}>
        Tech
      </button>
    </div>
  );
};

export default Buttons;
