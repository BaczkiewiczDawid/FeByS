import styled from "styled-components";

export const Map = styled.div`
  width: 90%;
  height: 30vh;
  background-color: blue;
  margin: 2rem auto;

  @media screen and (min-width: 768px) {
    margin-top: 4rem;
    height: 35vh;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 4rem;
    height: 45vh;
  }
`;

export const InformationsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 2rem;
    font-weight: 300;
  }

  h3 {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  div {
    margin: 2rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    div {
        margin: none;
        padding: 0 2.5rem;
    }
  }

  @media screen and (min-width: 1080px) {
    p {
        font-size: 2.7rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    div {
        padding: 1rem 4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    div {
        padding: 2rem 7rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 2rem;
    margin-top: 3rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.secondary ? "transparent" : "#5884F8")};
  border: none;
  border-radius: 5px;
  color: ${props => props.secondary ? '#2a2a2a' : '#fafafa'};
  padding: 1rem 1rem;
  width: 80%;
  cursor: pointer;
  margin-top: ${props => props.secondary ? '1rem' : '0'};

  &:hover {
    background-color: ${props => props.secondary ? 'none' : '#345FCE'};
    transition: .25s;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1080px) {
    width: 30%;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1rem;
    margin-top: 3rem;
  }
`;
