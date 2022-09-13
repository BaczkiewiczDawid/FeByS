import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: #2a2a2a;
  min-height: 30vh;
  height: auto;
  width: 100vw;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
  }
`;

export const MainInformations = styled.div`
  display: flex;
  flex-direction: column;
  color: #fafafa;
  font-weight: 300;
  font-size: .8rem;
  padding: 1rem;

  p {
    padding: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 5rem;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;

  img {
    padding: 1rem;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 1rem;
    right: 5rem;
  }
`;