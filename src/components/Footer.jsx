import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Get in Touch</h3>
                            <div className="contact-info">
                                <p><i className="fa fa-map-marker"></i>Sugandha Cinema hall, 2nd floor.1280, SS khaled road, kajirdhawri,chattogram</p>
                                <p><i className="fa fa-envelope"></i>kowshikiam@gmail.com</p>
                                <p><i className="fa fa-phone"></i>+8801843046324</p>
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
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Useful Links</h3>
                            <ul>
                                <li><a href="/#">About Us</a></li>
                                <li><a href="/#">Contact Us</a></li>
                                <li><a href="/#">Our Services</a></li>
                                <li><a href="/#">Privacy Policy</a></li>
                                <li><a href="/#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Quick Links</h3>
                            <ul>
                                <li><a href="/#">About Us</a></li>
                                <li><a href="/#">Contact Us</a></li>
                                <li><a href="/#">Our Services</a></li>
                                <li><a href="/#">Privacy Policy</a></li>
                                <li><a href="/#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Newsletter</h3>
                            <div className="newsletter">
                                <p>
                                   Subscribe for weekly emails with curated articles.
                                </p>
                                <form>
                                    <input className="form-control" type="email" placeholder="Your email here"/>
                                    <button className="btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Footer;


