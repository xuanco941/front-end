import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './listproductadmin.module.css'
import getTokenAdmin from '../../Helper/getTokenAdmin';
import { useNavigate } from 'react-router-dom';

const ListProductAdmin = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        function getProduct() {
            axios.get(process.env.REACT_APP_API_ENDPOINT + '/product').then(response => {
                setProducts(response.data.product);
            });
        }

        getProduct();

        return () => {
            setProducts([]);
        }
    }, [])


    function handleButtonXoa(idProduct) {
        const [accessTokenAdmin] = getTokenAdmin();
        fetch(process.env.REACT_APP_API_ENDPOINT+'/product/delete-product',{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+accessTokenAdmin
            },
            body: JSON.stringify({
                idProduct
            })
        }).then(res => res.json()).then((data) => {
            if(data.status === 'error'){
                alert(data.message);
                localStorage.removeItem('accessTokenAdmin');
                navigate('/admin');
            }
            else{
                setProducts(prev => prev.filter(elm => elm._id !== idProduct));
            }
        }
        );
    }

    return <table className={style.table}>
        <tbody>
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Color</th>
                <th>Size</th>
                <th>Amount</th>
                <th>Sale</th>
                <th>Desciption</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </tbody>

        {products.length > 0 ? products.map(e => {

            return <tbody key={e._id}>
                <tr className={style.tr}>
                    <td>{e._id}</td>
                    <td className={style.box_img} >
                        {e.image.map((img, index_img) => {
                            return <img key={index_img} className={style.img} src={img} alt='img' />
                        })}
                    </td>
                    <td>{e.nameProduct}</td>
                    <td>{e.category}</td>
                    <td>{e.price}</td>
                    <td><div className={style.color} style={{ backgroundColor: e.color }}></div></td>
                    <td>{e.type[0].size}</td>
                    <td>{e.type[0].amount}</td>
                    <td>{e.sale}</td>
                    <td>{e.description}</td>
                    <td>{e.status === true ? 'Mới' : 'Bình thường'}</td>
                    <td><button onClick={ elm => handleButtonXoa(e._id)}>Xóa</button>
                    </td>
                </tr>
            </tbody>



        }) : <tbody>
            <tr className={style.tr}>
                <td>null</td>
                <td>null
                </td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null
                </td>
            </tr>
        </tbody>}



    </table>
}


export default ListProductAdmin;