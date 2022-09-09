import React from "react";
import { EventsContainer } from "../../styles/EventsList.style.js";
import SingleEvent from "../Home/SingleEvent";
import dummyImage from "../../images/dummyImage.jpg";

const EventsList = () => {
  return (
    <EventsContainer>
      <SingleEvent
        title="Zima maraton 23"
        image={dummyImage}
        alt="dummyImage"
        details="Gliwice, ul. Zwycięstwa 23"
        slug="zima-maraton-23"
      />
      <SingleEvent
        title="Zima maraton 23"
        image={dummyImage}
        alt="dummyImage"
        details="Gliwice, ul. Zwycięstwa 23"
        slug="zima-maraton-23"
      />
      <SingleEvent
        title="Zima maraton 23"
        image={dummyImage}
        alt="dummyImage"
        details="Gliwice, ul. Zwycięstwa 23"
        slug="zima-maraton-23"
      />
      <SingleEvent
        title="Zima maraton 23"
        image={dummyImage}
        alt="dummyImage"
        details="Gliwice, ul. Zwycięstwa 23"
        slug="zima-maraton-23"
      />
    </EventsContainer>
  );
};

export default EventsList;
