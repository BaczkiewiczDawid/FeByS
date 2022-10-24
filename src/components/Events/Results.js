import React from "react";
import Wrapper from "./Wrapper";
import data from "../../data/data.json";
import { Table, TableWrapper } from "../../styles/Events/Results.style";

const Results = () => {
  return (
    <Wrapper>
      <h2>Wyniki</h2>
      <TableWrapper>
        <Table>
          <th>Open</th>
          <th>Kat.</th>
          <th>Kat</th>
          <th>Imie i nazwisko</th>
          <th>Drużyna</th>
          <th>Czas</th>
          <th>Kara</th>
          {data.Arkusz1.map((el) => (
            <tr>
              <td>{el.open}</td>
              <td>{el.katNum}</td>
              <td>{el.kat}</td>
              <td>{el.name}</td>
              <td>{el.team}</td>
              <td>{el.time}</td>
              <td>{el.penalty ? el.penalty : "00:00:00"}</td>
            </tr>
          ))}
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default Results;
