import clsx from 'clsx'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className={clsx(style.nav)}>
                <div className={clsx(style.col, style.col1)}>
                    <Link to='/'>
                        <img src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg' alt='logo ananas' />
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
                            <img src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg' alt='img discover u'/>
                        </Link>
                    </div>

                </div>
                <div className={clsx(style.col, style.col3)}>
                    <div className={clsx(style.box_search)}>
                        <img src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tim_kiem.svg'alt="img search" />
                        <input placeholder='Tìm kiếm' />
                    </div>
                </div>


                <div className={style.col2_mb}>2</div>
                <div className={style.col3_mb}>3</div>

            </nav>
        </>
    )
}


export default Navbar