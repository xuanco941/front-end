import { Link } from 'react-router-dom'
import img from './img/desktop.jpeg'
import style from './imagehome.module.css'

function ImageHome(){
    return(
        <>
            <Link to='/product-list'>
                <img className={style.img} alt='IMG Home' src={img}/>
            </Link>
        </>
    )
}


export default ImageHome