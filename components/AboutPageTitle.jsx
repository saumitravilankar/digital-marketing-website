import { Didact_Gothic, Bebas_Neue } from 'next/font/google'
import style from '@styles/AboutPageTitle.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ["latin"]
})

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const AboutPageTitle = () => {
    return (
        <div className={style.container}>
            <p className={''}>ABOUT</p>
            <h1 className={didact.className}> <span>Dynastical </span> Communication</h1>
        </div>
    )
}

export default AboutPageTitle