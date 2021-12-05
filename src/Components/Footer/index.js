import clsx from 'clsx'
import { Link } from 'react-router-dom'
import style from './footer.module.css'
import store from './Store.svg'

const Footer = () => {
    return (
        <>
            <footer className={clsx(style.footer)}>
                <div className={style.top}>
                    <div className={style.top_item}>
                        <img src={store} alt='img store' />
                        <Link className={style.btn_search} to='/'>TÌM CỬA HÀNG</Link>
                    </div>
                    <div className={style.top_item}>
                        <Link className={style.title} to='/product-list'>SẢN PHẨM</Link>
                        <Link className={style.item_link} to='/'>Giày Nam</Link>
                        <Link className={style.item_link} to='/'>Giày Nữ</Link>
                        <Link className={style.item_link} to='/'>Thời trang & Phụ kiện</Link>
                        <Link className={style.item_link} to='/'>Sale-off</Link>

                    </div>
                </div>
                <div className={style.bottom}></div>
            </footer>
        </>
    )
}


export default Footer