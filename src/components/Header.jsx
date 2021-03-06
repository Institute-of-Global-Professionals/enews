import React from 'react';
import logo from '../vendor/img/logo.png';
import ads from '../vendor/img/ads-1.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <>
    <div className="top-bar">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="tb-contact">
                    <p><i className="fas fa-envelope"></i>info@eduigp.com</p>
                    <p><i className="fas fa-phone-alt"></i>+8801843046324</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="tb-menu">
                    <a href="/#">About</a>
                    <a href="/#">Privacy</a>
                    <a href="/#">Terms</a>
                    <a href="/#">Contact</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="brand">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
                <div className="b-logo">
                    <a href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-md-4">
                <div className="b-ads">
                    <a href="/">
                        <img src={ads} alt="Ads"/>
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="b-search">
                    <input type="text" placeholder="Search"/>
                    <button><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="nav-bar">
    <div className="container">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="/" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Sub Item 1</a>
                                    <a href="#" className="dropdown-item">Sub Item 2</a>
                                </div>
                            </div> */}
                    {/* <a href="/news-details" className="nav-item nav-link">Single Page</a> */}
                    <NavLink to="/Contact-Us" className="nav-item nav-link">Contact Us</NavLink>
                </div>
                <div className="social ml-auto">
                    <a href="/#"><i className="fab fa-twitter"></i></a>
                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="/#"><i className="fab fa-instagram"></i></a>
                    <a href="/#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </nav>
    </div>
</div>
</>
  );
}

export default Header;