import React from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/About/Wrapper";
import SponsorsList from "../components/Sponsors/SponsorsList";
import { Title } from '../styles/Sponsors/Sponsors.style';

const Sponsors = () => {
  return (
    <Layout secondary>
      <Wrapper>
        <Title>Sponsorzy i Partnerzy</Title>
        <SponsorsList />
      </Wrapper>
    </Layout>
  );
};

export default Sponsors;
