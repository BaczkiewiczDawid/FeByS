import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Overlay, Image } from '../styles/EventDetails.style';

const EventDetails = ({ data }) => {
  const { html } = data.contentfulWydarzenia;
  const event = data.contentfulWydarzenia;
console.log(event)

  return (
    <Layout>
      <Overlay>
        <Image src={event.image.url} alt="dummyAlt" />
      </Overlay>
      <p>test</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
