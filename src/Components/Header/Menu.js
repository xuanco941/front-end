import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './menu.module.css';

import icon_tra_cuu_don_hang from './img/icon_tra_cuu_don_hang.svg';
import icon_dang_nhap from './img/icon_dang_nhap.svg';
import icon_gio_hang from './img/icon_gio_hang.svg';

const Menu = () => {
    return (
        <>
            <div className={clsx(style.menu)}>
                <Link className={clsx(style.menu_item)} to='/search-order'>
                    <img src={icon_tra_cuu_don_hang} alt='img' />
                    <p className={clsx(style.menu_text)}>Tra cứu đơn hàng</p>
                </Link>

                <Link className={clsx(style.menu_item)} to='/stores'>
                    <img src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tim_cua_hang.svg' alt='img' />
                    
                    <p className={clsx(style.menu_text)}>Tìm cửa hàng</p>
                </Link>

                <Link className={clsx(style.menu_item)} to='/your-wishlist'>
                    <img src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_heart_header.svg' alt='img' />
                    
                    <p className={clsx(style.menu_text)}>Yêu thích</p>
                </Link>

                <Link className={clsx(style.menu_item)} to='/signin'>
                    <img src={icon_dang_nhap} alt='img' />
                    <p className={clsx(style.menu_text)}>Đăng nhập</p>
                </Link>

                <Link className={clsx(style.menu_item)} to='/your-cart'>
                    <img src={icon_gio_hang} alt='img' />
                    <p className={clsx(style.menu_text)}>Giỏ hàng (0)</p>
                </Link>
            </div>
        </>
    )
}

export default Menu;