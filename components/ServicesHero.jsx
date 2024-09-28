import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import style from '@styles/ServicesHero.module.scss'

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const ServicesHero = () => {

    const corporationData = [
        {
            href: "brand-identity",first: "Brand", second: "Identity", third: ""
        },
        {
            href: "repositioning-of-brand",first: "Repositioning", second: "Of", third: "Brand"
        },
        {
            href: "corporate-identities",first: "Corporate", second: "Identities", third: ""
        },
        {
            href: "audio-visuals",first: "Audio", second: "Visuals", third: ""
        },
        {
            href: "digital-marketing",first: "Digital", second: "Marketing", third: ""
        },
    ]

    const politicalData = [
        {
            href: "image-building",first: "Image", second: "Building", third: ""
        },
        {
            href: "election-campaign",first: "Election", second: "Campaign", third: ""
        },
        {
            href: "post-election-campaign",first: "Post", second: "Election", third: "Campaign"
        },
    ]

    const eventData = [
        {
            href: "corporate-events",first: "Corporate", second: "Events", third: ""
        },
        {
            href: "social-events",first: "Social", second: "Events", third: ""
        }
    ]

  return (
    <div className={style.container}>
        <div className={style.service}>
            <div className={style.cartoon}></div>
            <div className={style.data}>
                <h1 className={lilita.className} style={{textAlign: "end"}}>Corporate Solutions</h1>
                <ul className={style.links}>
                    {corporationData.map((item,index)=>{
                        return (
                        <Link key={index} href={`/${item.href}`} className={style.nameDiv}>
                            <li data-link-text={item.first}>
                                {item.first}
                            </li>
                            <li data-link-text={item.second}>
                                {item.second}
                            </li>
                            <li data-link-text={item.third}>
                                {item.third}
                            </li>
                        </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className={style.service}>
            <div className={style.data}>
                <h1 className={lilita.className}>Political Analysis</h1>
                <ul className={`${style.links} ${style.linksCol1}`}>
                    {politicalData.map((item,index)=>{
                        return (
                        <Link key={index} href={`/${item.href}`} className={style.nameDiv}>
                            <li data-link-text={item.first}>
                                {item.first}
                            </li>
                            <li data-link-text={item.second}>
                                {item.second}
                            </li>
                            <li data-link-text={item.third}>
                                {item.third}
                            </li>
                        </Link>
                        )
                    })}
                </ul>
            </div>
            <div className={style.cartoon}></div>
        </div>
        <div className={style.service}>
            <div className={style.cartoon}></div>
            <div className={style.data}>
                <h1 className={lilita.className} style={{textAlign: "end"}}>Events</h1>
                <ul className={`${style.links} ${style.linksCol2}`}>
                    {eventData.map((item,index)=>{
                            return (
                            <Link key={index} href={`/${item.href}`} className={style.nameDiv}>
                                <li data-link-text={item.first}>
                                    {item.first}
                                </li>
                                <li data-link-text={item.second}>
                                    {item.second}
                                </li>
                                <li data-link-text={item.third}>
                                    {item.third}
                                </li>
                            </Link>
                            )
                        })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ServicesHero