import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/index'
import SignIn from './Pages/SignIn'
import Product from './Pages/Product/index'
import Admin from './Pages/Admin'
import PostProduct from './Pages/PostProduct'
import './App.css'

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/product' element={<Product />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/admin/post-product' element={<PostProduct />} />
            </Routes>

            <Footer />

        </>
    )
}


export default App