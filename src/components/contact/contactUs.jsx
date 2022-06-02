import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

const contactUs = () => {
    return (
        <>

            <Header></Header>

            {/* Breadcrumb Start  */}
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/#">Home</a></li>
                        <li className="breadcrumb-item active">Contact</li>
                    </ul>
                </div>
            </div>
            {/* Breadcrumb End  */}

            {/* Contact Start  */}
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div><button className="btn" type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info">
                                <h3>Get in Touch</h3>
                                <p>
                                    Want to get in touch? We'd love to hear from you.Here's how you can reach us...
                                </p>
                                <h4><i className="fa fa-map-marker"></i>Sugandha Cinema hall, 2nd floor.1280, SS khaled road, kajirdhawri,chattogram</h4>
                                <h4><i className="fa fa-envelope"></i>info@example.com</h4>
                                <h4><i className="fa fa-phone"></i>+8801843046324</h4>
                                <div className="social">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                    <a href="/#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact End  */}
            <Footer></Footer>
        </>

    )
}



export default contactUs