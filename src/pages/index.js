import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  SingleNews,
  NewsList,
  StyledLink
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
    </Layout>
  );
};

export default Home;
