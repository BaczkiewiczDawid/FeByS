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
} from "../styles/Home.style";
import NewsList from "../components/Home/NewsList";
import EventsList from "../components/Home/EventsList";
import logo from "../images/logo.png";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
        <Slider {...settings}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </Slider>
      </SponsorsWrapper>
    </Layout>
  );
};

export default Home;
