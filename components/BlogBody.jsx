import { Didact_Gothic, Bebas_Neue } from 'next/font/google'
import style from '@styles/BlogBody.module.scss'

const didact = Didact_Gothic({
    weight: "400",
    subsets: ["latin"]
})

const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})

const BlogBody = ({subtitle, title, para1, para2, para3}) => {
  return (
    <div className={style.container}>
        <h3 className={''}>{subtitle}</h3>
        <h1 className={didact.className}>{title}</h1>
        <div className={style.info}>
            <p><span className='pr-[5rem]'></span>{para1}</p>
            <p><span className='pr-[5rem]'></span>{para2}</p>
            <p><span className='pr-[5rem]'></span>{para3}</p>
        </div>
    </div>
  )
}

export default BlogBody