import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Header() {
    return(
    <header className="header" id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h1 className="brand-name">BackEnd Bakery</h1>
                </div>
                <div className="col-md-6">
                    <nav className="top-nav" id="top">
                        <ul className="nav-list">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/products" className="nav-link">All Items</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
                        </ul>
                        <Outlet />
                    </nav>
                </div>
                <div className="col-md-3">
                    <div className="button-div">
                        <button className="btn btn-info cart-button">
                        <div className="cart-div">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <span className="cart-text">Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    )
}