import React from "react";
import {
  Container,
  Main,
  Details,
  Map,
} from "../../styles/Events/Location.style";
import Wrapper from "../../components/Events/Wrapper";

const Location = ({ street, city, postalCode, date }) => {
  return (
    <Wrapper>
      <Container>
        <h2>Lokalizacja</h2>
        <Main>
          <Details>
            <p>{street}</p>
            <p>{postalCode}, {city}</p>
            <p>{date}</p>
          </Details>
          <Map></Map>
        </Main>
      </Container>
    </Wrapper>
  );
};



export default Location;
