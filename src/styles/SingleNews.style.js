import styled from 'styled-components';

export const SingleNewsWrapper = styled.article`
  width: 85vw;
  height: 12rem;
  position: relative;
  margin: 3rem 0;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  h2 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    text-align: start;
    color: #fafafa;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }

  @media screen and (min-width: 768px) {
    width: 27vw;
    height: 8rem;
    margin: 3rem 1rem;
  }

  @media screen and (min-width: 1080px) {
    width: 25vw;
    height: 11rem;
    margin: 3rem 1rem;
  }

  @media screen and (min-width: 1440px) {
    width: 22vw;
    height: 16rem;
    margin: 5rem 2rem;
  }
`;