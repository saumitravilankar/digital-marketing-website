import { Montserrat, Lilita_One } from 'next/font/google'
import style from '@styles/ServicePageContactForm.module.scss'
import Link from 'next/link'

const mont = Montserrat({
    weight: "500",
    subsets: ['latin']
})

const lilita = Lilita_One({
    weight: "400",
    subsets: ['latin']
})

const ContactForm = () => {
    return (
        <div className={style.container}>
            <div className={style.circle}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <h1 className={`${style.titleMain} ${lilita.className}`}>Want to discuss an idea that could change the world ? We’re all ears !</h1>
            <div className={style.subContainer}>
                <div className={style.contactformbox}>
                    <form className={style.form} action="">
                        <div className={style.name}>
                            <div className={style.first}>
                                <input type="text" name='first' placeholder='First Name' required />
                            </div>
                            <div className={style.last}>
                                <input type="text" name='last' placeholder='Last Name' required />
                            </div>
                        </div>
                        <div className={style.email}>
                            <input type="email" name='first' placeholder='Email' required />
                        </div>
                        <div className={style.company}>
                            <input type="text" name='first' placeholder='Company' required />
                        </div>
                        <div className={style.mobile}>
                            <input type="tel" name='first' placeholder='Contact Number' required />
                        </div>
                        <div className={style.submit}>
                            <input type="submit" value={'Submit'} />
                        </div>
                    </form>
                </div>
                <div className={style.addressContainer}>
                    <div className={`${style.data} ${mont.className}`}>
                        <h1 className={style.title}>our office !</h1>
                        <h2 className={style.address}>Minar Apartment, <br /> Law College Rd, <br /> Pune</h2>
                        <h3 className={style.phone}>Phone:
                            <Link className='px-2' href={'tel: +918767034157'}>+91 87670 34157</Link>
                            <span>/</span>
                            <Link className='px-2' href={'tel: +919175772356'}>+91 91757 72356</Link>
                        </h3>
                        <h4 className={style.email}>connectdynastical@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
