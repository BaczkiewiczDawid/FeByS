import React from 'react'
import Wrapper from './Wrapper';
import { Table } from '../../styles/Events/PriceList.style';

const PriceList = () => {
  return (
    <Wrapper>
      <h2>Cennik</h2>
      <Table>
        <th>Tytuł 1</th>
        <th>Bilet ulgowy</th>
        <th>Bilet normalny</th>
        <tr>
            <td>Basic</td>
            <td>23zł</td>
            <td>32zł</td>
        </tr>
        <tr>
            <td>Basic+</td>
            <td>23zł</td>
            <td>32zł</td>
        </tr>
        <tr>
            <td>Premium</td>
            <td>23zł</td>
            <td>32zł</td>
        </tr>
      </Table>
    </Wrapper>
  )
}

export default PriceList
