import clsx from 'clsx'
import { Link } from 'react-router-dom'

import unname from './unnamed.png'
import img from './img_title.jpg'
import style from './product.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ENDPOINT+'/product')
        .then(data => setProducts(data.data.product))
    },[])

    // const hashPrice = (arr) => {
    //     const newArr = [];
    //     arr.forEach((e,i) => {
    //         if ((i+1)%3===0) {
    //             newArr.push('.');
    //             newArr.push(e);
    //         } 
    //         else{
    //             newArr.push(e);
    //         }
    //     });
    //     return newArr;
    // }

    useEffect(() => {
        const box_img = Array.from(document.querySelectorAll('.boximg'));

        box_img.forEach((elm) => {
            elm.addEventListener('mousemove', () => {
                elm.children[0].style.display = 'none';
                elm.children[1].style.display = 'block';
            })

            elm.addEventListener('mouseleave', () => {
                elm.children[0].style.display = 'block';
                elm.children[1].style.display = 'none';
            })
        })


        //remove event , fix ro ri memory
        return () => {
            box_img.forEach((elm) => {
                elm.removeEventListener('mousemove', () => {
                    elm.children[0].style.display = 'none';
                    elm.children[1].style.display = 'block';
                })
    
                elm.removeEventListener('mouseleave', () => {
                    elm.children[0].style.display = 'block';
                    elm.children[1].style.display = 'none';
                })
            })
        }

    }, [products])


    return (
            <div className={style.container}>
                <div className={clsx(style.box, style.box1)}>
                    <img className={style.img_title} src={img} alt='img title' />
                </div>
                <div className={clsx(style.box, style.box2)}>

                {
                    products.map((elm) => 
                    <div className={style.item} key={elm._id}>
                        <Link className={clsx(style.box_img, 'boximg')} to={`/product/${elm._id}`}>
                            <img className={clsx(style.img)} src={elm.image[0] || unname} alt='img product' />
                            <img className={clsx(style.img, style.hide)} src={elm.image[1] || elm.image[0] || unname} alt='img product' />
                            <span className={style.buynow}>Mua Ngay</span>
                        </Link>
                        <span className={style.status}>{elm.status && 'New Arrival'}</span>
                        <Link to={`/product/${elm._id}`}>
                            <h4>{elm.nameProduct}</h4>
                        </Link>
                        <p>{elm.category}</p>
                        <p className={style.price}>{ elm.price +' VNĐ'}</p>
                    </div>
                    )
                }

                </div>
            </div>
    )
}


export default Product