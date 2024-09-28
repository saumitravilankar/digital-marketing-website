import EventsPageHero from '@components/EventsPageHero'
import PageTitle from '@components/PageTitle'
import Slider from '@components/Slider'
import React from 'react'
import ContactForm from '@components/ContactForm'

export const metadata = {
  title: 'Events',
  description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'We offer'} title={'Event Management'} />
      <EventsPageHero />
      <Slider
        title={'Our Corporate Clients'}
        href={'/corporate-clients'}
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
        ]} />
      <Slider
        title={'Our Political Clients'}
        href={'/political-clients'}
        onPage={true}
        data={
          [
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
          ]
        } />
      <ContactForm />
    </div>
  )
}

export default page
