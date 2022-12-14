import React from "react";
import { Wrapper } from '../../styles/NavigationContent.style';
import { Link } from "gatsby";

const NavigationContent = ({ isOpen, secondary }) => {
  return (
    <Wrapper isOpen={isOpen} secondary={secondary}>
      <Link to="/onas">O nas</Link>
      <Link to="/aktualnosci">Aktualności</Link>
      <Link to="/zawody">Zawody</Link>
      <Link to="/sponsorzy">Sponsorzy & Partnerzy</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/newsletter">Newsletter</Link>
    </Wrapper>
  );
};

export default NavigationContent;
