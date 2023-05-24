import React from "react"

export default function Product(props) {
    const products = props.props
    console.log(products)
    // use goods id
    let pathArr = window.location.pathname.split('/')
    let id = pathArr[2] - 1

    const productInfo = products[id]
    console.log(productInfo)

    return(
    <>
        <main className="main single-main" id="main">
            <div className="container s-i-t-container">
                <div className="sit-title-div">
                    <div className="col-md-2 s-i-t-div">
                        <h2 className="single-item-title">{productInfo.item}</h2>
                    </div>
                </div>

                <div className="item-div">
                    <div className="col-md-6 single-img-col">
                        <div className="single-img-div">
                            <img src={productInfo.picture} alt={productInfo.item} className="img-fluid product-image" />
                        </div>
                    </div>
                    <div className="col-md-6 desc-div">
                        <div className="single-desc-div">
                            <p className="single-desc-text">
                                {productInfo.descrip}
                            </p>
                        </div>
                        <p className="price-text">${productInfo.price}</p>
                        <button className="btn buy-button btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}