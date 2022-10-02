import React from "react";
import Layout from "../components/Layout";
import dummyImage from "../images/dummyImage.jpg";
import { Image, Content } from "../styles/News/News.style";

const News = () => {
  return (
    <Layout secondary={true}>
      <Image src={dummyImage} alt="" />
      <Content>
        <h1>Article title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum
          iure qui id, error nemo reiciendis, dolore placeat asperiores ab
          voluptas voluptatum est rerum velit magni dicta labore tempora!
          Officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Soluta ipsum iure qui id, error nemo reiciendis, dolore placeat
          asperiores ab voluptas voluptatum est rerum velit magni dicta labore
          tempora! Officiis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum
          iure qui id, error nemo reiciendis, dolore placeat asperiores ab
          voluptas voluptatum est rerum velit magni dicta labore tempora!
          Officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Soluta ipsum iure qui id, error nemo reiciendis, dolore placeat
          asperiores ab voluptas voluptatum est rerum velit magni dicta labore
          tempora! Officiis.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum
          iure qui id, error nemo reiciendis, dolore placeat asperiores ab
          voluptas voluptatum est rerum velit magni dicta labore tempora!
          Officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Soluta ipsum iure qui id, error nemo reiciendis, dolore placeat
          asperiores ab voluptas voluptatum est rerum velit magni dicta labore
          tempora! Officiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum
          iure qui id, error nemo reiciendis, dolore placeat asperiores ab
          voluptas voluptatum est rerum velit magni dicta labore tempora!
          Officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Soluta ipsum iure qui id, error nemo reiciendis, dolore placeat
          asperiores ab voluptas voluptatum est rerum velit magni dicta labore
          tempora! Officiis.
        </p>
      </Content>
    </Layout>
  );
};

export default News;
