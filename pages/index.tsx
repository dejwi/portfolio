import type { NextPage } from "next";
import Head from "next/head";

import Top from "../components/Top";
import Dejwibook from "../components/projects/Dejwibook/Dejwibook";
import PixelTogether from "../components/projects/PixelTogether/PixelTogether";
import Portfolio from "../components/projects/Portfolio/Portfolio";
import About from "../components/About/About";

const Home: NextPage = () => {
  const tagsClass = "text-center font-poppi text-[#ADADAD] text-sm";
  return (
    <div className="bg-neutral-100 overflow-x-hidden">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Dawid Krasowski portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Dawid Krasowski" />
        <meta
          name="keywords"
          content="Portfolio, Dawid, Krasowski, HTML, CSS, Tailwindcss, React, Nextjs, best, pretty, minimalistic, github, developer, web"
        />
        <meta name="theme-color" content="#f5f5f4" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/pixt.gif" />
        <link rel="preload" as="image" href="/dejf2.gif" />
      </Head>
      <Top />
      <p className="text-center font-poppi text-[#ADADAD] text-sm">
        {"<projects>"}
      </p>
      <Dejwibook />
      <PixelTogether />
      <Portfolio />
      <p className="text-center text-[#404040] font-poppi text-[0.7rem] underline">
        <a
          href="https://github.com/dejwi?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          older projects
        </a>
      </p>
      <p className={tagsClass}>{"</projects>"}</p>
      <div className="mt-8"></div>
      <p className={tagsClass}>{"<about>"}</p>
      <About />
      <p className={tagsClass}>{"</about>"}</p>
    </div>
  );
};

export default Home;
