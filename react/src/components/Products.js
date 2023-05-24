import React from "react"
import Card from "./Card"
import { Outlet, Link } from "react-router-dom"

export default function Products (props) {
    
    const arr = props.props
    
    const defProd = arr.filter(item => item.special === 'default').map(good => {
        return(
            <Link key={good.goods_id} className="all-prod-name" to={`/product/${good.goods_id}`}>
                <Card key={good.goods_id} image={good.picture} title={good.item} />
            </Link>
        ) 
    })

    const featProd = arr.filter(item => item.special === 'feat').map(good => {
        return(
            <Link key={good.goods_id} className="all-prod-name" to={`/product/${good.goods_id}`}>
                <Card key={good.goods_id} image={good.picture} title={good.item} />
            </Link>
        ) 
    })

    const discProd = arr.filter(item => item.special === 'discount').map(good => {
        return(
            <Link key={good.goods_id} className="all-prod-name" to={`/product/${good.goods_id}`}>
                <Card key={good.goods_id} image={good.picture} title={good.item} />
            </Link>
        ) 
    })
    
    return (
        <>
        <main className="main all-main" id="main">
            <div className="container all-products-container">
                <div className="all-products-header-div">
                    <h4 className="all-products-header">All Treats</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 item-group">
                    {featProd}
                    {discProd}
                    {defProd}
                </div>
            </div>
        </main>
    </>
    )
}