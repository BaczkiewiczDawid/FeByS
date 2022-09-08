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
    height: 200vh;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100vh;
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 200vh;
  position: absolute;
  background-color: #2a2a2a;
  opacity: 0.75;
  z-index: -1;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const NewsWrapper = styled.section`
  text-align: center;
  color: #fafafa;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsList = styled.div`
    margin-top: 1rem;
`;

export const SingleNews = styled.article`
  width: 85vw;
  height: 12rem;
  position: relative;
  margin: 3rem 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  h2 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
  }
`;
