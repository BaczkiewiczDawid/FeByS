import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  SingleNews,
  NewsList,
  StyledLink,
  EventsWrapper,
  EventsContainer,
  SingleEvent,
  EventDetails,
  ImageOverlay,
} from "../styles/Home.style";
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
        <NewsList>
          <SingleNews>
            <img src={dummyImage} alt="dummyImage" />
            <h2>Tytuł</h2>
          </SingleNews>
          <SingleNews>
            <img src={dummyImage} alt="dummyImage" />
            <h2>Tytuł</h2>
          </SingleNews>
          <SingleNews>
            <img src={dummyImage} alt="dummyImage" />
            <h2>Tytuł</h2>
          </SingleNews>
        </NewsList>
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
