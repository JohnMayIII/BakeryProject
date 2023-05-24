import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"

import Home from './components/Home'
import Header from './components/Header'
import Footer from "./components/Footer"
import Products from './components/Products'
import Product from './components/Product'
import Contact from './components/Contact'

const App =()=> {
    const [bakeryArr, setBakeryArr] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/goods'

        axios.get(url)
            .then(res => {
                setBakeryArr(res.data)
            })
    },[])

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' index element={<Home props={bakeryArr} />}/>
                <Route path='/products' element={<Products props={bakeryArr} />}/>
                <Route path='/product/:id' element={<Product props={bakeryArr} />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App;