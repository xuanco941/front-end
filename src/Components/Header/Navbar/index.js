import clsx from 'clsx'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import mb_cart from '../img/mb_cart.png'
import mb_location from '../img/mb_location.png'
import mb_search from '../img/mb_search.png'
import icon_tim_kiem from '../img/icon_tim_kiem.svg'
import Logo_Ananas_Header from '../img/Logo_Ananas_Header.svg'
import discoveru from '../img/DiscoverYOU.svg'
import { useState } from 'react'

const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false)

    return (
        <>
            <nav className={clsx(style.nav)}>
                <div className={clsx(style.col, style.col1)}>
                    <Link to='/'>
                        <img src={Logo_Ananas_Header} alt='logo ananas' />
                    </Link>
                </div>
                <div className={clsx(style.col, style.col2)}>

                    <div className={clsx(style.col2_item)}>
                        <Link className={clsx(style.col2_link)} to='/product'>
                            SẢN PHẨM
                            <span className={clsx(style.caret)}></span>
                        </Link>
                    </div>

                    <div className={clsx(style.col2_item)}>
                        <Link className={clsx(style.col2_link)} to='/product/?gender=man'>
                            NAM
                            <span className={clsx(style.caret)}></span>
                        </Link>
                    </div>

                    <div className={clsx(style.col2_item)}>
                        <Link className={clsx(style.col2_link)} to='/product/?gender=woman'>
                            NỮ
                            <span className={clsx(style.caret)}></span>
                        </Link>
                    </div>

                    <div className={clsx(style.col2_item)}>
                        <Link className={clsx(style.col2_link)} to='/product/sale'>
                            SALE OFF
                        </Link>
                    </div>

                    <div className={clsx(style.col2_item)}>
                        <Link className={clsx(style.col2_img)} to='/discoveryou'>
                            <img src={discoveru} alt='img discover u'/>
                        </Link>
                    </div>

                </div>
                <div className={clsx(style.col, style.col3)}>
                    <div className={clsx(style.box_search)}>
                        <img src={icon_tim_kiem}alt="img search" />
                        <input placeholder='Tìm kiếm' />
                    </div>
                </div>


                <div className={style.col2_mb}>
                    <Link className={style.item_col2_mb} to='/'>
                        <img alt='menu' src={mb_search}/>
                    </Link>
                    <Link className={style.item_col2_mb} to='/'>
                        <img alt='menu' src={mb_location}/>
                    </Link>
                    <Link className={style.item_col2_mb} to='/'>
                        <img alt='menu' src={mb_cart}/>
                    </Link>
                </div>
                <div className={style.col3_mb}>
                    <div onClick={()=>setShowMenu(true)} className={clsx(style.menu_mb,style.menu_mb_show, {[style.hide]: showMenu})}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div onClick={()=>setShowMenu(false)} className={clsx(style.menu_mb_close,style.menu_mb,{[style.hide]: !showMenu})}>X</div>


                    <div className={clsx({[style.box_menu_mb] : showMenu})}>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/product'>Sản Phẩm</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/product'>Nam</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/product'>Nữ</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/product'>Sale Off</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/product'>DiscoverYOU</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/signin'>Đăng nhập</Link>
                        <Link onClick={()=>{setShowMenu(false)}} className={style.item_box_menu_mb} to='/admin'>Đăng nhập quản trị viên</Link>

                    </div>
                </div>

            </nav>
        </>
    )
}


export default Navbar