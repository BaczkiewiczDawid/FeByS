import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 10rem;
  height: auto;
`;

export const HamburgerWrapper = styled.div`
  z-index: 10;
`;

export const HamburgerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2a2a2a;
  color: #fafafa;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  a {
    color: #fafafa;
    text-decoration: none;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    background-color: transparent;
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    left: auto;

    a {
        color: #2a2a2a;
        margin: 0 1rem;
        text-align: center;
    }
  }
`;
