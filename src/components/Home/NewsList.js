import React from "react";
import { Wrapper } from "../../styles/NewsList.style.js";
import SingleNews from "./SingleNews.js";
import dummyImage from "../../images/dummyImage.jpg";

const NewsList = ({ news }) => {
  console.log(news.nodes[0].image.url);

  return (
    <Wrapper>
      {news.nodes.map((el) => (
        <SingleNews
          image={el.image.url}
          alt={el.title}
          title={el.title}
          slug={el.slug}
        />
      ))}
    </Wrapper>
  );
};

export default NewsList;
