import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Navigation, Logo, HamburgerWrapper } from "../../styles/Navbar.style";
import Hamburger from "hamburger-react";
import NavigationContent from "./NavigationContent";

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
      <NavigationContent />
      {width < 768 && (
        <HamburgerWrapper>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={isOpen ? "#fafafa" : "#2a2a2a"}
          />
        </HamburgerWrapper>
      )}
      {isOpen && width < 768 && <NavigationContent isOpen={isOpen ? true : false} />}
    </Navigation>
  );
};

export default Navbar;
