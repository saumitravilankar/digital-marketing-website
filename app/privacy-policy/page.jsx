import PageTitle from '@components/PageTitle'
import PrivacyPolicy from '@components/PrivacyPolicy'
import React from 'react'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
  return (
    <div>
        <PageTitle subHeading={"our"} title={'privacy policy'}/>
        <PrivacyPolicy />
    </div>
  )
}

export default page