import React from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/About/Wrapper";
import NewsList from "../components/Home/NewsList";
import { graphql } from 'gatsby';

const News = ({ data }) => {
    console.log(data)

  return (
    <Layout secondary>
      <Wrapper>
        <h1>Aktualności</h1>
        <NewsList news={data.allContentfulAktualnosci} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAktualnosci {
      nodes {
        image {
          url
          description
        }
        slug
        title
      }
    }
  }
`

export default News;
