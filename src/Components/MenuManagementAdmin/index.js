
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import img from './img/download.png'
import style from './menufixed.module.css'

const MenuManagementAdmin = () => {
    const ref = useRef();

    const handleSignOut = () => {
        localStorage.removeItem('accessTokenAdmin');
        localStorage.removeItem('refreshTokenAdmin');
    } 
    return (
        <div className={style.menu}>
            <img className={style.img} src={img} alt='img' />
            <div className={style.box_item}>
                <Link to='/admin/post-product' className={style.item}>Thêm sản phẩm</Link>
                <Link to='/admin/admin-product' className={style.item}>Xem sản phẩm</Link>
                <Link onClick={handleSignOut} ref={ref} to='/admin' className={style.item}>Đăng xuất</Link>
            </div>
        </div>
    )
}


export default MenuManagementAdmin