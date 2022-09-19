import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: 'Inter', sans-serif;
  color: #2a2a2a;

  a {
    text-decoration: none;
    color: #2a2a2a;
    font-weight: 700;
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>404 :/</h1>
      <p>Strona której szukasz nie istnieje</p>
      <Link to="/">Wróć do strony głównej</Link>
    </Wrapper>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
