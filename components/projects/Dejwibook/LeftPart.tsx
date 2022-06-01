import React, { useState, useEffect } from "react";
import { leftAnime } from "../animeOpts";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import preview from "../../../public/dejf2.gif";
import appScreenshot from "../../../assets/dejwibook.jpg";

const LeftPart: React.FC = () => {
  const [showPrev, setShowPrev] = useState(false);

  return (
    <motion.div
      className="w-[8.5rem] md:w-[14rem] z-50 cursor-pointer"
      {...leftAnime}
      onClick={() => setShowPrev(!showPrev)}
    >
      <p className="text-center text-neutral-600 text-xs">Tap to preview</p>
      <LayoutGroup>
        {showPrev ? (
          <motion.div
            className="shadow-lg"
            animate={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
            layoutId="dejwi"
          >
            <img
              src="/dejf2.gif"
              alt="app preview"
              className="rounded"
              width={preview.width}
              height={preview.height}
            />
          </motion.div>
        ) : (
          <motion.div layoutId="dejwi">
            <Image
              src={appScreenshot}
              alt="app screenshot"
              layout="responsive"
              objectFit="cover"
              className="rounded shadow-md"
              priority
            />
          </motion.div>
        )}
      </LayoutGroup>
    </motion.div>
  );
};

export default LeftPart;
