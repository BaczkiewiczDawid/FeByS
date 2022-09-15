import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Overlay, Wrapper, Content, Title } from "../styles/EventDetails.style";

const EventDetails = ({ data }) => {
  const { html } = data.contentfulWydarzenia;
  const event = data.contentfulWydarzenia;
  console.log(event);

  return (
    <Layout>
      <Wrapper>
        <img src={event.image.url} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <Title>{event.title}</Title>
      <Content>
        <p>test</p>
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
