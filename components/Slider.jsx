"use client";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { BsArrowRight } from "react-icons/bs";
import { Didact_Gothic } from "next/font/google";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

import style from "@styles/Slider.module.scss";
import Link from "next/link";

const Slider = ({ data, onPage, title, href }) => {

  return (
    <>
      {onPage &&
        <div className={style.titleDiv}>
          <h1 className={didact.className}>{title}</h1>
          <button>
            <Link href={href} >View All <BsArrowRight /></Link>
          </button>
        </div>
      }
      <div className={`${style.container} ${onPage ? style.onPage : ''}`}>
        <Swiper
          modules={[A11y, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: "false"
          }}
          loop
          speed={2000}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            1280: { slidesPerView: 7, spaceBetween: 70},
            1024: { slidesPerView: 5, spaceBetween: 100 },
            900: { slidesPerView: 5 },
            600: { slidesPerView: 4, spaceBetween: 50 },
            500: { slidesPerView: 4, spaceBetween: 50 },
            400: { slidesPerView: 3.8, spaceBetween: 30 },
            300: { slidesPerView: 3.8, spaceBetween: 30 },
            200: { slidesPerView: 3.8, spaceBetween: 30 },
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={style.picture}>
                  <Image src={item.src} alt="dynastical clients" fill />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
