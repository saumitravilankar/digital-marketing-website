"use client";

import { Didact_Gothic, Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import style from "@styles/PageTitle.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const PageTitle = ({ subHeading, title }) => {
  return (
    <div className={style.container}>
      <div style={{overflow: "hidden"}}>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={style.heading}>
          <p className={didact.className}>{subHeading}</p>
          <h1 className={didact.className}>{title}</h1>
        </motion.div>
      </div>
    </div>
  );
};
export default PageTitle;
