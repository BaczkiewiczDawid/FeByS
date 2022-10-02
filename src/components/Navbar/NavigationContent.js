import React from "react";
import { Wrapper } from '../../styles/NavigationContent.style';
import { Link } from "gatsby";

const NavigationContent = ({ isOpen, secondary }) => {

  return (
    <Wrapper isOpen={isOpen} secondary={secondary}>
      <Link to="/o-nas">O nas</Link>
      <Link to="/aktualności">Aktualności</Link>
      <Link to="/zawody">Zawody</Link>
      <Link to="/sponsorzy-i-partnerzy">Sponsorzy & Partnerzy</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/newsletter">Newsletter</Link>
    </Wrapper>
  );
};

export default NavigationContent;
