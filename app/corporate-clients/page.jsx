import ContactForm from '@components/ContactForm'
import PageTitle from '@components/PageTitle'
import CorpClientShowCase from '@components/CorpClientShowCase'
import React from 'react'
import Slider from '@components/Slider'
import CorpClientTestimonials from '@components/CorpClientTestimonials'

export const metadata = {
  title: 'Our Corporate Clients',
  description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'Meet Our'} title={'Corporate Clients'} />
      <CorpClientShowCase />
      <CorpClientTestimonials />
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
      <ContactForm />
    </div>
  )
}

export default page