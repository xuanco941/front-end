import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Order from './Pages/Order'


const App = () => {
    return(
        <>
            <Header/> 



            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/search-order' element={<Order/>} />
            </Routes>

            <Footer/>
            
        </>
    )
}


export default App