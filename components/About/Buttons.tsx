import React, { useState } from "react";
import Image from "next/image";
import ghLogo from "../../assets/github.svg";
import emailLogo from "../../assets/email.svg";
import { motion, AnimatePresence } from "framer-motion";

const Buttons: React.FC = () => {
  const [showMail, setShowMail] = useState(true);

  const copyMail = () => {
    navigator.clipboard.writeText("dawidkrasowski05@gmail.com").then();
  };

  return (
    <div className="flex justify-center gap-12 text-xs font-light mt-2">
      <a
        className="w-6 h-6 m-0"
        href="https://github.com/dejwi"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="github"
          src={ghLogo}
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <button className="w-6 h-6 m-0 relative font-light">
        <Image
          alt="github"
          src={emailLogo}
          layout="responsive"
          objectFit="cover"
          onClick={() => setShowMail(!showMail)}
        />
        <AnimatePresence>
          {showMail && (
            <motion.span
              className="absolute -top-5 -left-16 p-0.5 rounded shadow"
              style={{ background: "#ffffff" }}
              initial={{ y: 20, scale: 0.5, x: -5, opacity: 0 }}
              animate={{ y: 0, scale: 1, x: 0, opacity: 1 }}
              exit={{ y: 10, scale: 0.5, x: -5, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              key="mail"
              whileTap={{ background: "#7aff9e" }}
              onClick={copyMail}
            >
              dawidkrasowski05@gmail.com
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default Buttons;
