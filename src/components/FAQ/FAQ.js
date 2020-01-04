import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqContents} from '../../data/dataStore';
import {listData} from '../../data/dataStore';

const FAQ = () => (
  
  <Container>
    <Hero 
      titleText={listData.title}
      imageSrc={listData.image}  
    />
    <h2>{faqContents.subtitle}</h2>
    <p>{faqContents.description}</p>
  </Container>
);

export default FAQ;