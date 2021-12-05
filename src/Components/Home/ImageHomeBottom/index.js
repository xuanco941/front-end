import { Link } from 'react-router-dom'
import img from './img.jpg'

const style = {
    width: 100+'vw',
    marginTop: 60
}
function ImageHome(){
    return(
        <>
            <Link to='/product-list'>
                <img style={style} alt='IMG Home' src={img}/>
            </Link>
        </>
    )
}


export default ImageHome