import {AiFillStar} from "react-icons/ai"
import { Lilita_One } from "next/font/google"
import {FaLongArrowAltRight} from'react-icons/fa'
import style from '@styles/TestimonialsHero.module.scss'
import Link from "next/link"

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const TestimonialsHero = () => {
  return (
    <div className={style.container}>
        {/* <div className={style.circle}></div>
        <div className={style.circle2}></div>
        <div className={style.circle3}></div>
        <div className={style.circle4}></div> */}
        <div className={style.left}>
            <h1 className={`${style.title} ${lilita.className}`}>Read What our Clients say about us !</h1>
            <p className={style.tagline}>Explore our clients' stories. Click below to dive in deeper.</p>
            <div className={style.points}>
                <Link href={'/corporate-clients'} className={style.point}>
                    <div style={{display: "flex", gap: "1vw"}}>
                        <div className={style.blockOne}></div>
                        <h1 className={style.corp}>CORPORATE</h1>
                    </div>
                    <p className={style.arrow}><FaLongArrowAltRight /></p>
                </Link>
                <Link href={'/political-clients'} className={style.point}>
                    <div style={{display: "flex", gap: "1vw"}}>
                        <div className={style.blockTwo}></div>
                        <h1 className={style.poli}>POLITICAL</h1>
                    </div>
                    <p className={style.arrow}><FaLongArrowAltRight /></p>
                </Link>
                <Link href={'/events-clients'} className={style.point}>
                    <div style={{display: "flex", gap: "1vw"}}>
                        <div className={style.blockThree}></div>
                        <h1 className={style.eve}>EVENTS</h1>
                    </div>
                    <p className={style.arrow}><FaLongArrowAltRight /></p>
                </Link>
            </div>
        </div>
        <div className={style.right}>
            <div className={style.rightContainer}>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.cardDivOne}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.cardDivTwo}>
                                <div className={style.card}>
                                    <div className={style.front}>
                                        front side
                                        <hr />
                                        <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                        </div>
                                    </div>
                                    <div className={style.back}>
                                        back side
                                        <hr />
                                        <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={style.col}>
                        <div className={style.cardDivOne}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <div className={style.cardDivOne}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className={style.col}>
                        <div className={style.cardDivOne}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                </div>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div className={style.col}>
                        <div className={style.cardDivTwo}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{display: "flex", color: "gold", justifyContent: "center", fontSize: "20px"}}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsHero
