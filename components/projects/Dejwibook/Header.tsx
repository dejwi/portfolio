import React from "react";

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
