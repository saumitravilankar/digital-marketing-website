import ContactPageHero from '@components/ContactPageHero'
import ContactPageTitle from '@components/ContactPageTitle'
import MapAddress from '@components/MapAddress'
import React from 'react'

export const metadata = {
  title: 'Contact Us',
  description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
  return (
    <div>
      <ContactPageTitle src={'/cartoons/namaste.png'} />
      <ContactPageHero />
      <MapAddress />
    </div>
  )
}

export default page