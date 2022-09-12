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

export const SponsorsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  margin-top: 5rem;

  h2 {
    font-size: 2rem;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 3rem;
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 40vw;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 90vw;

    img {
      width: 20vw;
    }
  } 

  @media screen and (min-width: 1080px) {
    width: 80vw;

    img {
      width: 15vw;
    }
  } 
`;
