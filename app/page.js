import About from "@components/About";
import AboutUs from "@components/AboutUs";
import ClientsSlides from "@components/ClientsSlides";
import CompanyAndVentures from "@components/CompanyAndVentures";
import ContactForm from "@components/ContactForm";
import HeroFinal from "@components/HeroFinal";
import OurBlogs from "@components/OurBlogs";
import Slider from "@components/Slider";
import Testimonial from "@components/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroFinal />
      <About />
      <AboutUs />
      <Slider
        data={[
          {
            src: "/corpLogos/epb.png",
          },
          {
            src: "/corpLogos/promax.png",
          },
          {
            src: "/corpLogos/tapas.png",
          },
          {
            src: "/corpLogos/vedbrahma.png",
          },
          {
            src: "/corpLogos/k_ulfi-01.png",
          },
          {
            src: "/corpLogos/rf_01.png",
          },
          {
            src: "/corpLogos/c_arnival-01-01.png",
          },
          {
            src: "/corpLogos/D_elilah123.png",
          },
          {
            src: "/corpLogos/r_unbhumi-01-01.png",
          },
          {
            src: "/corpLogos/s_adguru-01-01.png",
          },
          {
            src: "/corpLogos/t_ps-01.png",
          },
          {
            src: "/corpLogos/m_sfm-01.png",
          },
          {
            src: "/corpLogos/a_k realty-01.png",
          },
          {
            src: "/corpLogos/k_etkar-01.png",
          },
          {
            src: "/corpLogos/t_rispirit-01-01-01.png",
          },
        ]}
      />
      <ClientsSlides />
      <Testimonial />
      <Slider
        title={"Our Corporate Clients"}
        href={"/corporate-clients"}
        onPage={true}
        data={[
          {
            src: "/corpLogos/epb.png",
          },
          {
            src: "/corpLogos/promax.png",
          },
          {
            src: "/corpLogos/tapas.png",
          },
          {
            src: "/corpLogos/vedbrahma.png",
          },
          {
            src: "/corpLogos/k_ulfi-01.png",
          },
          {
            src: "/corpLogos/rf_01.png",
          },
          {
            src: "/corpLogos/c_arnival-01-01.png",
          },
          {
            src: "/corpLogos/D_elilah123.png",
          },
          {
            src: "/corpLogos/r_unbhumi-01-01.png",
          },
          {
            src: "/corpLogos/s_adguru-01-01.png",
          },
          {
            src: "/corpLogos/t_ps-01.png",
          },
          {
            src: "/corpLogos/m_sfm-01.png",
          },
          {
            src: "/corpLogos/a_k realty-01.png",
          },
          {
            src: "/corpLogos/k_etkar-01.png",
          },
          {
            src: "/corpLogos/t_rispirit-01-01-01.png",
          },
        ]}
      />
      <Slider
        title={"Our Political Clients"}
        href={"/political-clients"}
        onPage={true}
        data={[
          {
            src: "/assets/political/ravindra.png",
          },
          {
            src: "/assets/political/bapu_mankar.png",
          },
          {
            src: "/assets/political/ravindra_bhegade.png",
          },
          {
            src: "/assets/political/lahu.png",
          },
          {
            src: "/assets/political/umesh.png",
          },
          {
            src: "/assets/political/haribhau.png",
          },
          {
            src: "/assets/political/shelar.png",
          },
          {
            src: "/assets/political/ganesh.png",
          },
          {
            src: "/assets/political/aditya.png",
          },
          {
            src: "/assets/political/rajashree.png",
          },
          {
            src: "/assets/political/himali.png",
          },
          {
            src: "/assets/political/priyanka.png",
          },
        ]}
      />
      <CompanyAndVentures />
      <OurBlogs />
      <ContactForm />
    </div>
  );
}
