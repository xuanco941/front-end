import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './detailproduct.module.css'

const DetailProduct = () => {
    const [product, setProduct] = useState([]);
    const [imgFirst, setImgFirst] = useState('https://ananas.vn/wp-content/uploads/pro_A6T009_1.jpg');
    const [color, setColor] = useState({ backgroundColor: '#ffffff' });
    const [amount, setAmount] = useState([]);

    useEffect(() => {
        let arrUrl = window.location.href.split('/');
        const idProduct = arrUrl[arrUrl.length - 1];
        fetch(process.env.REACT_APP_API_ENDPOINT + `/product/${idProduct}`)
            .then(res => res.json()).then(data => {
                setProduct(data.product); setImgFirst(data.product.image[0]); setColor(data.product.color);
                for (let index = 1; index <= data.product.type[0].amount; index++) {
                    setAmount(prev => [...prev, index])
                }
            });
    }, []);

    const handleOnClickIMG = (e) => {
        setImgFirst(e.target.src);
    }
    const hashPrice = (text) => {
        let arr = text.split('').reverse();
        const newArr = [];
        arr.forEach((e, i) => {
            if ((i) % 3 === 0 && i !== 0) {
                newArr.push('.');
                newArr.push(e);
            }
            else {
                newArr.push(e);
            }
        });
        return newArr.reverse().join('');
    }

    return <div className={style.container}>
        <div className={style.box_img}>
            <div className={style.box_img_item_first}>
                <img className={style.style_img_first} src={imgFirst} alt='img_first' />
            </div>
            <div className={style.box_img_item_next}>

                {product.image ? product.image.map((e, index) => {
                    return <img key={index} onClick={handleOnClickIMG} className={clsx(style.style_img_next)} src={e} alt='img_first' />
                }) : <div>Invalid Image Product</div>}

            </div>
        </div>
        <div className={style.box_info}>
            <div className={clsx(style.info_item, style.nameProduct)}> {product.nameProduct}
            </div>
            <div className={clsx(style.info_item, style.status)}>
                <div className={style.idProduct}>Mã sản phẩm: <span className={style.textWeight}>{product._id}</span></div>
                <div className={style.idProduct}>Tình trạng: <span className={style.textWeight}>{product.status === true ? 'New Arrival' : ''}</span></div>
            </div>
            <div className={clsx(style.info_item, style.price)}>
                {product.price ? hashPrice(product.price.toString()) : '0'} <span className={style.vnd}>VNĐ</span>
            </div>
            <div className={clsx(style.info_item, style.separate)}>
            </div>
            <div className={clsx(style.info_item, style.description)}>
                {product.description}
            </div>
            <div className={clsx(style.info_item, style.separate)}>
            </div>
            <div className={clsx(style.info_item, style.color)}>

                <span className={style.item_color} style={{ color }}></span>

            </div>
            <div className={clsx(style.info_item, style.separate)}>
            </div>
            <div className={clsx(style.info_item, style.type)}>
                <div className={style.type_item}>
                    <span className={style.text_type}>SIZE</span>
                    <select className={style.select}>
                        {product.type && product.type.map((e, index) => {
                            return <option key={index}>
                                {e.size}
                            </option>
                        })}
                    </select>
                </div>
                <div className={style.type_item}>
                    <span className={style.text_type}>SỐ LƯỢNG</span>
                    <select className={style.select}>
                        {amount && amount.map((e, index) => {
                            return <option key={index}>
                                {e}
                            </option>
                        })}
                    </select>
                </div>
            </div>
            <div className={clsx(style.info_item, style.addMyCart)}>
                Thêm vào giỏ hàng
            </div>
            <Link to='/your-card' className={clsx(style.info_item, style.checkout)}>
                Thanh Toán
            </Link>
        </div>
    </div>
}

export default DetailProduct