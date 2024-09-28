import Image from 'next/image'
import { Didact_Gothic } from 'next/font/google'
import style from '@styles/ClientsShowCase.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const ClientsShowCase = () => {

    const data = [
        {
            src: "/assets/political/ravindra.png",
            name: "रविंद्र हेमराज धंगेकर",
            post: "आमदार - कसबा विधानसभा मतदार संघ"
        },
        {
            src: "/assets/political/bapu_mankar.png",
            name: "राघवेंद्र बापू मानकर",
            post: "अध्यक्ष, भाजप युवा मोर्चा, पुणे"
        },
        {
            src: "/assets/political/ravindra_bhegade.png",
            name: "रविंद्र भेगडे",
            post: "निवडणूक प्रमुख, भाजपा मावळ विधानसभा. अध्यक्ष, भारतीय जनता पक्ष, मावळ तालुका"
        },
        {
            src: "/assets/political/lahu.png",
            name: "लहु गजानन बालवडकर",
            post: "संस्थापक / अध्यक्ष – लहु बालवडकर सोशल वेलफेअर"
        },
        {
            src: "/assets/political/umesh.png",
            name: "उमेश ज्ञानेश्वर गायकवाड",
            post: "नगरसेवक, प्रभाग क्र. २१ कोरेगाव पार्क-घोरपडी-मुंढवा"
        },
        {
            src: "/assets/political/haribhau.png",
            name: "हरिदास चरवड",
            post: "नगरसेवक, मा. स्थायी समिती सदस्य, सदस्य पी.एम.आर.डी.ए., सदस्य नाव समिती,  पुणे"
        },
        {
            src: "/assets/political/shelar.png",
            name: "रघुविर उद्धवराव शेलार",
            post: "माजी उपाध्यक्ष : देहुरोड कॅन्टोन्मेंट बोर्ड, अध्यक्ष"
        },
        {
            src: "/assets/political/ganesh.png",
            name: "गणेश तुकाराम भोंडवे",
            post: "माजी नगरसेवक, पिंपरी- चिंचवड महानगरपालिका"
        },
        {
            src: "/assets/political/aditya.png",
            name: "आदित्यराजे हनुमंत घुंडरे (पाटील)",
            post: "माजी उपनगराध्यक्ष, आळंदी नगरपरिषद, आळंदी"
        },
        {
            src: "/assets/political/rajashree.png",
            name: "राजश्री पाटील",
        },
        {
            src: "/assets/political/himali.png",
            name: "हिमाली कांबळे",
        },
        {
            src: "/assets/political/priyanka.png",
            name: "प्रियंका धोत्रे",
            post: "अध्यक्षा : युवा स्पंदन संस्था शिरूर"
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={didact.className}>Our <span> Political </span>  Clients</h1>
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

export default ClientsShowCase