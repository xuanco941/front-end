import ImageHome from "../../Components/Home/ImageHome"
import HomeCollection from "../../Components/Home/HomeCollection"
import HomeBuy from "../../Components/Home/HomeBuy"
import News from "../../Components/Home/News"
import ImageHomeBottom from "../../Components/Home/ImageHomeBottom"
import './Home.css';

const Home = () => {
    return(
        <>
            <ImageHome/>
            <HomeCollection/>
            <HomeBuy/>
            <News/>
            <ImageHomeBottom/>
        </>
    )
}

export default Home