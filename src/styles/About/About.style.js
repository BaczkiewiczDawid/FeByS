import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  margin: 2rem auto;
  width: 90vw;

  p:nth-child(n + 1) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    margin: 5rem auto;
    width: 80vw;
  }

  @media screen and (min-width: 1080px) {
    width: 65vw;
  }
`;

export const Container = styled.div`
  margin-top: 15rem;

  @media screen and (min-width: 1440px) {
    margin-top: 20rem;
  }
`;
