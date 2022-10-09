import styled from "styled-components";

export const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    width: 80vw;
  }

  @media screen and (min-width: 1080px) {
    width: 60vw;
  }

  @media screen and (min-width: 1440px) {
    width: 40vw;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  h2 {
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  p {
    width: 60%;
    text-align: start;
  }

  p:nth-child(n + 1) {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    p {
        width: 50%;
    }
  }

  @media screen and (min-width: 1080px) {
    p {
        width: 40%;
    }
  }
`;
