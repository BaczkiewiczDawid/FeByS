import styled from 'styled-components';

export const LogoWrapper = styled.div`
  margin-top: 3rem;
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 40vw;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 90vw;

    img {
      width: 20vw;
    }
  } 

  @media screen and (min-width: 1080px) {
    width: 80vw;

    img {
      width: 15vw;
    }
  } 
`;
