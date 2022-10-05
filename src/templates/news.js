import React from "react";
import Layout from "../components/Layout";
import dummyImage from "../images/dummyImage.jpg";
import { Image, Content } from "../styles/News/News.style";
import { graphql } from "gatsby";

const News = ({ data }) => {
  const { html } = data.contentfulAktualnosci;
  console.log(data);
  const title = data.contentfulAktualnosci.title;

  return (
    <Layout secondary={true}>
      <Image src={dummyImage} alt="" />
      <Content>
        <h1>{title}</h1>
        <p>{data.contentfulAktualnosci.content.content}</p>
      </Content>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query News($slug: String) {
    contentfulAktualnosci(slug: { eq: $slug }) {
      slug
      image {
        url
      }
      title
      content {
        content
      }
    }
  }
`;

export default News;
