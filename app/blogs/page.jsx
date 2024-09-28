import BlogPageHero from '@components/BlogPageHero'
import PageTitle from '@components/PageTitle'
import React from 'react'
import ContactForm from '@components/ContactForm'

export const metadata = {
  title: 'Our Blogs',
  description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
  return (
    <div>
      <PageTitle subHeading={'Explore'} title={'Blogs Collection'} />
      <BlogPageHero />
      <ContactForm />
    </div>
  )
}

export default page