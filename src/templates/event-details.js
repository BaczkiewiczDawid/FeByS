import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import {
  Overlay,
  Wrapper,
  Content,
  Title,
  Navigation,
} from "../styles/EventDetails.style";
import { NavigationLinks } from "../data/NavigationLinks";

const EventDetails = ({ data }) => {
  const { html } = data.contentfulWydarzenia;
  const event = data.contentfulWydarzenia;

  const [activeLink, setActiveLink] = useState("lokalizacja");

  const handleActiveLink = (path) => {
    setActiveLink(path)
  };

  console.log(activeLink)

  return (
    <Layout>
      <Wrapper>
        <img src={event.image.url} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <Title>{event.title}</Title>
      <Content>
        <Navigation>
          <ul>
            {NavigationLinks.map((link) => (
              <li onClick={() => handleActiveLink(link.path)}>{link.name}</li>
            ))}
          </ul>
        </Navigation>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query EventDetails($slug: String) {
    contentfulWydarzenia(slug: { eq: $slug }) {
      slug
      title
      image {
        url
      }
      description {
        description
      }
    }
  }
`;

export default EventDetails;
