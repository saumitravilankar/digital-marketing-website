import { Montserrat, Lilita_One, Didact_Gothic } from "next/font/google";
import style from "@styles/ContactForm.module.scss";
import Link from "next/link";

const mont = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.contactformbox}>
          <h1 className={`${style.titleMain} ${didact.className}`}>
            <span>What are you waiting for? </span> <br /> Let's make it happen!
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
                <input
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  required
                />
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
        <div className={`${style.addressContainer} ${didact.className}`}>
          <div className={style.top}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3333674985597!2d73.82619727505126!3d18.513831469380346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb12a6fe48d%3A0x7c5faf18901673bf!2sDynastical%20Communication%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1687763798734!5m2!1sen!2sin"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={style.bottom}>
            <h1 className={style.title}>
              our <span>office !</span>{" "}
            </h1>
            <p className={style.address}>
              Minar Apartment, Law College Rd, Pune
            </p>
            <p className={style.phone}>
              Phone:
              <Link className="px-2" href={"tel: +918767034157"}>
                +91 8767034157
              </Link>
              <span>/</span>
              <Link className="px-2" href={"tel: +919175772356"}>
                +91 91757 72356
              </Link>
            </p>
            <p className={style.email}>connectdynastical@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
