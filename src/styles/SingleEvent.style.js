import styled from 'styled-components';

export const SingleEventWrapper = styled.article`
  width: 90vw;
  height: 12rem;
  position: relative;
  margin: 2rem 0;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }

  @media screen and (min-width: 768px) {
    width: 27vw;
    height: 8rem;
    margin: 2rem 1rem;
  }

  @media screen and (min-width: 1080px) {
    width: 25vw;
    height: 11rem;
    margin: 2rem 1rem;
  }

  @media screen and (min-width: 1440px) {
    width: 22vw;
    height: 16rem;
    margin: 2rem 2rem;
  }
`;

export const EventDetails = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fafafa;
  text-align: start;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2a2a2a;
  width: 100%;
  height: 100%;
  opacity: 0.65;
`;