"use client";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import style from "@styles/PoliticalPageHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const PoliticalPageHero = () => {
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
            Image <span> Building </span>
          </motion.h1>
        </div>
        <h2 className={style.tagline}>
          Shaping Political Futures, Making History!
        </h2>
        <div className={style.data}>
          <p className={style.info}>
            As a leading provider of comprehensive political analysis services,
            we understand the importance of image building in the political
            landscape. Through our expertise, we help political clients shape a
            strong online presence. Using various social media platforms, we
            create engaging content tailored to their specific needs. From
            highlighting daily issues and political achievements to showcasing
            social and political activities, we ensure their message reaches the
            right audience. Our dedicated team leverages data-driven insights to
            develop effective strategies that drive engagement, enhance
            credibility, and foster meaningful connections. With expertise in
            digital marketing, we build a compelling image that resonates with
            constituents.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/image_build.png"
                alt="Image Building"
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
            Election <span> Campaign </span>
          </motion.h1>
        </div>
        <h2 className={`${style.tagline} ${style.taglineEnd}`}>
          Campaign Smarter, Win Bigger!
        </h2>
        <div className={`${style.data} ${style.dataRev}`}>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/election_camp.png"
                alt="Election Campaign"
                fill
              />
            </div>
          </div>
          <p className={`${style.info} ${style.infoEnd}`}>
            We specialize in leveraging the power of digital marketing to drive
            successful election campaigns. With our extensive research, we
            ensure targeted strategies that connect with voters on a deeper
            level. Our team of experts crafts compelling content that resonates
            with your audience, delivering your message effectively. We create
            captivating political advertisements that inspire action and
            maximize engagement. Through our data-driven digital marketing
            strategies, we amplify your online presence, boost voter outreach,
            and create meaningful connections. Trust us to fuel your campaign
            with the best research, content, and digital marketing expertise.
            Contact us to elevate your election campaign to new heights of
            success.
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
            <span> Post Election </span> Campaign
          </motion.h1>
        </div>
        <h2 className={style.tagline}>We build, We create and History repeats!</h2>
        <div className={style.data}>
          <p className={style.info}>
            Even after winning a campaign, the use of social media to stay in touch with your supporters, promote multiple agenda, and garner support for your programs can be vital to your political campaign. In order to effectively engage with your followers and stay connected, there are several key strategies. Keep them informed about your ongoing projects on the legislative front and any events you attend. Another important aspect of social media engagement is responding promptly to your audience. Share new proposals, pending legislation, and upcoming events relevant to your role as a public servant. Lastly, engaging your constituents through polls and surveys on various topics and policy issues is a great way to show that you value their opinions. It also helps you gauge public sentiment and better understand the needs and preferences of your constituents.
          </p>
          <div className={style.pictureDiv}>
            <div className={style.picture}>
              <Image
                src="/services/post_elec.png"
                alt="Post Election Campaign"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalPageHero;
