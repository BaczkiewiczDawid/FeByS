import styled from "styled-components";

export const Image = styled.img`
  margin: 0 auto;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  height: auto;

  @media screen and (min-width: 768px) {
    object-fit: cover;
    height: 60vh;
  }

  @media screen and (min-width: 1080px) {
    height: 50vh;
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    width: 80vw;
    margin-top: 5rem;
  }
`;

export const Content = styled.section`
  width: 90vw;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;
  color: #2a2a2a;

  p {
    margin: 1.5rem 0;
    font-weight: 300;
    line-height: 1.4rem;
  }

  @media screen and (min-width: 1080px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 80vw;

    p {
      margin: 2.5rem 0;
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;
