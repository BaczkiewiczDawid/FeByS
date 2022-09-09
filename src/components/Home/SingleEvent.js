import React from "react";
import {
  SingleEventWrapper,
  ImageOverlay,
  EventDetails,
} from "../../styles/SingleEvent.style";
import dummyImage from "../../images/dummyImage.jpg";
import { Link } from "gatsby";

const SingleEvent = ({ title, image, alt, details, slug }) => {
  return (
    <Link to={`zawody/${slug}`}>
      <SingleEventWrapper>
        <img src={dummyImage} alt="dummyImage" />
        <ImageOverlay />
        <EventDetails>
          <h3>Zima maraton 23</h3>
          <p>Gliwice, 12.01.2024</p>
        </EventDetails>
      </SingleEventWrapper>
    </Link>
  );
};

export default SingleEvent;
