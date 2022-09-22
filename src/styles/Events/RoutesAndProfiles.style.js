import styled from "styled-components";

export const Map = styled.div`
  width: 90%;
  height: 30vh;
  background-color: blue;
  margin: 2rem auto;
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
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
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
`;
