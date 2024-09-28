"use client";
import Image from "next/image";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/Testimonial.module.scss";
import { useState } from "react";
import Link from "next/link";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index === 7 ? 0 : (prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? 7 : (prev) => prev - 1);
  };

  const data = [
    {
      corpImg: "/corpLogos/rf_01.png",
      corpName: "Right Foundation",
      corpPost: "Real Estate Agency",
      corpComment:
        "We wholeheartedly endorse Dynastical Communication for their remarkable contribution to our construction business. Their  strategic lead generation, brand building, and social media    campaigns have propelled our online presence, attracting quality ...",
      poliImg: "/assets/political/ravindra.png",
      poliName: "रविंद हेमराज धंगेकर",
      poliPost: "आमदार - कसबा विधानसभा मतदार संघ",
      poliComment:
        "नेतृत्व जन्माला येत असतांना त्यांची घडणावळ मोलाची ठरते. २०१७ आणि २०२३ या दोन्ही निवडणुकी दरम्यान या वाक्याचा नेमका प्रयत्य मला आला. निवणुकीदरम्यान विजयश्री खेचून आणण्याच्या माझ्या प्रवासातले मोलाचे साथीदार म्हणजे डायनॅस्टीकल कम्युनिकेशनची कुशल टीम. अतिशय सुनियोजित आणि आधुनिक...",
    },
    {
      corpImg: "/corpLogos/r_unbhumi-01-01.png",
      corpName: "Royal Runbhumi",
      corpPost: "Multisports Turf",
      corpComment:
        "With the help of the best digital marketing strategies, Dynastical Communication manages our social media accounts, generates leads for our sports coaching academy, and promotes our services. Dynastical is a fantastic choice for more ...",
      poliImg: "/assets/political/bapu_mankar.png",
      poliName: "राघवेंद्र बापू मानकर",
      poliPost: "आमदार - कसबा विधानसभा मतदार संघ",
      poliComment:
        "डायनॅस्टीकल कम्युनिकेशन टीम अतिशय उत्तम काम करते. जनतेचा अनेक विषयांवरचा कल लक्षात घेऊन, प्रत्येक विभागातील जनतेकडून पक्षाविषयी व लोक प्रतीनिधीविषयी मत जाणून घेऊन प्रचाराची रणनीती ठरवते. त्यानंतर कार्यकर्त्यांचे प्रशिक्षण, बूथ कमिटीचे नियोजन, डिजिटल रणनीती ...",
    },
    {
      corpImg: "/corpLogos/vedbrahma.png",
      corpName: "Vedbramha",
      corpPost: "Astrology",
      corpComment:
        "We are amazed by the digital marketing and advertising expertise of Dynastical Communication. Their strategic digital marketing approach aligned perfectly with the insights provided by our astrology consultancy. They boosted...",
      poliImg: "/assets/political/ravindra_bhegade.png",
      poliName: "रविंद्र भेगडे",
      poliPost: "निवडणूक प्रमुख,भाजपा मावळ विधानसभा.",
      poliComment:
        "डायनॅस्टीकल कम्युनिकेशन संपूर्ण टीमने राजकारणातल्या बारकाव्यांचा सखोल अभ्यास केलाय. त्यामुळे चालू घडामोडींचा आढावा घेत कुठल्या रणनीती योग्य ठरतील याचे त्यांनी उत्तम मार्गदर्शन केले. प्रभागातल्या अनेक कामांचा अहवाल तयार करणं , जनमत चाचणीद्वारे ...",
    },
    {
      corpImg: "/corpLogos/c_arnival-01-01.png",
      corpName: "Carnival",
      corpPost: "Restaurant & Bar",
      corpComment:
        "Our restaurant and bar in Pune had the pleasure of partnering with an exceptional digital marketing and advertising agency, Dynastical Communication. Their innovative strategies, targeted campaigns, and lead generation have...",
      poliImg: "/assets/political/lahu.png",
      poliName: "लहु गजानन बालवडकर",
      poliPost: "संस्थापक / अध्यक्ष – लहु बालवडकर सोशल वेलफेअर",
      poliComment:
        "राजकीय क्षेत्र अतिशय परिवर्तनशील आहे, दिवस सरत नाही तो नवीन बदलाला आम्हाला सामोरे जावे लागते. हा रोजचा होणार बदल अगदी सुनियोजित पद्धतीने हाताळायचे काम डायनॅस्टीकल कम्युनिकेशन करते. चैतन्यस्पर्श पादुका दर्शन सोहळा, सुरसंध्या, ...",
    },
    {
      corpImg: "/corpLogos/s_adguru-01-01.png",
      corpName: "Sadguru Solar",
      corpPost: "360° Solar Solutions",
      corpComment:
        "Choosing Dynastical Communication as a digital marketing agency was the best decision we made for our solar and energy products business. Their innovative digital marketing strategies skyrocketed our online presence ...",
      poliImg: "/assets/political/umesh.png",
      poliName: "उमेश ज्ञानेश्वर गायकवाड",
      poliPost: "नगरसेवक, प्रभाग क्र. २१ कोरेगाव पार्क-घोरपडी-मुंढवा",
      poliComment:
        "काळानुसार राजकारणाने सुद्धा अनेक बदल अनुभवले त्यातलाच एक म्हणजे सोशल मीडियाचा प्रभावी वापर. आपलं कार्य समाजाच्या सगळ्या स्तरात पोहचण्यासाठी, जनतेच्या मनात आपल्या विषयी आपलेपणाची भावना निर्माण व्हावी या सगळ्यांसाठीच हे माध्यम उपयुक्त ...",
    },
    {
      corpImg: "/corpLogos/promax.png",
      corpName: "Pro Max",
      corpPost: "Car & Bike Detailing Studio",
      corpComment:
        "After collaborating with Dynastical Communication, our Car and Bike Detailing Studio achieved results that we are quite proud of. Their proficiency in lead generation and strategically planned, well-coordinated, result-oriented social...",
      poliImg: "/assets/political/haribhau.png",
      poliName: "हरिदास चरवड",
      poliPost: "नगरसेवक, मा. स्थायी समिति सदस्य,",
      poliComment:
        "बदलत्या जगाच्या वेगासोबत चालायचे असेल तर सोशल मिडिया आजच्या समाज मनाचा आरसा आहे. सोशल मिडियाचा प्रभावी वापर करुण माझे  विचार आणि धोरण जनसामान्यापर्यंत पोहोचवण्याच काम डायनॅस्टीकल कम्युनिकेशन चोख करते. निवडणुकी दरम्यान वोर रूम ...",
    },
    {
      corpImg: "/corpLogos/t_ps-01.png",
      corpName: "The Pune Studio",
      corpPost: "Multipurpose Shooting Floor",
      corpComment:
        "We appreciate Dynastical Communication's efficient management of our social media accounts, which includes uploading relevant content that is appropriate to our industry and business, using the best SEO keywords, writing ...",
      poliImg: "/assets/political/shelar.png",
      poliName: "रघुविर उद्धवराव शेलार",
      poliPost: "माजी उपाध्यक्ष : देहुरोड कॅन्टोन्मेंट बोर्ड, अध्यक्ष",
      poliComment:
        "शिस्तबद्ध नियोजन, धोरणात्मक रणनीती, सामाजिक माध्यमांचा प्रभावशील वापर या त्रिसूत्रीचा योग्य वापर डायनॅस्टीकल कम्युनिकेशनद्वारे केला जातो. माझ्या संपूर्ण राजकीय प्रवासात त्यांची मला मोलाची साथ लाभलीय. सोशल मीडिया हे सर्वार्थाने प्रभावी...",
    },
    {
      corpImg: "/corpLogos/epb.png",
      corpName: "Excess Power Batteries",
      corpPost:
        "Automotive & Home Inverter battery Manufacturers, Suppliers, Distributors",
      corpComment:
        "Dynastical Communication's innovative and skilled digital marketing team seamlessly coordinates with our sales team to create engaging social media posts, content, and captions that have been embraced by our audience ...",
      poliImg: "/assets/political/ganesh.png",
      poliName: "गणेश तुकाराम भोंडवे",
      poliPost: "संस्थापक / अध्यक्ष – लहु बालवडकर सोशल वेलफेअर",
      poliComment:
        "पूर्वी मोठमोठाल्या सभा, मंडपांमधली गर्दी, कार्यक्रम, सोशल गॅदरिंग, बैठका अशा ठिकाणी ही मतदार मंडळी सापडायची. पण आता हीच मंडळी सापडतात सोशल मीडियावर. त्यामुळेच आजकाल सोशल मीडियावरचा प्रचार ‘सोशल’ मतदारांच्या भाषेत ‘क्रुशल ठरतो...",
    },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.title}>
        What Our <span>Client Says</span>
      </h1>
      <div
        className={style.testimonyContainer}
        style={{
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        {data.map((item, index) => {
          return (
            <div key={index} className={style.testimonySlide}>
              <div className={style.testimony}>
                <div className={style.top}>
                  <div className={style.picture}>
                    <Image src={item.corpImg} alt="name" fill />
                  </div>
                  <div className={style.info}>
                    <h1>{item.corpName}</h1>
                    <h4>{item.corpPost}</h4>
                  </div>
                </div>
                <div className={`${style.bottom} ${didact.className}`}>
                  <p>{item.corpComment}</p>
                  <Link href={"/corporate-clients"}>Read More</Link>
                </div>
              </div>
              <div className={style.testimony}>
                <div className={style.top}>
                  <div className={style.picture}>
                    <Image src={item.poliImg} alt="name" fill />
                  </div>
                  <div className={style.info}>
                    <h1>{item.poliName}</h1>
                    <h4>{item.poliPost}</h4>
                  </div>
                </div>
                <div className={`${style.bottom} ${didact.className}`}>
                  <p>{item.poliComment}</p>
                  <Link href={"/political-clients"}>Read More</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.control}>
        <button
          onClick={() => prevSlide()}
          className={`${index === 0 ? style.deactive : ""}`}
        >
          <BsArrowLeft />
        </button>
        <button
          onClick={() => nextSlide()}
          className={`${index === 7 ? style.deactive : ""}`}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
