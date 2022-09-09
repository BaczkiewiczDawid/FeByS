import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  StyledLink,
  EventsWrapper,
  EventsContainer,
  SingleEvent,
  EventDetails,
  ImageOverlay,
} from "../styles/Home.style";
import NewsList from "../components/Home/NewsList";
import dummyImage from "../images/dummyImage.jpg";

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
        <EventsContainer>
          <SingleEvent>
            <img src={dummyImage} alt="dummyImage" />
            <ImageOverlay />
            <EventDetails>
              <h3>Zima maraton 23</h3>
              <p>Gliwice, 12.01.2024</p>
            </EventDetails>
          </SingleEvent>
          <SingleEvent>
            <img src={dummyImage} alt="dummyImage" />
            <ImageOverlay />
            <EventDetails>
              <h3>Zima maraton 23</h3>
              <p>Gliwice, 12.01.2024</p>
            </EventDetails>
          </SingleEvent>
          <SingleEvent>
            <img src={dummyImage} alt="dummyImage" />
            <ImageOverlay />
            <EventDetails>
              <h3>Zima maraton 23</h3>
              <p>Gliwice, 12.01.2024</p>
            </EventDetails>
          </SingleEvent>
          <SingleEvent>
            <img src={dummyImage} alt="dummyImage" />
            <ImageOverlay />
            <EventDetails>
              <h3>Zima maraton 23</h3>
              <p>Gliwice, 12.01.2024</p>
            </EventDetails>
          </SingleEvent>
        </EventsContainer>
      </EventsWrapper>
    </Layout>
  );
};

export default Home;
