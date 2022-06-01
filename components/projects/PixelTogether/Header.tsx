import React from "react";

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
