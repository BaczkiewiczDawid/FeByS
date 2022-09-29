import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Navigation, Logo, HamburgerWrapper } from "../../styles/Navbar.style";
import Hamburger from "hamburger-react";
import NavigationContent from "./NavigationContent";

const Navbar = ({ secondary }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState();

  const isBrowser = typeof window !== "undefined";

  if (isBrowser) {

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);

      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    });
  }

  return (
    <Navigation>
      <Logo src={logo} alt="FeByS" />
      <NavigationContent />
      {isBrowser && window.innerWidth < 768 && (
        <HamburgerWrapper>
          <Hamburger toggled={isOpen} toggle={setIsOpen} color={secondary === true ? "#2a2a2a" : "#fafafa"} />
        </HamburgerWrapper>
      )}
      {isOpen && width < 768 && (
        <NavigationContent isOpen={isOpen ? true : false} />
      )}
    </Navigation>
  );
};

export default Navbar;
