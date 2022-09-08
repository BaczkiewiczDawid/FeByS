import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  Navigation,
  Logo,
  HamburgerContent,
  HamburgerWrapper,
} from "../styles/Navbar.style";
import Hamburger from "hamburger-react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);

    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  });

  return (
    <Navigation>
      <Logo src={logo} alt="FeByS" />
      <HamburgerContent>
        <Link to="/">O nas</Link>
        <Link to="/">Aktualności</Link>
        <Link to="/">Zawody</Link>
        <Link to="/">Sponsorzy & Partnerzy</Link>
        <Link to="/">Kontakt</Link>
        <Link to="/">Newsletter</Link>
      </HamburgerContent>
      {width < 768 && (
        <HamburgerWrapper>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={isOpen ? "#fafafa" : "#2a2a2a"}
          />
        </HamburgerWrapper>
      )}
      {isOpen && width < 768 && (
        <HamburgerContent>
          <Link to="/">O nas</Link>
          <Link to="/">Aktualności</Link>
          <Link to="/">Zawody</Link>
          <Link to="/">Sponsorzy & Partnerzy</Link>
          <Link to="/">Kontakt</Link>
          <Link to="/">Newsletter</Link>
        </HamburgerContent>
      )}
    </Navigation>
  );
};

export default Navbar;
