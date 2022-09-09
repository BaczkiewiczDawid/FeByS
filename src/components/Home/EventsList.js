import React from "react";
import { EventsContainer } from "../../styles/EventsList.style.js";
import SingleEvent from "../Home/SingleEvent";

const EventsList = () => {
  return (
    <EventsContainer>
      <SingleEvent />
      <SingleEvent />
      <SingleEvent />
    </EventsContainer>
  );
};

export default EventsList;
