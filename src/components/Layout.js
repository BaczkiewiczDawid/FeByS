import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
