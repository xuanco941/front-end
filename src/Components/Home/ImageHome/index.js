import { Link } from 'react-router-dom'

import style from './imagehome.module.css'

function ImageHome(){
    return(
        <>
            <Link to='/product-list'>
                <img className={style.img} alt='IMG Home' src='https://ananas.vn/wp-content/uploads/Flannel_1920x1050_desktop.jpeg'/>
            </Link>
        </>
    )
}


export default ImageHome