import React from "react";
import Image from "next/image";
import appScreenshot from "../../assets/dejwibook.jpg";

const Dejwibook: React.FC = () => {
  return (
    <article className="grid  h-screen w-screen items-center justify-center font-[Rubik] font-light">
      <div className="min-w-[9rem] max-w-[9rem] shadow-md rounded ">
        <Image src={appScreenshot} alt="app screenshot" />
      </div>
      <div className="">
        <div className="grid auto-rows-min">
          <span className="-mb-5 text-[#707070] text-sm">Full-Stack App</span>
          <h3 className="tracking-[-0.035em] text-[2.8rem]">Dejwibook</h3>
          <span className="-mt-5 justify-self-end text-[#707070] text-sm">
            Express + React
          </span>
        </div>
        <p className="w-[14rem] mt-3 text-sm">
          Facebook-like project. Features backend-authorization, smooth
          animations, whole friends & posts & feeds implementation and even a
          live-time chat!
        </p>
        <div>
          <button>Details</button>
          <button>Live</button>
          <button>Tech</button>
        </div>
      </div>
    </article>
  );
};

export default Dejwibook;
