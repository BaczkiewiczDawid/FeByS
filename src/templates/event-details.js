import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import {
  Overlay,
  Wrapper,
  Content,
  Title,
  Navigation,
} from "../styles/EventDetails.style";
import { NavigationLinks } from "../data/NavigationLinks";
import Location from "../components/Events/Location";
import Statute from "../components/Events/Statute";
import RoutesAndProfiles from "../components/Events/RoutesAndProfiles";
import PriceList from "../components/Events/PriceList";
import Photos from '../components/Events/Photos';

const EventDetails = ({ data }) => {
  const { html } = data.contentfulWydarzenia;
  const event = data.contentfulWydarzenia;

  const [activeLink, setActiveLink] = useState("lokalizacja");

  const handleActiveLink = (path) => {
    setActiveLink(path);
  };

  const { street, postalCode, city, date } = data.contentfulWydarzenia;

  console.log(street)

  return (
    <Layout>
      <Wrapper>
        <img src={event.image.url} alt="Kolarze w lesie" />
        <Overlay />
      </Wrapper>
      <Title>{event.title}</Title>
      <Content>
        <Navigation>
          <ul>
            {NavigationLinks.map((link) => (
              <li onClick={() => handleActiveLink(link.path)}>{link.name}</li>
            ))}
          </ul>
        </Navigation>
        {activeLink === "lokalizacja" && <Location street={street} city={city} postalCode={postalCode} date={date} />}
        {activeLink === "regulamin" && <Statute />}
        {activeLink === "trasy-i-profile" && <RoutesAndProfiles />}
        {activeLink === "cennik" && <PriceList />}
        {activeLink === 'zdjecia' && <Photos />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Layout>
  );
};

export const query = graphql`
  query EventDetails($slug: String) {
    contentfulWydarzenia(slug: { eq: $slug }) {
      slug
      title
      image {
        url
      }
      description {
        description
      }
    }

    contentfulWydarzenia(slug: { eq: $slug }) {
      slug
      postalCode
      street
      city
      date
    }
  }
`;

export default EventDetails;
