"use client";
import { Lilita_One, Bebas_Neue, Montserrat } from "next/font/google";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import style from "@styles/Hero.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const mont = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Advertising", "Marketing", "Branding"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={`${style.left}`}>
        <p className={`${style.weAre} ${lilita.className}`}>we are</p>
        <h1 className={lilita.className}>Dynastical Communication</h1>
        <p className={`${style.tagline} ${lilita.className}`}>
          We are here to promise the brand that you always imagined!
        </p>
        <div className={style.logos}>
          <div className={style.logo}>
            <Link
              target="_blank"
              href={"https://www.facebook.com/DynasticalCommunication/"}
            >
              <FaFacebookF />
            </Link>
          </div>
          <div className={style.logo}>
            <Link target="_blank" href={"https://twitter.com/Dynastical_Comm"}>
              <FaTwitter />
            </Link>
          </div>
          <div className={style.logo}>
            <Link
              target="_blank"
              href={"https://www.instagram.com/dynasticalcommunication/"}
            >
              <FaInstagram />
            </Link>
          </div>
          <div className={style.logo}>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/company/dynastical-communication/about/"
              }
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.leftSkew}></div>
      <div className={style.rightSkew}></div>
      <div className={style.right}>
        <div className={style.outerRight}>
          <div className={style.innerRight}>
            <div className={style.picture}>
              <Image
                fill
                src="/assets/images/hero/cartoon.png"
                alt="dynastical communication character"
              />
            </div>
            <h2 className={bebas.className}>
              We Do
              <span className="word ml-[1.5px]"> {text} </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
