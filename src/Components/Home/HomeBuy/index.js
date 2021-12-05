import { Link } from 'react-router-dom'

import style from './homebuy.module.css'


function HomeBuy() {
    return (
        <>
            <h1 className={style.title}>DANH MỤC MUA HÀNG</h1>

            <div className={style.box}>
                <div className={style.box_item}>
                    <img src='https://ananas.vn/wp-content/uploads/catalogy-1.jpg' alt='box1'/>
                </div>
                <div className={style.box_item}>
                <img src='https://ananas.vn/wp-content/uploads/catalogy-2.jpg' alt='box1'/>
                </div>
                <div className={style.box_item}>
                <img src='https://ananas.vn/wp-content/uploads/catalogy-3.jpg' alt='box1'/>
                </div>
            </div>
        </>
    )
}


export default HomeBuy