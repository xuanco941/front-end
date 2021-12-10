import { Link } from 'react-router-dom'
import clsx from 'clsx'
import img_one from './img/1.jpg'
import img_two from './img/2.jpg' 
import img_three from './img/3.jpg' 

import style from './homebuy.module.css'


function HomeBuy() {
    return (
        <>
            <h1 className={style.title}>DANH MỤC MUA HÀNG</h1>

            <div className={style.box}>
                <div className={style.box_item}>
                    <img src={img_one} alt='box1'/>
                    <div className={style.content}>
                        <Link to='/' className={clsx(style.content_width,style.content_title)}>GIÀY NAM</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>New Arrivals</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Best Seller</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Sale-off</Link>

                    </div>
                </div>
                <div className={style.box_item}>
                <img src={img_two} alt='box1'/>
                <div className={style.content}>
                        <Link to='/' className={clsx(style.content_width,style.content_title)}>GIÀY NỮ</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>New Arrivals</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Best Seller</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Sale-off</Link>

                    </div>
                </div>
                <div className={style.box_item}>
                <img src={img_three} alt='box1'/>
                <div className={style.content}>
                        <Link to='/' className={clsx(style.content_width,style.content_title)}>DÒNG SẢN PHẨM</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Basas</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Vintas</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Urbas</Link>
                        <Link to='/' className={clsx(style.content_width,style.content_item)}>Pattas</Link>

                    </div>
                </div>
            </div>
        </>
    )
}


export default HomeBuy