import React from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/About/Wrapper";
import { graphql } from 'gatsby';
import EventsList from '../components/Home/EventsList';

const Events = ({ data }) => {
    console.log(data.allContentfulWydarzenia.nodes)

  return (
    <Layout secondary>
      <Wrapper>
        <EventsList data={data.allContentfulWydarzenia.nodes} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulWydarzenia(filter: {}) {
      nodes {
        image {
          url
        }
        title
        slug
        date
      }
    }
  }
`


export default Events;
