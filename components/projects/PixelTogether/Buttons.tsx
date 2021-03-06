import React from "react";
import Image from "next/image";
import ghLogo from "../../../assets/github.svg";

const Buttons: React.FC<{ TechClick: () => void }> = ({ TechClick }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between w-[10.5rem] text-xs font-light mt-4 md:text-[0.85rem] md:w-[14rem]">
        <a
          className="flex items-center"
          href="https://github.com/dejwi/PixelTogether"
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
        <a
          href="https://dejwi.github.io/PixelTogether"
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
        <button className="font-light" onClick={TechClick}>
          Tech
        </button>
      </div>
    </div>
  );
};

export default Buttons;
