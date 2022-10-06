import React from "react";
import { Item, ItemsWrapper } from '../../styles/About/Contact.style';

const Contact = () => {
  return (
    <ItemsWrapper>
      <Item>
        <h2>Nazwa</h2>
        <p>Stowarzyszenie Sportowo-Edukacyjne „FeByS”</p>
      </Item>
      <Item>
        <h2>Adres</h2>
        <p>44-100 Gliwice / ul. Kościuszki 35</p>
      </Item>
      <Item>
        <h2>KRS</h2>
        <p>0000410740</p>
      </Item>
      <Item>
        <h2>Regon</h2>
        <p>242851408</p>
      </Item>
      <Item>
        <h2>NIP</h2>
        <p>969-16-05-175</p>
      </Item>
      <Item>
        <h2>Tel</h2>
        <p>32 724 09 86</p>
      </Item>
      <Item>
        <h2>E-mail</h2>
        <p>biuro@febys.org</p>
      </Item>
      <Item>
        <h2>Konto: Bank BGŻ S.A.</h2>
        <p>34 2030 0045 1110 0000 0226 3570</p>
      </Item>
    </ItemsWrapper>
  );
};

export default Contact;
