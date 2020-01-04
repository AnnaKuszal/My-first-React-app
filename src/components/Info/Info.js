import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoContents} from '../../data/dataStore';
import {listData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero 
      titleText={listData.title}
      imageSrc={listData.image}  
    />
    <h2>{infoContents.subtitle}</h2>
    <p>{infoContents.description}</p>
  </Container>
);

export default Info;