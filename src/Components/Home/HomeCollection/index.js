import { Link } from 'react-router-dom'

import style from './homecollection.module.css'


function HomeCollection() {
    return (
        <>
            <div className={style.row}>
                <div className={style.box}>
                    <Link className={style.Link} to='/'>
                        <img alt='img collection' className={style.item} src='https://ananas.vn/wp-content/uploads/banner-phu%CC%A3_2m-600x320.jpg' />
                    </Link>
                    <Link className={style.Link} to='/'>
                        <h1>ALL BLACK IN BLACK</h1>
                    </Link>
                    <p>Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán</p>
                </div>

                <div className={style.box}>
                    <Link className={style.Link} to='/'>
                        <img alt='img collection' className={style.item} src='https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg' />
                    </Link>
                    <Link className={style.Link} to='/'><h1>OUTLET SALE</h1></Link>
                    
                    <p>Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.</p>
                </div>


            </div>
        </>
    )
}


export default HomeCollection