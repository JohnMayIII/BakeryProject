import React from "react"
import{ Link } from "react-router-dom"

export default function Footer() {
    return(
    <footer className="footer" id="footer">
        <div className="container footer-container">
            <div className="row">
                <div className="col-md-4">
                    <p className="colophon text-center text-md-start">BACKEND BAKERY 2123&copy; ALL RIGHTS RESERVED</p>
                </div>
                <div className="col-md-4">
                    <p className="contact-sender text-center"><Link className="contact-send-link" to={`/contact`}>Contact Us</Link></p>
                </div>
                <div className="col-md-4">
                    <p className="top-sender text-center"><a href="#top" className="top-send-link">Back to Top</a></p>
                </div>
            </div>
        </div>
    </footer>

    )
}