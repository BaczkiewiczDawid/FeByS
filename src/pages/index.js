import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  StyledLink,
  EventsWrapper,
  SponsorsWrapper,
  Footer,
  LogoWrapper,
  MainInformations,
  SocialsWrapper
} from "../styles/Home.style";
import NewsList from "../components/Home/NewsList";
import EventsList from "../components/Home/EventsList";
import logo from "../images/logo.png";
import facebookIcon from '../images/facebook.png';
import youtubeIcon from '../images/youtube.png';
import instagramIcon from '../images/instagram.png';
import { Link } from 'gatsby';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <img src={backgroundImage} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <NewsWrapper>
        <h1>Aktualności</h1>
        <NewsList />
        <StyledLink to="/aktualnosci">Zobacz więcej</StyledLink>
      </NewsWrapper>
      <EventsWrapper>
        <h2>Zawody</h2>
        <EventsList />
      </EventsWrapper>
      <SponsorsWrapper>
        <h2>Sponsorzy & Partnerzy</h2>
        <LogoWrapper>
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </LogoWrapper>
      </SponsorsWrapper>
      <Footer>
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
        <SocialsWrapper>
          <Link to="/">
            <img src={facebookIcon} alt="FeByS Facebook" />
          </Link>
          <Link to="/">
            <img src={youtubeIcon} alt="FeByS Youtube" />
          </Link>
          <Link to="/">
            <img src={instagramIcon} alt="FeByS Instagram" />
          </Link>
        </SocialsWrapper>
      </Footer>
    </Layout>
  );
};

export default Home;
