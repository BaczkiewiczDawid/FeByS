import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import { Wrapper, Blur } from "../styles/Home.style";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <img src={backgroundImage} alt="Kolarze w lesie" />
        <Blur />
      </Wrapper>
      <div>
        <h1></h1>
      </div>
    </Layout>
  );
};

export default Home;
