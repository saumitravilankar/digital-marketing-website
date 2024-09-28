import CareerContactForm from '@components/CareerContactForm'
import PageTitle from '@components/PageTitle'
import React from 'react'

export const metadata = {
    title: 'Careers',
    description: 'Dynastical Communication is a full-service digital marketing and advertising agency in Pune that helps businesses increase their online visibility and reach their target audience.',
}

const page = () => {
    return (
        <div>
            <PageTitle subHeading={'Career'} title={'Leap Forward!'} />
            <CareerContactForm />
        </div>
    )
}

export default page