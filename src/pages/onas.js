import React from "react";
import Layout from "../components/Layout";
import { Navigation, Wrapper, Overlay } from "../styles/EventDetails.style";
import backgroundImage from "../images/dummyImage.jpg";
import { Content, Container } from "../styles/About/About.style";
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
      <Container>
        <Navigation>
          <ul>
            {AboutLinks.map((link) => (
              <li onClick={() => handleActiveLink(link.path)}>{link.name}</li>
            ))}
          </ul>
        </Navigation>
        <Content>
          <p>
            Celem stowarzyszenia jest działalność sportowo – edukacyjna
            zachęcająca do zdrowego stylu życia rozumianego, jako połączenie
            aktywności sportowej z aktywnością intelektualną zgodną z
            biologicznymi możliwościami organizmu człowieka.
          </p>
          <p>
            Aktywność sportowa pozwala na zachowanie oraz poprawienie sprawność
            fizycznej, która w dużym stopniu wpływa na samopoczucie oraz
            sprawność intelektualną niezbędną do efektywnego realizowania celów
            zawodowych i osobistych. Harmonia ciała z umysłem jest podstawowym
            warunkiem osiągnięcia satysfakcji we wszystkich sferach życia
            człowieka oraz pozwala cieszyć się zdrowiem fizyczny i psychicznym
            przez cały okres życia.
          </p>
          <p>
            Cel ten będzie popularyzowany i realizowany wśród członków
            Stowarzyszenia oraz osób wyrażających chęć uczestnictwa w projektach
            realizowanych przez Stowarzyszenie.
          </p>
        </Content>
      </Container>
    </Layout>
  );
};

export default About;
