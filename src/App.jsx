import React from 'react';

import './vendor/css/style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './components/HomePage/Home';
import ContactUs from './components/contact/contactUs';
import Singlepage from './components/singlepage/singlepage';

function App() {
  return (
    <>
    {/* <Login /> */}
    {/* Route */}

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact-Us" element={<ContactUs />} />
        <Route exact path="/news-details/:type" element={<Singlepage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
