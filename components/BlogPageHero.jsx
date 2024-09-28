import { Didact_Gothic } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import style from "@styles/BlogPageHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const BlogPageHero = () => {
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
      <h1 className={`${style.title} ${didact.className}`}>
        <span>Explore,</span>
        <span>Learn,</span>
        <span>Inspire,</span>
      </h1>
      <div className={style.blogs}>
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

export default BlogPageHero;
