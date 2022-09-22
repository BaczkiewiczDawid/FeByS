import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #2a2a2a;
  margin-left: 1rem;
  justify-content: center;
  align-items: flex-start;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95vw;
    margin: 0 auto;
  }
`;

export const Details = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  p {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 1080px) {
    p {
      font-size: 1.2rem;
      padding: 1rem 1rem;
    }
  }
`;

export const Map = styled.div`
  background-color: blue;
  width: 90vw;
  height: 15rem;
  margin: 3rem auto;

  @media screen and (min-width: 768px) {
    width: 40vw;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
    height: 25rem;
  }
`;
