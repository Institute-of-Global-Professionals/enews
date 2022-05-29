import logo from './logo.svg';
import './vendor/css/style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/contact/contactUs';
// import Singlepage from './components/singlepage/singlepage';

function App() {
  return (
    <>
    {/* <Login /> */}
    {/* Route */}

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Contact-Us" element={<ContactUs />} />
        {/* <Route path="/news-details" element={<Singlepage />} /> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
