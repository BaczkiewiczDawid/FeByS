import styled from "styled-components";
import { Link } from "gatsby";

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
    min-height: 1200px;
    height: 175vh;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100vh;
      min-height: 600px;
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  min-height: 1200px;
  height: 175vh;
  position: absolute;
  background-color: #2a2a2a;
  opacity: 0.75;
  z-index: -1;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: 600px;
  }
`;

export const NewsWrapper = styled.section`
  text-align: center;
  color: #fafafa;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: #fafafa;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1440) {
    font-size: 1.5rem;
  }
`;

export const NewsList = styled.div`
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const SingleNews = styled.article`
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
    font-size: 2rem;
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

export const StyledLink = styled(Link)`
  @media screen and (min-width: 768px) {
    font-size: 0.85rem;
    margin-right: 68%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1rem;
    margin-right: 60%;
  }
`;

export const EventsWrapper = styled.section`
  margin-top: 15rem;
  color: #2a2a2a;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 14rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24rem;
  }
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SingleEvent = styled.article`
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
