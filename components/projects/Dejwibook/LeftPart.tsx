import React, { useState } from "react";
import { leftAnime } from "../animeOpts";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import preview from "../../../assets/dejf2.gif";
import appScreenshot from "../../../assets/dejwibook.jpg";

const LeftPart: React.FC = () => {
  const [showPrev, setShowPrev] = useState(false);

  return (
    <motion.div
      className="w-[8.5rem] md:w-[14rem] z-50"
      {...leftAnime}
      onMouseDown={() => setShowPrev(true)}
      onMouseUp={() => setShowPrev(false)}
      onMouseLeave={() => setShowPrev(false)}
      onTouchStart={() => setShowPrev(true)}
      onTouchEnd={() => setShowPrev(false)}
      onTouchCancel={() => setShowPrev(false)}
    >
      <p className="text-center text-neutral-600 text-xs">Hold to preview</p>
      <LayoutGroup>
        {showPrev ? (
          <motion.div
            className="shadow-lg"
            animate={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
            layoutId="dejwi"
          >
            <Image
              src={preview}
              alt="app screenshot"
              layout="responsive"
              objectFit="cover"
              className="rounded"
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
            />
          </motion.div>
        )}
      </LayoutGroup>
    </motion.div>
  );
};

export default LeftPart;
