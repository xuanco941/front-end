import { Link } from 'react-router-dom'
import clsx from 'clsx'

import style from './news.module.css'
import img1 from './img/item1.jpg'
import img2 from './img/item2.jpg'
import img3 from './img/item3.jpg'
import img4 from './img/item4.jpg'



function News() {
    return (
        <>
            <h1 className={style.title}>TIN TỨC & BÀI VIẾT</h1>

            <div className={style.box}>
                <div className={clsx(style.item)}>
                    <Link to='/'>
                    <img src={img1} alt='img news'/>
                    </Link>
                    <h2>VÌ SAO LÀ LUCKY LUKE?</h2>
                    <p>Quay về thời điểm trước khi ngỏ lời mời, đội ngũ Ananas tìm thấy khá nhiều lí do làm chất xúc tác cho sự “liều lĩnh” này. Đó là sự cảm tính có cơ sở để nảy ra ý...</p>
                    <Link className={clsx(style.detail)} to='/'>Đọc thêm</Link>
                </div>

                <div className={clsx(style.item)}>
                    <Link to='/'>
                    <img src={img2} alt='img news'/>
                    </Link>
                    <h2>URBAS CORLURAY PACK</h2>
                    <p>Urbas Corluray Pack đem đến lựa chọn “làm mới mình” với sự kết hợp 5 gam màu mang sắc thu; phù hợp với những người trẻ năng động, mong muốn thể...</p>
                    <Link className={clsx(style.detail)} to='/'>Đọc thêm</Link>
                </div>

                <div className={clsx(style.item)}>
                    <Link to='/'>
                    <img src={img3} alt='img news'/>
                    </Link>
                    <h2>VINTAS SAIGON 1980s</h2>
                    <p>Với bộ 5 sản phẩm, Vintas Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét...</p>
                    <Link className={clsx(style.detail)} to='/'>Đọc thêm</Link>
                </div>

                <div className={clsx(style.item)}>
                    <Link to='/'>
                    <img src={img4} alt='img news'/>
                    </Link>
                    <h2>SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP</h2>
                    <p>Việc sử dụng dáng giày Vulcanized High Top của Ananas trong thiết kế và cảm hứng bắt nguồn từ linh vật Peeping - đại diện cho tinh thần xuyên...</p>
                    <Link className={clsx(style.detail)} to='/'>Đọc thêm</Link>
                </div>
            </div>

            <Link to='/' className={style.more}>MUỐN XEM NỮA</Link>
        </>
    )
}


export default News