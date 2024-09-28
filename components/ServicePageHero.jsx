"use client";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style from "@styles/ServicePageHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const ServicePageHero = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

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
            Brand <span> Identity </span>
          </motion.h1>
        </div>
        <h2 className={style.tagline}>Crafting Digital Legacies!</h2>
        <div className={style.data}>
          <p className={style.info}>
            We specialize in online branding, crafting powerful brand identities
            that deeply resonate with your audience. Our expertise ranges from
            creating captivating logos to developing a unique brand voice.
            Through a strategic approach, we leverage the power of social media,
            web design, and content marketing to showcase your brand story
            effectively. With our deep industry understanding, we build a
            cohesive online presence that aligns seamlessly with your business
            goals. Trust our expertise to set you apart in the dynamic digital
            realm. Whether you're starting from scratch or looking to revamp, we
            consistently deliver remarkable results. Elevate your brand and
            forge meaningful connections with your customers.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/brand_identity.png"
                alt="Brand Identity"
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
            {" "}
            <span>Repositioning </span> Of Brand
          </motion.h1>
        </div>
        <h2 className={`${style.tagline} ${style.taglineEnd}`}>
          Let's break the mold & rewrite the story!
        </h2>
        <div className={`${style.data} ${style.dataRev}`}>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/repositioning.png"
                alt="Repositioning of Brand"
                fill
              />
            </div>
          </div>
          <p className={`${style.info} ${style.infoEnd}`}>
            In today's dynamic marketplace, maintaining relevance and connecting
            with your target audience is crucial. Our digital marketing and
            advertising agency specializes in strategic brand repositioning,
            breathing new life into your brand identity. Through meticulous
            research, we uncover opportunities to redefine your brand's
            messaging and create visually captivating elements. With our
            expertise in digital channels, we execute impactful campaigns that
            successfully reposition your brand. Whether you need a comprehensive
            rebranding effort or a realignment of brand perception, trust us to
            steer your brand towards a brighter future. Partner with us and
            harness the power of repositioning to unlock fresh growth
            opportunities and forge meaningful connections with your audience.
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
            Corporate <span> Identity </span>
          </motion.h1>
        </div>
        <h2 className={style.tagline}>Fueling Corporate Brilliance!</h2>
        <div className={style.data}>
          <p className={style.info}>
            Welcome to our Corporate Identity services, where we specialize in
            establishing impactful brand presence for businesses. Our agency
            excels in enhancing corporate branding and image building efforts.
            Recognizing the significance of corporate identity in today's
            competitive landscape, we employ a strategic approach and creative
            expertise to craft unique brand identities that deeply resonate with
            your target audience and embody your company's values. Our
            comprehensive solutions include logo design, brand guidelines, and
            consistent messaging across all touchpoints. Through tailored
            strategies, we strive to excel in corporate image building, enabling
            you to establish a compelling brand identity that distinguishes you
            from competitors. Trust us to be your partner in achieving corporate
            identity excellence.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/corporate_identity.png"
                alt="corporate identity"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={ref4} className={`${style.strip} ${style.reverse}`}>
          <motion.h1
            animate={{ translateX: isInView4 ? 0 : 500 }}
            transition={{ duration: 1 }}
            className={`${style.title} ${didact.className}`}
          >
            Audio - <span> Visuals </span>
          </motion.h1>
        </div>
        <h2 className={`${style.tagline} ${style.taglineEnd}`}>
          Ignite Your Brands with Audio-Visual Impact!
        </h2>
        <div className={`${style.data} ${style.dataRev}`}>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/audio_visuals.png"
                alt="audio-visuals"
                fill
              />
            </div>
          </div>
          <p className={`${style.info} ${style.infoEnd}`}>
            With expertise in exceptional audio-visuals, we are trusted
            providers of comprehensive AV marketing strategies. Our creative
            approach, combined with cutting-edge technology, enables us to
            transform your brand's message into captivating audio-visual
            experiences. From concept to distribution, our experienced team
            ensures seamless execution and delivers high-quality results.
            Partner with us, the industry-leading audio-visual providers, to
            enhance your brand's visibility through the power of audio-visual
            storytelling. Elevate your marketing efforts with our innovative
            audio-visual services. Contact us today for a transformative
            collaboration that will elevate your brand's visibility and
            captivate your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;
