import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
//import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node.isRequired,
  }


  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
         
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/* 
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        */}
      </section>
    );
  }


}

export default Column;