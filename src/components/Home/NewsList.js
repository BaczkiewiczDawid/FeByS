import React from "react";
import { Wrapper } from '../../styles/NewsList.style.js'
import SingleNews from "./SingleNews.js";
import dummyImage from "../../images/dummyImage.jpg";


const NewsList = () => {
  return (
    <Wrapper>
        <SingleNews image={dummyImage} alt="dummyImage" title="Tytuł 1" slug="article-1" />
        <SingleNews image={dummyImage} alt="dummyImage" title="Tytuł 2" slug="article-2" />
        <SingleNews image={dummyImage} alt="dummyImage" title="Tytuł 3" slug="article-3" />
    </Wrapper>
  );
};

export default NewsList;
