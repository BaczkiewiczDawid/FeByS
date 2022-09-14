import React from "react";
import { EventsContainer } from "../../styles/EventsList.style.js";
import SingleEvent from "../Home/SingleEvent";

const EventsList = ({ data }) => {
  return (
    <EventsContainer>
      {data.map((event) => (
        <SingleEvent
          title={event.title}
          image={event.image.url}
          alt={event.title}
          details={event.date}
          slug={event.slug}
        />
      ))}
    </EventsContainer>
  );
};

export default EventsList;
