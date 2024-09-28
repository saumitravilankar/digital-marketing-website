"use client"

import Link from 'next/link'
import { Petit_Formal_Script } from 'next/font/google'
import { motion, useInView } from 'framer-motion'
import style from '@styles/ServiceSection.module.scss'
import { useRef } from 'react'

const petit = Petit_Formal_Script({
    weight: "400",
    subsets: ["latin"]
})

const ServiceSections = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

  return (
    <div ref={ref} className={style.container}>
        <motion.div
        animate={{x: isInView ? 0 : "-100vw"}}
        transition={{duration: 0.8, type: "tween", ease: "linear"}}
        className={style.rowOne}>
            <h1 className={petit.className}>Corporate Solutions</h1>
            <ul>
                <li><Link href={'/'}>Brand Identity</Link></li>
                <li><Link href={'/'}>Repositioning of Brand</Link></li>
                <li><Link href={'/'}>Corporate Identities</Link></li>
                <li><Link href={'/'}>Audio Visuals</Link></li>
                <li><p>Digital Marketing</p></li>
                <li><Link href={'/'}>digital marketing services</Link></li>
                <li><Link href={'/'}>digital marketing services</Link></li>
                <li><Link href={'/'}>digital marketing services</Link></li>
                <li><Link href={'/'}>digital marketing services</Link></li>
            </ul>
        </motion.div>
        <motion.div
        animate={{x: isInView ? 0 : "100vw"}}
        transition={{duration: 0.8, type: "tween", ease: "linear", delay: 0.3}}
        className={style.rowTwo}>
            <h1 className={petit.className}>Political Analysis</h1>
            <ul className={style.links}>
              <li><Link href={'/'}>Image Building</Link></li>
              <li><Link href={'/'}>Election Campaign</Link></li>
              <li><Link href={'/'}>Post Election Campaign</Link></li>
            </ul>
        </motion.div>
        <motion.div 
        animate={{x: isInView ? 0 : "-100vw"}}
        transition={{duration: 0.8, type: "tween", ease: "linear", delay: 0.5}}
        className={style.rowThree}>
            <h1 className={petit.className}>Events</h1>
            <ul className={style.links}>
              <li><Link href={'/'}>Corporate Events</Link></li>
              <li><Link href={'/'}>Social Events</Link></li>
            </ul>
        </motion.div>
    </div>
  )
}

export default ServiceSections