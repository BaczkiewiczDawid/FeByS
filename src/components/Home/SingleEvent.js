import React from "react";
import {
  SingleEventWrapper,
  ImageOverlay,
  EventDetails,
} from "../../styles/SingleEvent.style";
import { Link } from "gatsby";
import defaultImage from "../../images/dummyImage.jpg";

const SingleEvent = ({ title, image = defaultImage, alt, details, slug }) => {
  return (
    <Link to={`zawody/${slug}`}>
      <SingleEventWrapper>
        <img src={image} alt={alt} />
        <ImageOverlay />
        <EventDetails>
          <h3>{title}</h3>
          <p>{details}</p>
        </EventDetails>
      </SingleEventWrapper>
    </Link>
  );
};

export default SingleEvent;
