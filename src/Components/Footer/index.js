import clsx from 'clsx'
import { Link } from 'react-router-dom'
import style from './footer.module.css'
import store from './Store.svg'
import icon_fb from './icon_facebook.svg'
import icon_isg from './icon_instagram.svg'
import icon_ytb from './icon_youtube.svg'
import logo from './Logo_Ananas_Footer.svg'
import bocongthuong from './icon_bocongthuong.png'

const Footer = () => {
    return (
        <>
            <footer className={clsx(style.footer)}>
                <div className={style.top}>
                    <div className={style.top_item}>
                        <img src={store} alt='img store' />
                        <Link className={style.btn_search} to='/stores'>TÌM CỬA HÀNG</Link>
                    </div>
                    <div className={clsx(style.top_item, style.top_item_link)}>
                        <Link className={style.title} to='/product-list'>SẢN PHẨM</Link>
                        <Link className={style.item_link} to='/'>Giày Nam</Link>
                        <Link className={style.item_link} to='/'>Giày Nữ</Link>
                        <Link className={style.item_link} to='/'>Thời trang & Phụ kiện</Link>
                        <Link className={style.item_link} to='/'>Sale-off</Link>

                    </div>


                    <div className={clsx(style.top_item, style.top_item_link)}>
                        <Link className={style.title} to='/product-list'>VỀ CÔNG TY</Link>
                        <Link className={style.item_link} to='/'>Dứa tuyển dụng</Link>
                        <Link className={style.item_link} to='/'>Liên hệ nhượng quyền</Link>
                        <Link className={style.item_link} to='/'>Về Ananas</Link>
                    </div>


                    <div className={clsx(style.top_item, style.top_item_link)}>
                        <Link className={style.title} to='/product-list'>HỖ TRỢ</Link>
                        <Link className={style.item_link} to='/'>FAQs</Link>
                        <Link className={style.item_link} to='/'>Bảo mật thông tin</Link>
                        <Link className={style.item_link} to='/'>Chính sách chung</Link>
                        <Link className={style.item_link} to='/'>Tra cứu đơn hàng</Link>

                    </div>



                    <div className={clsx(style.top_item, style.top_item_link)}>
                        <Link className={style.title} to='/product-list'>LIÊN HỆ</Link>
                        <Link className={style.item_link} to='/'>Email góp ý</Link>
                        <Link className={style.item_link} to='/'>Hotline</Link>
                        <Link className={style.item_link} to='/'>0388530006</Link>
                    </div>


                </div>
                <div className={style.mid}>
                    <div className={clsx(style.social,style.box)}>
                        <div className={clsx(style.title, style.social_title)}>ANANAS SOCIAL</div>

                        <div className={style.social_body}>
                            <a target='_blank' rel='noreferrer' href='/https://www.facebook.com/xuanco941/'>
                                <img src={icon_fb} alt='icon fb' />
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/vibes.js/'>
                                <img src={icon_isg} alt='icon isg' />
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/discoveryou'>
                                <img src={icon_ytb} alt='icon youtube' />
                            </a>
                        </div>
                    </div>

                    <div className={clsx(style.box,style.box_img)}>
                        <Link to='/'><img className={style.mid_img} src={logo} alt='logo' />
                        </Link>
                    </div>
                    <div className={clsx(style.box,style.box_img)}>
                        <Link to='/'><img className={style.mid_img} src={bocongthuong} alt='bo cong thuong' />
                        </Link>
                    </div>

                </div>
                <div className={style.bottom}>© 2021 Xuan. All Rights Reserved</div>
            </footer>
        </>
    )
}


export default Footer