
import { useEffect, useState } from 'react'
import style from './formaddproduct.module.css'
import icon_post_img from './img/icon_post_camera.jpg'

const FormAddProduct = () => {
    const [image, setImage] = useState([]);
    const [nameProduct,setNameProduct] = useState('');
    const [price,setPrice] = useState(0);
    const [sale,setSale] = useState(0);
    const [description,setDescription] = useState('');


    const handleOnChangeInputImg = (e) => {
        const files = [...e.target.files];
        files.forEach(element => {
            element.preview = URL.createObjectURL(element);
        });

        setImage(prev => [...prev,...files]);
    }

    useEffect(() => {
        // clean up image
        return () => {
            image.forEach(e => {
                URL.revokeObjectURL(e.preview);
            })
        }
    }, [image])

    

    console.log(image,nameProduct,price,sale,description);
    

    return (
        <>
            <div className={style.container} >


                <div className={style.formAddProduct}>
                    <div className={style.box_img}>
                        <div className={style.input_img}>
                            <input onChange={handleOnChangeInputImg} id='id_img' name='image' placeholder="image" type='file' multiple />
                            <label className={style.label_input_img} htmlFor='id_img'>
                                <img src={icon_post_img} alt='icon post img'/>
                                <div className={style.button_select_img}>Chọn ảnh</div>
                            </label>
                        </div>
                        <div className={style.preview_img}>
                            {image.map((e,index) => {return <img key={index} src={e.preview} alt='img preview'/>})}
                        </div>
                    </div>

                    <div className={style.box_input}>

                        <div className={style.box_text}>
                            <input onChange={e => setNameProduct(e.target.value)} name='nameProduct' placeholder="nameProduct" type='text' />
                            <input name='category' placeholder="category" type='radio' />
                            <input onChange={e => setPrice(e.target.value)} name='price' placeholder="price" type='number' />
                            <input onChange={e => setSale(e.target.value)} name='sale' placeholder="sale" type='number' />
                            <input onChange={e => setDescription(e.target.value)} name='description' placeholder="description" type='text' />

                            <input name='categoryColor' type='radio' />
                            <input name='categoryColor' type='radio' />

                        </div>

                        <div className={style.box_type}>
                            <select name='size' placeholder="size" type='number'>
                                <option>

                                </option>
                            </select>
                            <input name='amount' placeholder="amount" type='number' />
                        </div>

                        <button> Send</button>

                    </div>


                </div>

            </div>
        </>
    )
}

export default FormAddProduct