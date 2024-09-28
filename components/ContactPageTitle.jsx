"use client"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Didact_Gothic } from 'next/font/google'
import { motion } from 'framer-motion'
import style from '@styles/ContactPageTitle.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const ContactPageTitle = ({ src }) => {

    const [text] = useTypewriter({
        words: ['Namaste . . .', 'Hello . . .', 'Bonjour . . .'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div className={style.container}>
            <div style={{ overflow: "hidden" }}>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    className={style.heading}>
                    <h1 className={didact.className}>{text}</h1>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactPageTitle