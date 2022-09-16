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

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ul {
    width: 95vw;

    li {
      background-color: grey;
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      margin: 0.5rem 0;
      cursor: pointer;
      list-style: none;
    }
  }
`;
