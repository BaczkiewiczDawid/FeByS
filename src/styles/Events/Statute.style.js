import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  margin: 5rem auto;
  text-align: center;
  color: #2a2a2a;

  @media screen and (min-width: 1080px) {
    width: 70vw;
  }
`;

export const StatuteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  width: 90vw;
  margin: 0 auto;

  h3 {
    margin-top: 3rem;
  }

  p {
    margin-top: 1rem;
  }

  @media screen and (min-width: 1080px) {
    width: 70vw;
  }
`;
