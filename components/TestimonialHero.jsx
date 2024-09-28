import { AiFillStar } from "react-icons/ai"
import style from '@styles/TestimonialHero.module.scss'
import Link from "next/link"

const TestimonialHero = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={`${style.block} ${style.blockOne}`}>
                    <h1 className={style.heading}>Read What our Clients say about us !</h1>
                    <p className={style.tagline}>Lorem ipsum dolor sit amet consec Lorem ipsum, dolor sit amet conse</p>
                </div>
                <div className={`${style.block} ${style.blockTwo}`}>
                    <h1 className={style.title}>Political</h1>
                    <div className={style.cardDiv}>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/political-clients'} >View All</Link>
                </div>
            </div>
            <div className={style.right}>
                <div className={`${style.block} ${style.blockThree}`}>
                    <h1 className={style.title}>Corporate</h1>
                    <div className={style.cardDiv}>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/corporate-clients'} >View All</Link>
                </div>
                <div className={`${style.block} ${style.blockFour}`}>
                    <h1 className={style.title}>Events</h1>
                    <div className={style.cardDiv}>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cardBox}>
                            <div className={style.card}>
                                <div className={style.front}>
                                    front side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                                <div className={style.back}>
                                    back side
                                    <hr />
                                    <div className={style.stars} style={{ display: "flex", color: "gold", justifyContent: "center", fontSize: "20px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/political-client'} >View All</Link>
                </div>
            </div>
        </div>
    )
}

export default TestimonialHero