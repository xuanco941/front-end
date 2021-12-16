import { Route, Routes, useNavigate } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home/index'
import SignIn from './Pages/SignIn'
import Product from './Pages/Product/index'
import Admin from './Pages/Admin'
import PostProduct from './Pages/PostProduct'
import AdminProduct from './Pages/AdminProduct'
import DetailProduct from './Pages/DetailProduct'
import './App.css'

const App = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:id' element={<DetailProduct/>}/>
                <Route path='/admin' element={localStorage.getItem('accessTokenAdmin') ? <PostProduct /> : <Admin/>} />
                <Route path='/admin/post-product' element={
                    localStorage.getItem('accessTokenAdmin') ? <PostProduct /> : <Admin/>} />
                <Route path='/admin/admin-product' element={localStorage.getItem('accessTokenAdmin') ? <AdminProduct /> : <Admin/>}/>

            </Routes>

            <Footer />

        </>
    )
}


export default App