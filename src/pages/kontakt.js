import React from 'react';
import Layout from '../components/Layout';
import Wrapper from '../components/About/Wrapper';
import ContactContainer from '../components/About/Contact';
import { Title } from '../styles/Contact/Contact.style';

const Contact = () => {
  return (
    <Layout secondary>
      <Wrapper>
        <Title>Kontakt</Title>
        <ContactContainer />
      </Wrapper>
    </Layout>
  )
}

export default Contact
