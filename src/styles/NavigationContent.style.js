import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
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
    display: flex;
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
