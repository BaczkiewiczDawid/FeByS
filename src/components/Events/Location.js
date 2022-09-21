import React from "react";
import {
  Container,
  Main,
  Details,
  Map,
} from "../../styles/Events/Location.style";
import Wrapper from "../../components/Events/Wrapper";

const Location = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Lokalizacja</h2>
        <Main>
          <Details>
            <p>ul. Zwycięstwa 24</p>
            <p>44-100, Gliwice</p>
            <p>12.01.2023 14:00</p>
          </Details>
          <Map></Map>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Location;
