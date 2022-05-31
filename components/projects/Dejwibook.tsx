import React from "react";
import Image from "next/image";
import appScreenshot from "../../assets/dejwibook.jpg";
import ghLogo from "../../assets/github.svg";

const Dejwibook: React.FC = () => {
  return (
    <article className="grid grid-cols-art gap-5 h-screen w-screen items-center justify-center font-[Rubik] font-light">
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
          <span className="-mb-4 ml-0.5 text-[#707070] text-xs tracking-[-0.035em]">
            Full-Stack App
          </span>
          <h3 className="tracking-[-0.035em] text-[2.5rem]">Dejwibook</h3>
          <span className="-mt-4 justify-self-end text-[#707070] text-xs tracking-[-0.035em] mr-1">
            Express + React
          </span>
        </div>

        {/*desc*/}
        <p className="w-[12rem] mt-3 text-[0.9rem] leading-[18px] tracking-[-0.035em]">
          Facebook-like project. <strong>Features</strong>{" "}
          backend-authorization, smooth animations, whole friends & posts &
          feeds implementation and even a live-time chat!
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

export default Dejwibook;
