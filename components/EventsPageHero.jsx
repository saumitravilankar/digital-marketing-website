"use client"
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Didact_Gothic } from 'next/font/google'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import style from '@styles/EventsPageHero.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const EventsPageHero = () => {

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1, { once: true })
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: true })

    const dataCorp = [
        {
            src: "/corpEvent/1.jpg"
        },
        {
            src: "/corpEvent/2.jpg"
        },
        {
            src: "/corpEvent/3.jpg"
        },
        {
            src: "/corpEvent/4.jpg"
        },
        {
            src: "/corpEvent/5.jpg"
        },
        {
            src: "/corpEvent/6.jpg"
        },
        {
            src: "/corpEvent/7.jpg"
        },
        {
            src: "/corpEvent/8.jpg"
        },
    ]

    const dataSocial = [
        {
            src: "/socialEvent/1.jpeg"
        },
        {
            src: "/socialEvent/2.jpeg"
        },
        {
            src: "/socialEvent/3.jpeg"
        },
        {
            src: "/socialEvent/4.jpg"
        },
        {
            src: "/socialEvent/5.jpg"
        },
        {
            src: "/socialEvent/6.jpg"
        },
        {
            src: "/socialEvent/7.jpg"
        },
        {
            src: "/socialEvent/8.jpg"
        },
    ]

    return (
        <div className={style.container}>
            <div className={style.infoDiv}>
                <div ref={ref1} className={style.strip}>
                    <motion.h1
                        animate={{ translateX: isInView1 ? 0 : -500 }}
                        transition={{ duration: 1 }}
                        className={`${style.title} ${didact.className}`}><span>Corporate</span> Events
                    </motion.h1>
                </div>
                <h2 className={style.tagline}>Your corporate events made perfect with seamless planning!</h2>
                <div className={style.data}>
                    <p className={style.info}>From high-profile conferences to executive retreats and from on-ground special day programs to in-hall corporate programs, our team handles every detail, from concept development to flawless execution. With a focus on innovation and personalization, we deliver events that inspire, engage, and drive business success. Trust us to make your corporate event an extraordinary affair. Our team of experienced event planners understands the power of a well-executed corporate event. We go beyond the ordinary to create extraordinary affairs that leave a lasting impact on your attendees. From meticulously designing the event concept to flawlessly executing every detail, we ensure that your event is a true reflection of your company's vision and values.</p>
                    <div className={style.pictureDiv}>
                        <div className={style.picture}>
                            <Image src='/services/corp_event.png' alt="Corporate Events" fill />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${didact.className}`}>Moments of <span> Corporate </span> Brilliance</h1>
                <p className={style.carouselTagline}>Captivating Event Highlights</p>
            </div>
            <div className={style.sliderDiv}>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {dataCorp.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={style.pictureSlide}>
                                    <Image src={item.src} alt='dynastical corporate events' fill />
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>
            <div className={style.infoDiv}>
                <div ref={ref2} className={`${style.strip} ${style.reverse}`}>
                    <motion.h1
                        animate={{ translateX: isInView2 ? 0 : 500 }}
                        transition={{ duration: 1 }}
                        className={`${style.title} ${didact.className}`}><span>Social</span>  Events
                    </motion.h1>
                </div>
                <h2 className={`${style.tagline} ${style.taglineEnd}`}>Leave the planning to us, and enjoy the perfect social events!</h2>
                <div className={style.data}>
                    <div className={style.pictureDiv}>
                        <div className={style.picture}>
                            <Image src='/services/social_event.png' alt="Social Events" fill />
                        </div>
                    </div>
                    <p className={`${style.info} ${style.infoEnd}`}>
                        Our team takes great pride in curating and executing a wide range of exceptional social events. With a proven track record of successfully organizing and managing various events, we specialize in creating immersive experiences that cater to diverse interests and themes. Count on our expertise and passion to deliver an event that exceeds your expectations, leaving a lasting impression on your guests. We take pride in creating immersive and extraordinary social events that leave a lasting impression on your guests, fostering cherished memories for years to come. Let us transform your vision into a reality and curate an event that truly stands out from the rest.
                    </p>
                </div>
            </div>
            <div className={style.carouselHeadings}>
                <h1 className={`${style.carouselTitle} ${didact.className}`}> <span>Social</span>  Events in Frames</h1>
                <p className={style.carouselTagline}>Captivating Moments in Pictures</p>
            </div>
            <div className={style.sliderDiv}>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {dataSocial.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={style.pictureSlide}>
                                    <Image src={item.src} alt='dynastical social events' fill />
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default EventsPageHero

