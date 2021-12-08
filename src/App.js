import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/index'
import Order from './Pages/Order'
import SignIn from './Pages/SignIn'
import Product from './Pages/Product/index'
import SignInAdmin from './Pages/SignInAdmin'
import './App.css'


const App = () => {
    return(
        <>
            <Header/> 



            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/search-order' element={<Order/>} />
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/admin' element={<SignInAdmin/>}/>
            </Routes>

            <Footer/>
            
        </>
    )
}


export default App