"use client";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import style from "@styles/AboutUsHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const AboutUsHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, );

  return (
    <>
      <div className={style.container1}>
        <h1 className={didact.className}>
          Welcome to <span> Dynastical</span>
        </h1>
        <p className={style.tagline}>
          Revolutionary Digital Marketing is here!
        </p>
        <div className={style.info}>
          <p>
            The unique advertising and digital marketing firm Dynastical Communication Pvt. Ltd. was founded with the goal of delivering a fresh digital marketing perspective using our unique digital thinking. We are eager to grab youthful minds to ensure that we may offer revolutionary, original, non-plagiarised digital marketing and advertising solutions. With a team of highly skilled and innovative professionals, Dynastical Communication Pvt. Ltd. thrives on pushing the boundaries of traditional marketing techniques. Our passion lies in creating captivating campaigns that resonate with the target audience and leave a lasting impact. At Dynastical Communication, we understand that the digital landscape is ever-evolving, and we continuously adapt to the latest trends and technologies. Our forward-thinking approach allows us to stay ahead of the curve and deliver cutting-edge strategies that drive measurable results for our clients.
          </p>
        </div>
      </div>
      <div className={style.founder}>
        <h1 className={`${didact.className} ${style.title}`}>
          Meet Our <span> Founder</span>
        </h1>
        <div className={style.founderInfo}>
          <div className={style.left}>
            <div className={style.picture}>
              <Image src={"/assets/images/shubham_joshi.jpeg"} alt="Shubham Joshi" fill />
            </div>
          </div>
          <div className={style.right}>
            <h1 className={style.founderName}>Mr. Shubham Joshi</h1>
            <h3 className={style.tagline}>
              Founder & Managing Director
            </h3>
            <p className={style.info}>
              the Director of Dynastical Communication Private Limited, the
              leading digital marketing and advertising company in Pune, is a
              seasoned professional with many years of expertise in developing and
              implementing effective digital marketing strategies. He has in-depth
              knowledge of social media, email marketing, paid advertising, and
              content marketing, along with other digital marketing platforms. He
              has a proven history of utilising these channels to increase
              customer conversion rates, generate leads, and drive traffic. He is
              able to continually analyse and optimise campaigns to achieve the
              highest ROI thanks to his sharp eye for data and analytics. He works
              in close collaboration with his team and clients to create amazing
              outcomes and surpass expectations since he is an excellent
              communicator and collaborator.
            </p>
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <h1 className={didact.className}>Why <span> Choose Us </span></h1>
        <p className={style.tagline}>Charting New Digital Frontiers!</p>
        <div className={style.info}>
          <p>
            With an experienced team and a results-driven approach, we excel in providing top-notch digital marketing and advertising services to our clients. Our specialized expertise lies in delivering customized solutions that cater to your unique needs. We thrive on innovation, constantly seeking new strategies and tactics to stay ahead of the curve.
            Our commitment to delivering value for money ensures that every campaign we undertake yields maximum returns on investment. And above all, we prioritize exceptional customer service, going the extra mile to build strong relationships and exceed expectations. Partner with us for unparalleled marketing excellence.
          </p>
        </div>
      </div>
      <div ref={ref} className={style.countDiv}>
        <div className={style.point}>
          <div className={style.number}>
            {isInView && (
              <CountUp start={0} end={5000} duration={3} delay={0} />
            )}{" "}
            +
          </div>
          <p>Leads Converted</p>
        </div>
        <div className={style.point}>
          <div className={style.number}>
            {isInView && (
              <CountUp start={0} end={2000} duration={3} delay={0} />
            )}
            +
          </div>
          <p>Successful Campaigns</p>
        </div>
        <div className={style.point}>
          <div className={style.number}>
            {isInView && <CountUp start={0} end={100} duration={3} delay={0} />}
            +
          </div>
          <p>Satisfied Clients</p>
        </div>
        <div className={style.point}>
          <div className={style.number}>
            {isInView && <CountUp start={0} end={10} duration={3} delay={0} />}
            +
          </div>
          <p>Years of Industrial Experience</p>
        </div>
      </div>
    </>
  );
};

export default AboutUsHero;