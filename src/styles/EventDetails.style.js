import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 45vh;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 50vh;
    }
  }

  @media screen and (min-width: 1440px) {
    img {
      height: 45vh;
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 45vh;
  position: absolute;
  background-color: #2a2a2a;
  opacity: 0.75;
  z-index: -1;

  @media screen and (min-width: 768px) {
    height: 50vh;
  }

  @media screen and (min-width: 1440px) {
    height: 45vh;
  }
`;

export const Content = styled.section`
  margin-top: 8rem;
`;

export const Title = styled.h1`
  color: #fafafa;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 2.5rem;
    margin-top: 6rem;
  }
`;
