import React from "react";
import Image from "next/image";
import ghLogo from "../../assets/github.svg";

const Portfolio: React.FC = () => {
  return (
    <article className="flex flex-col h-screen w-screen items-center justify-center font-[Rubik] font-light">
      {/*content*/}
      <div className="flex flex-col">
        {/*header*/}
        <div className="flex flex-col justify-center items-center">
          <h3 className="tracking-[-0.035em] text-[2.5rem]">Portfolio</h3>
          <span className="-mt-4  text-[#707070] text-xs md:text-sm">
            Next.js
          </span>
        </div>

        {/*desc*/}
        <p className="w-[15rem] mt-3 leading-[18px] tracking-[-0.035em] text-center">
          You’re here! First time using Next.js and loving it. Very minimalistic
          site with I hope nice animations :)
        </p>
        {/*buttons*/}
        <div className="flex justify-center gap-12 text-xs font-light mt-2">
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
          <a>Tech</a>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
