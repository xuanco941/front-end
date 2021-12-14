import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './detailproduct.module.css'

const DetailProduct = () => {

    const [imgFirst, setImgFirst] = useState('https://ananas.vn/wp-content/uploads/pro_A6T009_1.jpg');
    
    const handleOnClickIMG = (e) => {
        setImgFirst(e.target.src);
    }

    return <div className={style.container}>
        <div className={style.box_img}>
            <div className={style.box_img_item_first}>
                <img className={style.style_img_first} src={imgFirst} alt='img_first'/>
            </div>
            <div className={style.box_img_item_next}>
                <img onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src='https://ananas.vn/wp-content/uploads/pro_A6T009_2.jpg' alt='img_first'/>
                <img onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src='https://ananas.vn/wp-content/uploads/pro_A6T009_2.jpg' alt='img_first'/>
                <img onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src='https://ananas.vn/wp-content/uploads/pro_A6T009_2.jpg' alt='img_first'/>
                <img onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src='https://ananas.vn/wp-content/uploads/pro_A6T009_3.jpg' alt='img_first'/>
                <img onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src='https://ananas.vn/wp-content/uploads/pro_A6T009_3.jpg' alt='img_first'/>

            </div>
        </div>
        <div className={style.box_info}>
            <div className={clsx(style.info_item,style.nameProduct)}> TRACK 6 CLASS E - LOW TOP - CRAFTSMAN BLUE
            </div>
            <div className={clsx(style.info_item,style.status)}>
                <div className={style.idProduct}>Mã sản phẩm: <span className={style.textWeight}>A6T009</span></div>
                <div className={style.idProduct}>Tình trạng: <span className={style.textWeight}>New Arrival</span></div>
            </div>
            <div className={clsx(style.info_item,style.price)}>
            1.190.000 <span className={style.vnd}>VNĐ</span>
            </div>
            <div className={clsx(style.info_item,style.separate)}>
            </div>
            <div className={clsx(style.info_item,style.description)}>
            Track 6 Class E (Essential, Enthusiasm) là bộ sản phẩm mang trên mình những yếu tố cơ bản trong cuộc sống thường ngày. Được sử dụng những chất liệu thường có trên những đôi giày cao cấp với da Nappa nhẵn bóng, lưới mesh nhỏ mịn kết hợp Suede (da lộn) phủ màu tạo nên tổng thể vừa tinh tế, với màu sắc nhã nhặn. Điểm nhấn thú vị trên chi tiết màu “Craftsman Blue” thể hiện một phần yếu tố cần thiết, đại diện cho niềm đam mê chế tác của con người với những thú vui gắn cùng thiên nhiên. Track 6 Class E - Craftsman Blue xứng đáng là một must-have item đối với những ai yêu thích sáng tạo và mong muốn thể hiện cá tính độc lập.
            </div>
            <div className={clsx(style.info_item,style.separate)}>
            </div>
            <div className={clsx(style.info_item,style.color)}>
                <span className={style.item_color} style={{
                    backgroundColor: '#000000'
                }}></span>
                <span className={style.item_color} style={{
                    backgroundColor: '#ffffff'
                }}></span>
            </div>
            <div className={clsx(style.info_item,style.separate)}>
            </div>
            <div className={clsx(style.info_item,style.type)}>
                <div className={style.type_item}>
                    <span className={style.text_type}>SIZE</span>
                    <select className={style.select}>
                        <option>
                            123
                        </option>
                    </select>
                </div>
                <div className={style.type_item}>
                    <span className={style.text_type}>SỐ LƯỢNG</span>
                <select className={style.select}>
                        <option>
                            123
                        </option>
                    </select>
                </div>
            </div>
            <div className={clsx(style.info_item,style.addMyCart)}>
                Thêm vào giỏ hàng
            </div>
            <Link to='/your-card' className={clsx(style.info_item,style.checkout)}>
                Thanh Toán
            </Link>
        </div>
    </div>
}

export default DetailProduct