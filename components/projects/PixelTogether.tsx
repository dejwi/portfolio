import React from "react";
import Image from "next/image";
import appScreenshot from "../../assets/pixelt.png";
import ghLogo from "../../assets/github.svg";

const PixelTogether: React.FC = () => {
  return (
    <article className="grid grid-cols-art gap-3.5 h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*img*/}
      <div className="w-[8.5rem] shadow-md">
        <Image
          src={appScreenshot}
          alt="app screenshot"
          layout="responsive"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/*content*/}
      <div className="flex flex-col">
        {/*header*/}
        <div className="grid auto-rows-min">
          <span className="-mb-3.5 ml-0.5 text-[#707070] text-xs tracking-[-0.035em]">
            Full-Stack App
          </span>
          <h3 className="tracking-[-0.035em] text-[2.3rem]">PixelTogether</h3>
          <span className="-mt-3.5 justify-self-end text-[#707070] text-xs tracking-[-0.035em]">
            Express + React
          </span>
        </div>

        {/*desc*/}
        <p className="w-[13rem] mt-3 text-[0.84rem] ml-1 leading-[17px] tracking-[-0.035em]">
          A smaller project of mine. Allows users to draw together in{" "}
          <strong>real-time</strong> using room based system.
        </p>
        {/*buttons*/}
        <div className="w-full flex justify-center">
          <div className="flex justify-between w-[10.5rem] text-xs font-light mt-4">
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
            <a>Live</a>
            <a>Tech</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PixelTogether;
