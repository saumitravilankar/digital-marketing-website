import { Didact_Gothic, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import style from "@styles/OurBlogs.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const OurBlogs = () => {

  const data = [
    {
      href: "/blogs/blog-1",
      src: "/assets/images/corporate.jpg",
      alt: "Trendy Digital Marketing & Advertising",
      heading: "Unlock the Power of Trendy Digital Marketing & Advertising",
      date: "22 FEB 2023",
    },
    {
      href: "/blogs/blog-2",
      src: "/assets/images/political.jpg",
      alt: "Creative Graphic Designs",
      heading: "Bringing Your Ideas To Life With Creative Graphic Designs",
      date: "24 FEB 2023",
    },
    {
      href: "/blogs/blog-3",
      src: "/assets/images/events.jpg",
      alt: "Dynastical Holi Blog",
      heading: "Let's color your brand with confidence",
      date: "06 MAR 2023",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1 className={didact.className}>
          Our Latest <span> Blogs</span>
        </h1>
        <button>
          <Link href={"/blogs"}>
            View All <BsArrowRight />{" "}
          </Link>
        </button>
      </div>
      <div className={style.bottom}>
        {data.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <div className={style.blog}>
                <div className={style.picture}>
                  <Image src={item.src} alt={item.alt} fill />
                </div>
                <h1 className={`${style.title} ${didact.className}`}>{item.heading}</h1>
                <p>{item.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OurBlogs;
