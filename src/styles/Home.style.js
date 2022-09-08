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
    height: 175vh;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100vh;
    }
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 175vh;
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

  a {
    text-decoration: none;
    color: #fafafa;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
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
    transition: .2s;
  }

  @media screen and (min-width: 768px) {
    width: 27vw;
    height: 8rem;
    margin: 3rem 1rem;
  }

  @media screen and (min-width: 1080px){
    width: 29vw;
    height: 11rem;
  }

  @media screen and (min-width: 1440px){
    width: 22vw;
    height: 16rem;
    margin: 3rem 2rem;
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
