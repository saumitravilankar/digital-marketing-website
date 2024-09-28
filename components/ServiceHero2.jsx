import { Lilita_One, Bebas_Neue } from "next/font/google";
import Link from "next/link";
import style from "@styles/ServiceHero2.module.scss";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const ServiceHero2 = () => {
  return (
    <div className={style.container}>
      <div className={style.serviceDivOne}>
        <div className={style.services}>
          <div className={style.service}>Brand Identity</div>
          <div className={style.service}>Repositioning Of Brand</div>
          <div className={style.service}>Corporate Identities</div>
          <div className={style.service}>Audio Visuals</div>
          <div className={style.service}>Digital Marketing</div>
        </div>
        <div className={style.title}>
          <p className={style.weDo}>We do with brands</p>
          <h1 className={`${style.heading} ${lilita.className}`}>corporate solutions</h1>
          <p className={style.tagline}>
            Lorem ipsum dolor sit amet consecte tur adi pisicing elit. Accu
            samus in totam quidem veritatis consectet ur itaque volupt ates
          </p>
          <Link href={"/corporate-solutions"}>
            <button>
            See More
            </button>
          </Link>
        </div>
      </div>
      <div className={style.serviceDivTwo}>
        <div className={style.title}>
          <p className={style.weDo}>We do with brands</p>
          <h1 className={`${style.heading} ${lilita.className}`}>political analysis</h1>
          <p className={style.tagline}>
            Lorem ipsum dolor sit amet consecte tur adi pisicing elit. Accu
            samus in totam quidem veritatis consectet ur itaque volupt ates
          </p>
          <Link href={"/political-analysis"}><button>
           See More
          </button></Link>
        </div>
        <div className={style.services}>
          <div className={style.service}>Image Building</div>
          <div className={style.service}>Election Campaign</div>
          <div className={style.service}>Post Election Campaign</div>
        </div>
      </div>
      <div className={style.serviceDivOne}>
        <div className={`${style.services} ${style.events}`}>
          <div className={style.service}>Corporate Events</div>
          <div className={style.service}>Social Events</div>
        </div>
        <div className={style.title}>
          <p className={style.weDo}>We do with brands</p>
          <h1 className={`${style.heading} ${lilita.className}`}>Events</h1>
          <p className={style.tagline}>
            Lorem ipsum dolor sit amet consecte tur adi pisicing elit. Accu
            samus in totam quidem veritatis consectet ur itaque volupt ates
          </p>
          <Link href={"/events"}>
            <button>
            See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero2;
