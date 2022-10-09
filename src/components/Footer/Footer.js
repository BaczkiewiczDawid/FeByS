import React from "react";
import {
  Wrapper,
  MainInformations,
  SocialsWrapper,
} from "../../styles/Footer.style";
import { Link } from "gatsby";
// import facebookIcon from "../../images/facebook.png";
// import youtubeIcon from "../../images/youtube.png";
// import instagramIcon from "../../images/instagram.png";

const Footer = () => {
  return (
    <Wrapper>
      <MainInformations>
        <p>Stowarzyszenie Sportowo-Edukacyjne „FeByS”</p>
        <p>44-100 Gliwice; ul. Zwycięstwa 1</p>
        <p>KRS 0000410740</p>
        <p>REGON 242851408</p>
        <p>NIP 969-16-05-175</p>
        <p>tel.: +48 604 728 577</p>
        <p>biuro@febys.org</p>
        <p>KONTO 34 2030 0045 1110 0000 0226 3570</p>
      </MainInformations>
      {/* <SocialsWrapper>
        <Link to="/">
          <img src={facebookIcon} alt="FeByS Facebook" />
        </Link>
        <Link to="/">
          <img src={youtubeIcon} alt="FeByS Youtube" />
        </Link>
        <Link to="/">
          <img src={instagramIcon} alt="FeByS Instagram" />
        </Link>
      </SocialsWrapper> */}
    </Wrapper>
  );
};

export default Footer;
