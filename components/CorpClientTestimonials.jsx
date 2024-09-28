"use client";
import Image from "next/image";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/CorpClientTestimonials.module.scss";
import { useState } from "react";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const CorpClientTestimonials = () => {
  const [index, setIndex] = useState(0);

  const data = [
    {
      name1: "Royal Runbhumi Multisports Turf",
      src1: "/corpLogos/r_unbhumi-01-01.png",
      comment1:
        "With the help of the best digital marketing strategies, Dynastical Communication manages our social media accounts, generates leads for our sports coaching academy, and promotes our services. Dynastical is a fantastic choice for more effective digital marketing and advertising. We highly recommend it!",
      name2: "Vedbrahma",
      src2: "/corpLogos/vedbrahma.png",
      comment2:
        "We are amazed by the digital marketing and advertising expertise of Dynastical Communication. Their strategic digital marketing approach aligned perfectly with the insights provided by our astrology consultancy. They boosted our brand's online presence and generated remarkable leads. Highly recommended for businesses seeking an innovative and successful marketing partnership!",
      name3: "Carnival Restaurant & Bar",
      src3: "/corpLogos/c_arnival-01-01.png",
      comment3:
        "Our restaurant and bar in Pune had the pleasure of partnering with an exceptional digital marketing and advertising agency, Dynastical Communication. Their innovative strategies, targeted campaigns, and lead generation have significantly boosted our online presence and clientele. We highly recommend their services for effective business growth.",
    },
    {
      name1: "Sadguru Solar",
      src1: "/corpLogos/s_adguru-01-01.png",
      comment1:
        "Choosing Dynastical Communication as a digital marketing agency was the best decision we made for our solar and energy products business. Their innovative digital marketing strategies skyrocketed our online presence, attracting a wide customer base and boosting our sales through their effective lead generation campaigns. A truly reliable and effective digital marketing and advertising partner!",
      name2: "Pro Max",
      src2: "/corpLogos/promax.png",
      comment2:
        "After collaborating with Dynastical Communication, our Car and Bike Detailing Studio achieved results that we are quite proud of. Their proficiency in lead generation and strategically planned, well-coordinated, result-oriented social media postings have greatly aided in the advertising of our services, drawing in more potential customers and growing our clientele. Highly Recommended!",
      name3: "Right Foundation",
      src3: "/corpLogos/rf_01.png",
      comment3:
        "We wholeheartedly endorse Dynastical Communication for their remarkable contribution to our construction business. Their strategic lead generation, brand building, and social media campaigns have propelled our online presence, attracting quality leads and enhancing our services. A true game-changer for our company!",
    },
    {
      name1: "Pune Studio",
      src1: "/corpLogos/t_ps-01.png",
      comment1:
        "We appreciate Dynastical Communication's efficient management of our social media accounts, which includes uploading relevant content that is appropriate to our industry and business, using the best SEO keywords, writing fluent captions, and running lead generation initiatives as well to generate real leads for us. We strongly suggest it!",
      name2: "Excess Power Batteries",
      src2: "/corpLogos/epb.png",
      comment2:
        "Dynastical Communication's innovative and skilled digital marketing team seamlessly coordinates with our sales team to create engaging social media posts, content, and captions that have been embraced by our audience; their relevant social media promotions increase awareness of our products; and their successful lead generation campaigns have generated quality leads and boosted our business. We genuinely applaud their services!",
      name3: "Delilah Kitchen",
      src3: "/corpLogos/D_elilah123.png",
      comment3:
        "We are thrilled with the outstanding digital marketing services provided by Dynastical Communication. Their expertise in the field has been instrumental in revolutionizing our e-commerce business. With their strategic approach and cutting-edge marketing strategies, our online presence has soared to new heights. Their lead generation campaigns have proven to be highly effective, driving substantial sales and expanding our customer base. We wholeheartedly recommend Dynastical Communication for any business looking for a reliable and result-oriented digital marketing partner.",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1 className={didact.className}>
          What <span>people</span> say <span>About</span> us
        </h1>
      </div>
      <div
        className={style.testimonials}
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {data.map((item, index) => {
          return (
            <div key={index} className={style.slideDiv}>
              <div className={style.testimony}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment1}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src1} alt={item.name1} fill />
                  </div>
                  <p className={`${style.name} ${didact.className}`}>{item.name1}</p>
                  <p className={style.post}>{item.post1}</p>
                </div>
              </div>
              <div className={`${style.testimony} ${style.reverse}`}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment2}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src2} alt={item.name2} fill />
                  </div>
                  <p className={`${style.name} ${didact.className}`}>{item.name2}</p>
                  <p className={style.post}>{item.post2}</p>
                </div>
              </div>
              <div className={style.testimony}>
                <div className={style.comment}>
                  <div className={style.quoteDiv}>
                    <div className={style.quote}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                  <p className={style.text}>{item.comment3}</p>
                  <div className={style.quoteDivEnd}>
                    <div className={style.quoteEnd}>
                      <Image src={"/assets/quotation.png"} alt="quote" fill />
                    </div>
                  </div>
                </div>
                <div className={style.author}>
                  <div className={style.picture}>
                    <Image src={item.src3} alt={item.name3} fill />
                  </div>
                  <p className={`${style.name} ${didact.className}`}>{item.name3}</p>
                  <p className={style.post}>{item.post3}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.buttons}>
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={`${style.button} ${index === 0 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={`${style.button} ${index === 1 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(2);
          }}
          className={`${style.button} ${index === 2 ? style.active : ""}`}
        ></div>
      </div>
      <div className={style.buttonsBottoms}>
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={`${style.button} ${index === 0 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={`${style.button} ${index === 1 ? style.active : ""}`}
        ></div>
        <div
          onClick={() => {
            setIndex(2);
          }}
          className={`${style.button} ${index === 2 ? style.active : ""}`}
        ></div>
        {/* <div
          onClick={() => {
            setIndex(3);
          }}
          className={`${style.button} ${index === 3 ? style.active : ""}`}
        ></div> */}
      </div>
    </div>
  );
};

export default CorpClientTestimonials;
