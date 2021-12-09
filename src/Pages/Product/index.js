import clsx from 'clsx'
import { Link } from 'react-router-dom'

import img from './img_title.jpg'
import style from './product.module.css'
import img_test from './1.jpg'
import img_test2 from './2.jpg'
import { useEffect } from 'react'



const Product = () => {

    useEffect(() => {
        const box_img = Array.from(document.querySelectorAll('.boximg'));

        box_img.forEach((elm) => {
            elm.addEventListener('mousemove', () => {
                elm.children[0].style.display = 'none';
                elm.children[1].style.display = 'block';
            })

            elm.addEventListener('mouseleave', () => {
                elm.children[0].style.display = 'block';
                elm.children[1].style.display = 'none';
            })
        })


        //remove event , fix ro ri memory
        return () => {
            box_img.forEach((elm) => {
                elm.removeEventListener('mousemove', () => {
                    elm.children[0].style.display = 'none';
                    elm.children[1].style.display = 'block';
                })
    
                elm.removeEventListener('mouseleave', () => {
                    elm.children[0].style.display = 'block';
                    elm.children[1].style.display = 'none';
                })
            })
        }

    }, [])



    return (
        <>
            <div className={style.container}>
                <div className={clsx(style.box, style.box1)}>
                    <img className={style.img_title} src={img} alt='img title' />
                </div>
                <div className={clsx(style.box, style.box2)}>


                    <div className={style.item}>
                        <Link className={clsx(style.box_img, 'boximg')} to='/product/1'>
                            <img className={clsx(style.img)} src={img_test} alt='img product' />
                            <img className={clsx(style.img, style.hide)} src={img_test2} alt='img product' />
                            <span className={style.buynow}>Mua Ngay</span>
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