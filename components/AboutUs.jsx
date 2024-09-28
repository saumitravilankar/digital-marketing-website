"use client";
import Link from "next/link";
import Image from "next/image";
import { Didact_Gothic, Montserrat } from "next/font/google";
import { motion, useInView } from "framer-motion";
import style from "@styles/AboutUs.module.scss";
import { useRef } from "react";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin-ext"],
});

const mont = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

const AboutUs = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.left}>
        <p className={`${style.headingOne}`}>We're Offering</p>
        <h1 className={didact.className}>Awesome <span> Services</span></h1>
        <p className={style.tagline}>
          Navigating Success in the Digital Era !
        </p>
        <p className={style.info}>
          Dynastical Communication is a full-service digital marketing and
          advertising agency in Pune that helps businesses increase their online
          visibility and reach their target audience. With a team of experienced
          professionals, Dynastical Communication provides a range of services
          including SEO, PPC advertising, social media marketing, email
          marketing, content marketing, and website design and development. At
          Dynastical Communication, we believe that your digital dreams can
          become a reality with the right strategy and execution. So, join us
          and reign your digital kingdom with confidence!
        </p>
      </div>
      <div ref={ref} className={style.right}>
        <div className={style.blockDiv}>
          <motion.div
            animate={{ y: isInView ? 0 : 500, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0 }}
            className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/services/digital_marketing.png"}
                alt="digital marketing"
                fill
              />
            </div>
            <p className={mont.className}>Digital Marketing</p>
            <button>
              <Link href={"/digital-marketing"}>
                View More
              </Link>
            </button>
          </motion.div>
          <motion.div
            animate={{ y: isInView ? 0 : 500, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/services/corp_soln.png"}
                alt="corporate solutions"
                fill
              />
            </div>
            <p className={mont.className}>Corporate Solution</p>
            <button>
              <Link href={"/corporate-solutions"}>
                View More
              </Link>
            </button>
          </motion.div>
          <motion.div
            animate={{ y: isInView ? 0 : 500, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/services/political_analysis.png"}
                alt="political analysis"
                fill
              />
            </div>
            <p className={mont.className}>Political Analysis</p>
            <button>
              <Link href={"/political-analysis"}>
                View More
              </Link>
            </button>
          </motion.div>
          <motion.div
            animate={{ y: isInView ? 0 : 500, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
            className={style.block}>
            <div className={style.picture}>
              <Image src={"/services/events.png"} alt="events" fill />
            </div>
            <p className={mont.className}>Event Management</p>
            <button>
              <Link href={"/events"}>
                View More
              </Link>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
