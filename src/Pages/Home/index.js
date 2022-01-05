import ImageHome from "../../Components/Home/ImageHome"
import HomeCollection from "../../Components/Home/HomeCollection"
import HomeBuy from "../../Components/Home/HomeBuy"
import News from "../../Components/Home/News"
import ImageHomeBottom from "../../Components/Home/ImageHomeBottom"
import Toast from "../../Components/Toast"
import './Home.css';

const Home = () => {
    return(
        <>
            <Toast notify='block' message={`Đăng nhập quyền quản trị bằng đường link ${process.env.REACT_APP_API_ENDPOINT}/admin
            (tài khoản và mật khẩu là: admin)`}/>
            <ImageHome/>
            <HomeCollection/>
            <HomeBuy/>
            <News/>
            <ImageHomeBottom/>
        </>
    )
}

export default Home