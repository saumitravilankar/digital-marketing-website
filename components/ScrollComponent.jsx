"use client"

import style from '@styles/ScrollComponent.module.scss'
import { motion, useScroll } from "framer-motion"

const ScrollComponent = () => {

    const { scrollYProgress } = useScroll();

  return (
    <div className={style.container}>
        <motion.div className={style.exp}
        style={{scaleX: scrollYProgress}}
        />
    </div>
  )
}

export default ScrollComponent