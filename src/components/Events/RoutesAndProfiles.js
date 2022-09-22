import React from "react";
import Wrapper from "../Events/Wrapper";
import { Map, InformationsWrapper, ButtonsWrapper, Button } from '../../styles/Events/RoutesAndProfiles.style';

const RoutesAndProfiles = () => {
  return (
    <Wrapper>
      <h2>Trasy i Profile</h2>
      <div>
        <Map></Map>
        <InformationsWrapper>
          <div>
            <p>42km</p>
            <h3>Długość trasy</h3>
          </div>
          <div>
            <p>1743m</p>
            <h3>Przewyższenia</h3>
          </div>
          <div>
            <p>5/5</p>
            <h3>Stopień trudności</h3>
          </div>
        </InformationsWrapper>
        <ButtonsWrapper>
          <Button>Pobierz plik GPX</Button>
          <Button secondary>Zobacz szczegóły trasy</Button>
        </ButtonsWrapper>
      </div>
    </Wrapper>
  );
};

export default RoutesAndProfiles;
