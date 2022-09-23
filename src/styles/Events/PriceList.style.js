import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid #2a2a2a;
  border-collapse: collapse;
  width: 90%;
  margin: 3rem auto;

  th,
  td {
    border: 1px solid #2a2a2a;
    padding: 1rem 2rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    margin: 3rem 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 70%;
    margin: 5rem 2rem;
  }
`;
