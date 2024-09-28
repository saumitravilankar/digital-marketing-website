import Image from 'next/image'
import Link from 'next/link'
import {AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {IoHomeSharp} from 'react-icons/io5'
import {IoMdCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'

import style from '@styles/Footer.module.scss'

const Footer = () => {

    const data = [
        {
            title1: "About",
            title2: "",
            links: [
                {href: "/about-company",
                 link: "About Company"
                },
                {href: "/dynastical-founder-&-team",
                 link: "Our Founder & Team"
                },
            ]
        },
        {
            title1: "Corporate",
            title2: "Solutions",
            links: [
                {href: "/brand-identity",
                 link: "Brand Identity"
                },
                {href: "/repositioning-of-brand",
                 link: "Repositioning Of Brand"
                },
                {href: "/corporate-identities",
                 link: "Corporate Identities"
                },
                {href: "/audio-visuals",
                 link: "Audio Visuals"
                },
            ]
        },
        {
            title1: "Political",
            title2: "Analysis",
            links: [
                {href: "/about-company",
                 link: "Image Building"
                },
                {href: "/election-campaign",
                 link: "Election Campaign"
                },
                {href: "/post-election-campaign",
                 link: "Post Election Campaign"
                },
            ]
        },
        {
            title1: "Events",
            title2: "",
            links: [
                {href: "/corporate-events",
                 link: "Corporate Events"
                },
                {href: "/social-events",
                 link: "Social Events"
                },
            ]
        },
        {
            title1: "Clients",
            title2: "Testimonials",
            links: [
                {href: "/corporate-clients",
                 link: "Corporate Clients"
                },
                {href: "/political-clients",
                 link: "Political Clients"
                },
                {href: "/event-testimonials",
                 link: "Events Testimonials"
                },
            ]
        },
    ]
    

  return (
    <div className={style.mainContainer}>
        <div className={style.container}>
            {data.map((item,i)=>{
                return(
                <div key={i} className={style.links}>
                    <div  className={style.heading}>
                        <div className={style.word} data-text={item.title1}>
                            {item.title1}
                        </div>
                        <div className={style.word} data-text={item.title2}>
                            {item.title2}
                        </div>
                    </div>
                    <div className={style.sublinks}>
                        {item.links.map((item,index)=>{
                            return(
                            <ul key={index}>
                                <li><Link href={item.href}>{item.link}</Link></li>
                            </ul>
                            )
                        })}
                    </div>
                </div>
                )
            })}
        </div>
        <div className={style.footerBottom}>
            <div className={style.picture}>
            <Link href={'/'}>
                <Image fill src='/assets/images/main_logo.svg' alt='Dynastical Communication Logo' />
            </Link>
            </div>
            <div className={style.socialIcons}>
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
            <div className={style.contact}>
                <h1 className={style.heading}>Contact</h1>
                <ul>
                    <li>
                        <div className="icon">
                        <IoHomeSharp />
                        </div>
                        <div className="text">
                            Minar Apartment, Law College Rd, Pune
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <MdEmail/>
                        </div>
                        <div className="text">
                            connectdynastical@gmail.com
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <IoMdCall/>
                        </div>
                        <Link href={'tel: +919175772356'} className="text">
                            +91 91757 72356
                        </Link>
                    </li>
                    <li>
                        <div className="icon">
                        <IoMdCall/>
                        </div>
                        <Link href={'tel: +918767034157'} className="text">
                            +91 8767034157
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

