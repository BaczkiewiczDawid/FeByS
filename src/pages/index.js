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
  SliderWrapper,
  LogoWrapper,
} from "../styles/Home.style";
import NewsList from "../components/Home/NewsList";
import EventsList from "../components/Home/EventsList";
import logo from "../images/logo.png";

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
    </Layout>
  );
};

export default Home;
