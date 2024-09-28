import Image from 'next/image'
import { Didact_Gothic } from 'next/font/google'
import style from '@styles/CorpClientShowCase.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const CorpClientsShowCase = () => {

    const data = [
        {
            src: "/corpLogos/r_unbhumi-01-01.png",
            name: "Royal Runbhumi Multisports Turf",
        },
        {
            src: "/corpLogos/vedbrahma.png",
            name: "Vedbrahma",
        },
        {
            src: "/corpLogos/c_arnival-01-01.png",
            name: "Carnival Restaurant & Bar",
        },
        {
            src: "/corpLogos/s_adguru-01-01.png",
            name: "Sadguru Solar",
        },
        {
            src: "/corpLogos/promax.png",
            name: "Pro Max",
        },
        {
            src: "/corpLogos/rf_01.png",
            name: "Right Foundation",
        },
        {
            src: "/corpLogos/t_ps-01.png",
            name: "Pune Studio",
        },
        {
            src: "/corpLogos/epb.png",
            name: "Excess Power Batteries",
        },
        {
            src: "/corpLogos/tapas.png",
            name: "Tapas",
        },
        {
            src: "/corpLogos/k_ulfi-01.png",
            name: "Kulfi Heaven",
        },
        {
            src: "/corpLogos/D_elilah123.png",
            name: "Delilah kitchen & Bar",
        },
        {
            src: "/corpLogos/a_k realty-01.png",
            name: "AK Realty",
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={didact.className}>Our <span> Corporate </span>  Clients</h1>
            <div className={style.clients}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={style.client}>
                            <div className={style.picture}>
                                <Image src={item.src} alt={item.name} fill />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>{item.name}</p>
                                <p className={style.post}>{item.post}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CorpClientsShowCase