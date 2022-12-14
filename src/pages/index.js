import React from "react";
import Layout from "../components/Layout";
import backgroundImage from "../images/background.jpg";
import {
  Wrapper,
  Overlay,
  NewsWrapper,
  StyledLink,
  EventsWrapper,
  SponsorsWrapper
} from "../styles/Home.style";
import NewsList from "../components/Home/NewsList";
import EventsList from "../components/Home/EventsList";
import { graphql } from "gatsby";
import SponsorsList from "../components/Sponsors/SponsorsList";

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

const Home = ({ data }) => {
  const eventsList = data.allContentfulWydarzenia.nodes;

  return (
    <Layout>
      <Wrapper>
        <img src={backgroundImage} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <NewsWrapper>
        <h1>Aktualności</h1>
        <NewsList news={data.allContentfulAktualnosci} />
        <StyledLink to="/aktualnosci">Zobacz więcej</StyledLink>
      </NewsWrapper>
      <EventsWrapper>
        <h2>Zawody</h2>
        <EventsList data={eventsList} />
        <StyledLink to="/zawody">Zobacz więcej</StyledLink>
      </EventsWrapper>
      <SponsorsWrapper id="sponsors">
        <h2>Sponsorzy & Partnerzy</h2>
        <SponsorsList />
      </SponsorsWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulWydarzenia(limit: 3) {
      nodes {
        title
        description {
          description
        }
        image {
          url
        }
        slug
        date
      }
    }

    allContentfulAktualnosci(limit: 3) {
      nodes {
        title
        content {
          content
        }
        image {
          url
        }
        slug
      }
    }
  }
`;
export default Home;
