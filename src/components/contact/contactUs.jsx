import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

const contactUs = () => {
    return (
        <>
            {/* Top Bar End */}
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tb-contact">
                                <p><i className="fas fa-envelope"></i>info@mail.com</p>
                                <p><i className="fas fa-phone-alt"></i>+012 345 6789</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tb-menu">
                                <a href="">About</a>
                                <a href="">Privacy</a>
                                <a href="">Terms</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Bar End */}

            {/* Brand Start */}

            <div className="brand">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="b-logo">
                                <a href="index.html">
                                    <img src="img/logo.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="b-ads">
                                <a href="https://htmlcodex.com">
                                    <img src="img/ads-1.jpg" alt="Ads" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="b-search">
                                <input type="text" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brand End */}

            {/* Nav Bar Start  */}
            <div className="nav-bar">
                <div className="container">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item">Sub Item 1</a>
                                        <a href="#" className="dropdown-item">Sub Item 2</a>
                                    </div>
                                </div>
                                <a href="single-page.html" className="nav-item nav-link">Single Page</a>
                                <a href="contact.html" className="nav-item nav-link active">Contact Us</a>
                            </div>
                            <div className="social ml-auto">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Nav Bar End  */}

            {/* Breadcrumb Start  */}
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                                </p>
                                <h4><i className="fa fa-map-marker"></i>123 News Street, NY, USA</h4>
                                <h4><i className="fa fa-envelope"></i>info@example.com</h4>
                                <h4><i className="fa fa-phone"></i>+123-456-7890</h4>
                                <div className="social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact End  */}
            <Header></Header>
            <Footer></Footer>
        </>

    )
}



export default contactUs