import React, { useState } from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Events/Wrapper";
import { Container, Input, Button } from "../styles/Newsletter.style";

const Newsletter = () => {
  const handleSubmit = () => {};

  return (
    <Layout secondary>
      <Wrapper>
        <Container>
          <h1>Zapisz się do naszego newslettera!</h1>
          <Input placeholder="E-Mail..." />
          <Button onClick={handleSubmit}>Zapisz się!</Button>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Newsletter;
