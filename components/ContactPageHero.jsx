import Image from "next/image";
import { Didact_Gothic } from "next/font/google";
import style from "@styles/ContactPageHero.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const ContactPageHero = () => {
  return (
    <div className={style.container}>
      <div className={style.phoneImage}>
        <div className={style.picture}>
          <Image
            src="/assets/images/telephone.jpg"
            alt="contact Dynastical Communication"
            fill
          />
        </div>
      </div>
      <div className={style.formDiv}>
        <h1 className={`${style.titleMain} ${didact.className}`}>
        What are you waiting for? <br /> <span>Let's make it happen!</span>
        </h1>
        <form className={style.form} action="">
          <div className={style.name}>
            <div className={style.first}>
              <input
                type="text"
                name="first"
                placeholder="First Name"
                required
              />
            </div>
            <div className={style.last}>
              <input type="text" name="last" placeholder="Last Name" required />
            </div>
          </div>
          <div className={style.email}>
            <input type="email" name="first" placeholder="Email" required />
          </div>
          <div className={style.company}>
            <input type="text" name="first" placeholder="Company" required />
          </div>
          <div className={style.mobile}>
            <input
              type="tel"
              name="first"
              placeholder="Contact Number"
              required
            />
          </div>
          <div className={style.submit}>
            <input type="submit" value={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPageHero;
