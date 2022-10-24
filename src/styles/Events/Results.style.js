import styled from "styled-components";

export const TableWrapper = styled.div`
    overflow-x: auto;
    display: block;
    width: 90vw;
    margin-left: 50%;
    transform: translateX(-50%);

   @media screen and (min-width: 768px) {
    overflow-x: hidden;
    width: 80vw;
   }
`;

export const Table = styled.table`
  width: 90vw;
  border: 1px solid #2a2a2a;
  border-collapse: collapse;
  text-align: center;
  margin-top: 3rem;

  th {
    font-size: 1rem;
    border: 1px solid #2a2a2a;
    padding: 1rem;
  }

  tr {
    padding: 1rem;
    font-size: 0.8rem;
  }

  td {
    padding: 1rem;
    border: 1px solid #2a2a2a;
  }

  @media screen and (min-width: 768px) {
    margin-top: 5rem;
    width: 65vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
