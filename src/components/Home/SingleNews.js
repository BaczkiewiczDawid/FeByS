import React from "react";
import { SingleNewsWrapper } from "../../styles/SingleNews.style.js";
import { Link } from "gatsby";

const SingleNews = ({ image, alt, title, slug }) => {
  return (
    <Link to={`aktualnosci/${slug}`}>
      <SingleNewsWrapper>
        <img src={image} alt={alt} />
        <h2>{title}</h2>
      </SingleNewsWrapper>
    </Link>
  );
};

export default SingleNews;
