import React from "react";

const Top: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className="font-cool text-[3.4rem] md:text-[6rem] tracking-[0.12em] -mt-20 md:-mt-16">
        Dawid Krasowski
      </h1>
      <h2 className="font-poppi text-sm md:text-lg tracking-[0.11em] -mt-4 md:-mt-[1.65rem]">
        Aspiring young Full-Stack Developer
      </h2>
    </div>
  );
};

export default Top;
