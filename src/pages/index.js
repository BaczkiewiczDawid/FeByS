import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  SingleNews,
  NewsList,
} from "../styles/Home.style";
import dummyImage from "../images/dummyImage.jpg";
import { Link } from "gatsby";

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
        <Link to="/aktualnosci">Zobacz więcej</Link>
      </NewsWrapper>
    </Layout>
  );
};

export default Home;
