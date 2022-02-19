import React from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Home from "../pages/home";
// import Profile from "../pages/profile";
import '../styles/styles.scss';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Layout() {
  
  return (
    // <Router>
    <>
      <Header />
      <Home />
    </>
      // <Routes> */}
        // <Route exact path='/' element={<Home />} />
    //     {/* <Route path='/profile' element={<Profile />} /> */}
    //   {/* </Routes> */}
    //   {/* <Footer /> */}
    // {/* </Router> */}
  );
}

export default Layout;
