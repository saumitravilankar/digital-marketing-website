"use client";
import { Montserrat, Bebas_Neue } from "next/font/google";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {HiArrowLongRight} from 'react-icons/hi2'
import Link from "next/link";
import style from "@styles/HeroNew.module.scss";

const didact = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});


const HeroNew = () => {
  const [text] = useTypewriter({
    words: ["Advertising", "Marketing", "Branding"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.circle}>
          <div className={style.outerBorder}>
            <div className={style.innerBorder}></div>
          </div>
        </div>
        <div className={style.main}>
          <div className={style.data}>
            <p className={`${style.weAre}`}>we are</p>
            <h1 className={didact.className}>  Dynastical Communication</h1>
            <p className={`${style.tagline}`}>
              We are here to <span> promise the brand </span> that you always imagined!
            </p>
            <button>
              <Link href={'/contact-us'}>Get started <span><HiArrowLongRight /></span>  </Link>
            </button>
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
                <Link
                  target="_blank"
                  href={"https://twitter.com/Dynastical_Comm"}
                >
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
          <div className={style.skew}></div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.main}>
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
          <div className={style.skew}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
