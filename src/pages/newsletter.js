import React, { useState } from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Events/Wrapper";
import { Container, Input, Button } from "../styles/Newsletter.style";

const Newsletter = () => {
  const [emailValue, setEmailValue] = useState("");

  const validateEmail = () => {
    if (
      emailValue.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    const isValidate = validateEmail();

    if (isValidate) {
      console.log("Newsletter submited!");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <Layout secondary>
      <Wrapper>
        <Container>
          <h1>Zapisz się do naszego newslettera!</h1>
          <Input
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="E-Mail..."
          />
          <Button onClick={handleSubmit}>Zapisz się!</Button>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Newsletter;
