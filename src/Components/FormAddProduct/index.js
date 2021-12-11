
import { useEffect, useState } from 'react'
import style from './formaddproduct.module.css'
import icon_post_img from './img/icon_post_camera.jpg'

const categorys = [
    {
        id: 1,
        name: 'Giầy'
    },
    {
        id: 2,
        name: 'Áo'
    },
    {
        id: 3,
        name: 'Phụ kiện khác'
    }
]

const allSize = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];
const FormAddProduct = () => {
    const [image, setImage] = useState([]);
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState(0);
    const [sale, setSale] = useState(0);
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [checkedCategory, setCheckedCategory] = useState('Giầy');

    const [size, setSize] = useState('36');
    const [amount, setAmount] = useState(1);


    const handleOnChangeInputImg = (e) => {
        const files = [...e.target.files];
        files.forEach(element => {
            element.preview = URL.createObjectURL(element);
        });

        setImage(prev => [...prev, ...files]);
    }

    useEffect(() => {
        // clean up image
        return () => {
            image.forEach(e => {
                URL.revokeObjectURL(e.preview);
            })
        }
    }, [image])


    const formSubmit = (e) => {

        if (nameProduct && description && price !== 0 && image.length > 0) {
            const data = {
                nameProduct: nameProduct,
                price: price,
                sale: sale,
                color: color,
                description: description,
                category: checkedCategory,
                type: {
                    size: size,
                    amount: amount
                },
                image: image
            };

            console.log(data);

            fetch(process.env.REACT_APP_API_ENDPOINT + '/product/post-product', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(dataRes => console.log(dataRes))
        }
        else{
            alert('Điền thiếu thông tin sản phẩm, vui lòng điền đủ');
        }



        e.preventDefault();
    }

    return (
        <>
            <div className={style.container} >


                <form onSubmit={e => formSubmit(e)} className={style.formAddProduct} method='POST'>
                    <div className={style.box_img}>
                        <div className={style.input_img}>
                            <input onChange={handleOnChangeInputImg} id='id_img' name='image' placeholder="image" type='file' multiple />
                            <label className={style.label_input_img} htmlFor='id_img'>
                                <img src={icon_post_img} alt='icon post img' />
                                <div className={style.button_select_img}>Chọn ảnh</div>
                            </label>
                        </div>
                        <div className={style.preview_img}>
                            {image.map((e, index) => { return <img key={index} src={e.preview} alt='img preview' /> })}
                        </div>
                    </div>

                    <div className={style.box_input}>

                        <div className={style.box_text}>
                            <span className={style.title_input}>Tên sản phẩm</span>
                            <input value={nameProduct} autoComplete='off' id='nameProduct' onChange={e => setNameProduct(e.target.value)} name='nameProduct' placeholder="nameProduct" type='text' />

                            <span className={style.title_input}>Phân loại</span>
                            <div className={style.box_radio}>

                                {categorys.map(category => {
                                    return <span key={category.id}>
                                        <input checked={checkedCategory === category.name} onChange={e => setCheckedCategory(category.name)} placeholder={category.name} type='radio' id={`id${category.id}`} />
                                        <label htmlFor={`id${category.id}`}>{category.name}</label>
                                    </span>
                                })}
                            </div>


                            <span className={style.title_input}>Giá (VNĐ)</span>
                            <input value={price} onChange={e => setPrice(e.target.value)} name='price' placeholder="price" type='number' />
                            <span className={style.title_input}>Giảm giá (%)</span>
                            <input value={sale} onChange={e => setSale(e.target.value)} name='sale' min='0' max='100' placeholder="sale" type='number' />
                            <span className={style.title_input}>Mô tả </span>
                            <input value={description} onChange={e => setDescription(e.target.value)} name='description' placeholder="description" type='text' />


                            <span className={style.title_input}>Màu sắc</span>
                            <input onChange={e => setColor(e.target.value)} value={color} type='color' />

                        </div>

                        <div className={style.box_type}>
                            <span className={style.title_input}>Kích cỡ & Số lượng</span>
                            <select onChange={e => { setSize(e.target.value) }} defaultValue={size} required>
                                {allSize.map((e, index) => {
                                    return <option key={index} disabled={e === size} value={e}>{e}</option>
                                })}
                            </select>
                            <input onChange={e => setAmount(e.target.value)} value={amount} className={style.input_amount} min='1' autoComplete='off' name='amount' placeholder="amount" type='number' />
                        </div>

                        <button type='submit' className={style.addProduct}>Thêm sản phẩm</button>

                    </div>


                </form>

            </div>
        </>
    )
}

export default FormAddProduct