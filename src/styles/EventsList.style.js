import styled from 'styled-components';

export const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;