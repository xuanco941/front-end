
import { Link, useNavigate } from 'react-router-dom'
import img from './img/download.png'
import style from './menufixed.module.css'

const MenuManagementAdmin = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('accessTokenAdmin');
        localStorage.removeItem('refreshTokenAdmin');
        navigate('/admin');
    } 
    return (
        <div className={style.menu}>
            <img className={style.img} src={img} alt='img' />
            <div className={style.box_item}>
                <Link to='/admin/post-product' className={style.item}>Thêm sản phẩm</Link>
                <Link to='/admin/admin-product' className={style.item}>Xem sản phẩm</Link>
                <div onClick={handleSignOut} className={style.item}>Đăng xuất</div>
            </div>
        </div>
    )
}


export default MenuManagementAdmin