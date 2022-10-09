import React from "react";
import {
  Wrapper,
  Item,
  MainInfo,
  ItemsWrapper,
  Title
} from "../../styles/About/Structure.style";

const Structure = () => {
  return (
    <Wrapper>
      <Title>Zarząd</Title>
      <ItemsWrapper>
        <Item>
          <MainInfo>
            <h3>Prezes zarządu</h3>
            <p>Mirosław Lubszczyk</p>
          </MainInfo>
          <span>miroslaw.lubszczyk@febys.org</span>
        </Item>
        <Item>
          <MainInfo>
            <h3>Wiceprezes zarządu</h3>
            <p>Łukasz Gronkowski</p>
          </MainInfo>
          <span>lukasz.gronkowski@febys.org</span>
        </Item>
        <Item>
          <MainInfo>
            <h3>Członek zarządu</h3>
            <p>Grzegorz Janas</p>
          </MainInfo>
        </Item>
      </ItemsWrapper>
      <Title>Komisja Rewizyjna</Title>
      <ItemsWrapper>
        <Item>
          <MainInfo>
            <h3>Przewodniczący</h3>
            <p>Grzegorz Waśkowski</p>
          </MainInfo>
        </Item>
        <Item>
          <MainInfo>
            <h3>Wiceprzewodnicząca</h3>
            <p>Justyna Sokolińska</p>
          </MainInfo>
        </Item>
        <Item>
          <MainInfo>
            <h3>Sekretarz</h3>
            <p>Krzysztof Bartosiewicz</p>
          </MainInfo>
        </Item>
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Structure;
