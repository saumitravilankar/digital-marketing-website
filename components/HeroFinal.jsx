"use client";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { Didact_Gothic } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "@styles/HeroFinal.module.scss";
import { useRef } from "react";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const HeroFinal = () => {
  const [text] = useTypewriter({
    words: ["Advertising", "Marketing", "Branding", "Events", "Campaigns"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const dynastical = "Dynastical";
  const dynasticalArr = Array.from(dynastical);
  const communication = "Communication";
  const communicationArr = Array.from(communication);

  const handleClick = () => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const scrollAmount = 1 * vh;
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.circle2}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.circle3}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ delay: 3 }}
        onClick={() => handleClick()}
        className={style.arrow}
      >
        <BsArrowDownCircleFill />
      </motion.div>
      <div className={style.left}>
        <div style={{lineHeight: "1"}}>
          <motion.p
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              type: "tween",
              // delay: 0,
            }}
            className={style.heading}
          >
            We Are
          </motion.p>
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
                    duration: 1
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
                    duration: 1
                  }}
                >
                  {item}
                </motion.div>
              );
            })}
          </h1>
          <motion.p
            initial={{ x: "-100vw",opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "linear",
              type: "tween",
              // delay: 1.4,
            }}
            className={`${style.tagline}`}
          >
            We are here to <span> promise the brand </span> that you always
            imagined!
          </motion.p>
          <div className={style.logos}>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "linear",
                type: "tween",
                // delay: 2.2,
              }}
              className={style.logo}
            >
              <Link
                target="_blank"
                href={"https://www.facebook.com/DynasticalCommunication/"}
              >
                <FaFacebookF />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "linear",
                type: "tween",
                // delay: 2,
              }}
              className={style.logo}
            >
              <Link
                target="_blank"
                href={"https://twitter.com/Dynastical_Comm"}
              >
                <FaTwitter />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "linear",
                type: "tween",
                // delay: 1.8,
              }}
              className={style.logo}
            >
              <Link
                target="_blank"
                href={"https://www.instagram.com/dynasticalcommunication/"}
              >
                <FaInstagram />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "linear",
                type: "tween",
                // delay: 1.6,
              }}
              className={style.logo}
            >
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/company/dynastical-communication/about/"
                }
              >
                <FaLinkedinIn />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "linear",
            type: "tween",
            // delay: 2,
          }}
          className={style.colorDiv}
        >
          <div className={style.picture}>
            <Image
              src={"/assets/images/hero/cartoon.png"}
              alt="dynastical cartoon"
              fill
            />
          </div>
          <h1 className={style.advertisement}>
            We Do <span>{text}</span>{" "}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroFinal;
