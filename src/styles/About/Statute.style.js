import styled from "styled-components";

export const Container = styled.section`
  width: 90vw;
  margin-top: 1rem;

  h2 {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 70vw;
  }

  @media screen and (min-width: 1440px) {
        width: 55vw;
    }
`;

export const Chapter = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  width: 85vw;
  margin-left: 50%;
  transform: translateX(-50%);

  h4 {
    margin-top: 1rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 70vw;
  }

  @media screen and (min-width: 1440px) {
        width: 55vw;
    }
`;

export const Header = styled.p`
  font-weight: 700;
  margin: 2rem 0;
`;
