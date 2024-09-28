"use client";
import { motion } from "framer-motion";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/Loading.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Loading = () => {
  const dynastical = "Dynastical";
  const dynasticalArr = Array.from(dynastical);
  const communication = "Communication";
  const communicationArr = Array.from(communication);

  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.title}>
        <h1 className={didact.className}>
          {dynasticalArr.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: -90 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.02 * index,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.5
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </h1>
        <h1 className={didact.className}>
          {communicationArr.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: -90 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.02 * index,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.5
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

export default Loading;
