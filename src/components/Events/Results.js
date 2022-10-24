import React from "react";
import Wrapper from "./Wrapper";
import data from "../../data/data.json";

console.log(data.Arkusz1);

const Results = () => {
  return (
    <Wrapper>
      <h2>Wyniki</h2>
      <table>
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
            <td>{el.penalty}</td>
          </tr>
        ))}
      </table>
    </Wrapper>
  );
};

export default Results;
