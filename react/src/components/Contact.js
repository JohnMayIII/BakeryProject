import React from "react"

export default function Contact() {
    return(
    <main className="main contact-main" id="main">
        <div className="container contact-container">
            <div className="contact-header-div">
                <h2 className="contact-header">Contact Us</h2>
            </div>
            <div className="explain-div">
                <h3 className="explain-text">
                    We'd love to hear from you on what you think about BackEnd Bakery and our sweet, delicious, and gorgeous treats! Type the reason for contacting and your email in the respective boxes. We'll be sure to get back to you in 2-3 business days!
                </h3>
            </div>
            <div className="form-div">
                <form action="" className="contact-form">
                    <div className="input-div">
                        <input type="text" placeholder="What subject would you like to discuss/tell us?" className="subject-box" size="40"/>
                        <input type="email" size="40" placeholder="Email"/>
                    </div>
                    <div className="submit-div">
                        <input type="submit" className="contact-submit-btn" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </main>
    )
}