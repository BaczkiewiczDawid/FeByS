import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
