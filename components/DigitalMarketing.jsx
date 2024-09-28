"use client";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style from "@styles/DigitalMarketing.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const DigitalMarketing = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

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
      <div>
        <div ref={ref1} className={style.strip}>
          <motion.h1
            animate={{ translateX: isInView1 ? 0 : -500 }}
            transition={{ duration: 1 }}
            className={`${style.title} ${didact.className}`}
          >
            Search Engine <span> Optimization </span>
          </motion.h1>
        </div>
        <h2 className={style.tagline}>
          Dominate Search Engines with Superior SEO!
        </h2>
        <div className={style.data}>
          <p className={style.info}>
            Unlock the full potential of your online presence with our expert
            SEO services. Our team specializes in comprehensive SEO
            optimization, ensuring your website ranks high in search engine
            results. From on-page SEO strategies to off-page link building, we
            have you covered. We understand that SEO is not just a buzzword; it
            is the lifeline of your digital success. With our proven track
            record, we implement effective on-page SEO techniques, optimizing
            your website's content, meta tags, and structure. Our meticulous
            keyword research and analysis allow us to target the right audience,
            driving organic traffic to your site. Trust our SEO expertise to
            catapult your brand to the top of search engine rankings.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/seo.png"
                alt="Search Engine Optimization (SEO)"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={ref2} className={`${style.strip} ${style.reverse}`}>
          <motion.h1
            animate={{ translateX: isInView2 ? 0 : 500 }}
            transition={{ duration: 1 }}
            className={`${style.title} ${didact.className}`}
          >
            Pay Per <span> Click </span>
          </motion.h1>
        </div>
        <h2 className={`${style.tagline} ${style.taglineEnd}`}>
          Boost Traffic, Boost Revenue with PPC Solutions!
        </h2>
        <div className={`${style.data} ${style.dataRev}`}>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/PPC.png"
                alt="pay per click"
                fill
              />
            </div>
          </div>
          <p className={`${style.info} ${style.infoEnd}`}>
            Supercharge your online advertising with our expert PPC services.
            Drive targeted traffic, boost conversions, and maximize ROI. Our
            certified professionals optimize campaigns with strategic keyword
            research, compelling ad copy, and effective bid management.
            Experience data-driven PPC solutions that deliver measurable
            results. From setup to monitoring, we've got you covered. Whether
            you're new to PPC or want to optimize campaigns, our tailored
            services fit any budget. Unlock your online advertising potential.
            Contact us for a free consultation and take your business to new
            heights with our result-oriented PPC services.
          </p>
        </div>
      </div>
      <div>
        <div ref={ref3} className={style.strip}>
          <motion.h1
            animate={{ translateX: isInView3 ? 0 : -500 }}
            transition={{ duration: 1 }}
            className={`${style.title} ${didact.className}`}
          >
            <span> Website </span> Development
          </motion.h1>
        </div>
        <h2 className={style.tagline}>Fueling Your Web Marketing Journey!</h2>
        <div className={style.data}>
          <p className={style.info}>
            We provide innovative website development solutions that drive
            results. Our team combines cutting-edge technology and creative
            design to captivate your audience and fuel business growth. With
            expertise in website marketing, social media marketing, internet
            marketing, and web marketing strategies, we maximize your online
            potential. Our approach includes responsive design, seamless
            navigation, and optimized content for enhanced user engagement and
            conversions. Whether you need a new website or a redesign. Partner
            with us to unlock the power of website marketing and elevate your
            online presence.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/webdev.png"
                alt="Website Development"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
