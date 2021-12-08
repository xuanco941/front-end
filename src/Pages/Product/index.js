import clsx from 'clsx'
import img from './img_title.jpg'
import style from './product.module.css'

const Product = () => {
    return(
        <>
            <div className={style.container}>
                <div className={clsx(style.box,style.box1)}>
                <img className={style.img_title} src={img} alt='img title'/>
                </div>
                <div className={clsx(style.box,style.box2)}></div>
            </div>
        </>
    )
}


export default Product