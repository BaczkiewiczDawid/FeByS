import React from "react";
import Layout from "../components/Layout";
import { Navigation, Wrapper, Overlay } from "../styles/EventDetails.style";
import backgroundImage from "../images/dummyImage.jpg";
import { Content } from "../styles/About/About.style";
import useActiveLink from "../hooks/useActiveLink";
import { AboutLinks } from "../data/AboutLinks";

const About = () => {
  const { activeLink, handleActiveLink } = useActiveLink("o-stowarzyszeniu");

  return (
    <Layout>
      <Wrapper>
        <img src={backgroundImage} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <Content>
        <Navigation>
          <ul>
            {AboutLinks.map((link) => (
              <li onClick={() => handleActiveLink(link.path)}>{link.name}</li>
            ))}
          </ul>
        </Navigation>
      </Content>
    </Layout>
  );
};

export default About;
