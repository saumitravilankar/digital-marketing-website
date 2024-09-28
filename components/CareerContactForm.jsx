import { Didact_Gothic } from 'next/font/google'
import style from '@styles/CareerContactForm.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ['latin']
})

const CareerContactForm = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1 className={`${didact.className} ${style.title}`}>Connect <span>with</span>  Us <span>Today</span> !</h1>
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
                    <div className={style.mobile}>
                        <input type="tel" name='first' placeholder='Contact Number' required />
                    </div>
                    <div className={style.position}>
                        <select name="" id="">
                            <option value="Select Position" selected>Select Position</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Content Writer (Hindi, English, Marathi)">Content Writer (Hindi, English, Marathi)</option>
                            <option value="Website Developer" >Website Developer</option>
                            <option value="Digital Marketer">Digital Marketer</option>
                            <option value="Video Editor">Video Editor</option>
                            <option value="Creative Head">Creative Head</option>
                        </select>
                    </div>
                    <div className={style.message}>
                        <textarea name="" id="" cols="30" rows="5" placeholder='Brief Introduction About Yourself !'></textarea>
                    </div>
                    <div className={style.submit}>
                        <input type="submit" value={'Submit'} />
                    </div>
                </form>
            </div>
            <div className={style.right}>
                <h1 className={didact.className}>Current Openings</h1>
                <div className={style.posts}>
                    <p>Graphic Designer</p>
                    <p>Content Writer (Hindi, English, Marathi)</p>
                    <p>Website Developer</p>
                    <p>Digital Marketer</p>
                    <p>Video Editor</p>
                    <p>Creative Head</p>
                </div>
            </div>
        </div>
    )
}

export default CareerContactForm