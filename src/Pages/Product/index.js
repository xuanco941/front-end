import clsx from 'clsx'
import { Link } from 'react-router-dom'

import img from './img_title.jpg'
import style from './product.module.css'
import img_test from './1.jpg'
import img_test2 from './2.jpg'

const Product = () => {



    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.box, style.box1)}>
                    <img className={style.img_title} src={img} alt='img title' />
                </div>
                <div className={clsx(style.box, style.box2)}>


                    <div className={style.item}>
                        <Link className={style.box_img} to='/product/1'>
                            <img className={clsx(style.img,style.img1)} src={img_test} alt='img product' />
                            <img className={clsx(style.img,style.img2)} src={img_test2} alt='img product' />
                        </Link>
                        <span className={style.status}>New Arrival</span>
                        <Link to='/product/1'>
                            <h4>Basas Bumper Gum EXT NE - High Top weeeeeeeeeeeeeeee</h4>
                        </Link>
                        <p>Offwhite/Gum</p>
                        <p className={style.price}>1.190.000 VND</p>
                    </div>

                    <div className={style.item}>
                        <Link className={style.box_img} to='/product/1'>
                            <img className={clsx(style.img,style.img1)} src={img_test} alt='img product' />
                            <img className={clsx(style.img,style.img2)} src={img_test2} alt='img product' />
                        </Link>
                        <span className={style.status}>New Arrival</span>
                        <Link to='/product/1'>
                            <h4>Basas Bumper Gum EXT NE - High Top weeeeeeeeeeeeeeee</h4>
                        </Link>
                        <p>Offwhite/Gum</p>
                        <p className={style.price}>1.190.000 VND</p>
                    </div>
                    



                </div>
            </div>
        </>
    )
}


export default Product