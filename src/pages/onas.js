import React from "react";
import Layout from "../components/Layout";
import { Navigation, Wrapper, Overlay } from "../styles/EventDetails.style";
import backgroundImage from "../images/dummyImage.jpg";
import { Content, Container } from "../styles/About/About.style";
import useActiveLink from "../hooks/useActiveLink";
import { AboutLinks } from "../data/AboutLinks";
import Association from "../components/About/Association";
import Contact from "../components/About/Contact";
import Statute from '../components/About/Statute';
import Structure from '../components/About/Structure';

const About = () => {
  const { activeLink, handleActiveLink } = useActiveLink("o-stowarzyszeniu");

  return (
    <Layout>
      <Wrapper>
        <img src={backgroundImage} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <Container>
        <Navigation>
          <ul>
            {AboutLinks.map((link) => (
              <li onClick={() => handleActiveLink(link.path)}>{link.name}</li>
            ))}
          </ul>
        </Navigation>
        <Content>
          {activeLink === "o-stowarzyszeniu" && <Association />}
          {activeLink === "kontakt" && <Contact />}
          {activeLink === 'statut' && <Statute />}
          {activeLink === 'struktura' && <Structure />}
        </Content>
      </Container>
    </Layout>
  );
};

export default About;
