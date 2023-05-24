import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Home(props) {
    const arr = props.props

    const featured = arr.filter(item => item.special === 'feat')
    const discount = arr.filter(item => item.special === 'discount')

    const featProd = featured.map(item => { 
        return (
            <Link key={item.goods_id} to={`/product/${item.goods_id}`}>
                <img key={item.goods_id} src={item.picture} alt={item.item} className="img-fluid feat-img"/>
            </Link>
        )
    })

    const discountProd = discount.map(item => {
        return (
            <Link key={item.goods_id} to={`/product/${item.goods_id}`}>
                <img key={item.goods_id} src={item.picture} alt={item.item} className="img-fluid discount-img"/>
            </Link>
        ) 
    })

    return(
        <>
            <main className="main home-main" id="main">
                <div className="container">
                    <div className="intro-div">
                        <h2 className="intro-header">Welcome to BackEnd Bakery!</h2>
                        <p className="intro-text">The behind-the-scenes might be messy, but you always get the quality goodness that you paid for. We've got a variety of baked treats and bread to choose from.</p>
                        <button className="btn all-items-btn"><Link to="/products" className="all-items-link">BackEnd Baked Goods</Link></button>
                        <Outlet />
                    </div>
                    <div className="featured-div">
                        <h2 className="featured-header">Featured Goodies</h2>
                        <div className="featured-img-div">
                            {featProd}
                        </div>
                    </div>
                    <div className="discount-div">
                        <h2 className="sale-header">Discount Goodies</h2>
                        <div className="discount-img-div">
                            {discountProd}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}