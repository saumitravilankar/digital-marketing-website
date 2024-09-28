import { AiFillHome, AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { IoMdCall } from 'react-icons/io'
import { Didact_Gothic } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import style from '@styles/FooterNew.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const FooterNew = () => {

    const data = [
        {
            title: "Main Links",
            links: [
                {
                    href: "/",
                    link: "Home"
                },
                {
                    href: "/about-us",
                    link: "About Company"
                },
                {
                    href: "/career",
                    link: "Career"
                },
                {
                    href: "/contact-us",
                    link: "Contact"
                },
            ]
        },
        {
            title: "Services",
            links: [
                {
                    href: "/digital-marketing",
                    link: "Digital Marketing"
                },
                {
                    href: "/corporate-solutions",
                    link: "Corporate Solutions"
                },
                {
                    href: "/political-analysis",
                    link: "Political Analysis"
                },
                {
                    href: "/events",
                    link: "Events"
                },
            ]
        },
        {
            title: "Clients & Testimonials",
            links: [
                {
                    href: "/corporate-clients",
                    link: "Corporate Testimonials"
                },
                {
                    href: "/political-clients",
                    link: "Political Testimonials"
                },
            ]
        }
    ]

    return (
        <div className={style.container}>
            <div className={style.contactDiv}>
                <div className={style.left}>
                    <h1>Ready To Get Started</h1>
                    <p>Connect with us today and unlock endless possibilities for your business.</p>
                </div>
                <div className={style.right}>
                    <button>
                        <Link href={'/contact-us'}>Contact Us</Link>
                    </button>
                </div>
            </div>
            <div className={style.footerDiv}>
                <div className={style.col}>
                    <div className={style.picture}>
                        <Image src={'/assets/images/main_logo.svg'} alt="Dynastical Communication Logo" fill />
                    </div>
                    <p className={style.info}>Dynastical Communication, a leading digital marketing company in Pune, delivers innovative strategies to amplify your online presence. Our expert team specializes in SEO, social media, and content marketing, driving exceptional results for businesses across industries</p>
                </div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={style.col}>
                            <h1 className={`${didact.className} ${style.heading}`}>{item.title}</h1>
                            <ul>
                                {item.links.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={item.href}>{item.link}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
                }
                <div className={style.col}>
                    <h1 className={`${didact.className} ${style.heading}`}>Contact</h1>
                    <ul>
                        <li className={style.contactItem}>
                            <div className={style.icon}>
                                <AiFillHome />
                            </div>
                            <p>Minar Apartment, Law College Rd, Pune</p>
                        </li>
                        <li className={style.contactItem}>
                            <div className={style.icon}>
                                <AiOutlineMail />
                            </div>
                            <p>connectdynastical@gmail.com</p>
                        </li>
                        <li className={style.contactItem}>
                            <div className={style.icon}>
                                <IoMdCall />
                            </div>
                            <Link href={'tel:+919175772356'}>
                                <p>+91 91757 72356</p>
                            </Link>
                        </li>
                        <li className={style.contactItem}>
                            <div className={style.icon}>
                                <IoMdCall />
                            </div>
                            <Link href={'tel:+918767034157'}>
                                <p>+91 87670 34157</p>
                            </Link>
                        </li>
                    </ul>
                    <div className={style.icons}>
                        <Link target='_blank' href={'https://www.facebook.com/DynasticalCommunication/'}>
                            <AiFillFacebook />
                        </Link>
                        <Link target='_blank' href={'https://twitter.com/Dynastical_Comm'}>
                            <AiOutlineTwitter />
                        </Link>
                        <Link target='_blank' href={'https://www.instagram.com/dynasticalcommunication/'}>
                            <AiFillInstagram />
                        </Link>
                        <Link target='_blank' href={"https://www.linkedin.com/company/dynastical-communication/about/"}>
                            <AiFillLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.cc}>
                <AiOutlineCopyrightCircle />
                <p>
                    <span>
                        <Link href={'/privacy-policy'}>
                            Dynastical Communication.
                        </Link>
                    </span>  All rights reserved by Agency</p>
            </div>
        </div>
    )
}

export default FooterNew
