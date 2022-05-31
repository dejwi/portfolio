import type { NextPage } from "next";
import Head from "next/head";

import Top from "../components/Top";
import Dejwibook from "../components/projects/Dejwibook";
import PixelTogether from "../components/projects/PixelTogether";

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-100 overflow-x-hidden">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Dawid Krasowski portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Dejwibook />
      <PixelTogether />
    </div>
  );
};

export default Home;
