import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  
  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;
    
    return (
      <section className={styles.component}>
        <Container>

          <h3 className={styles.title}>SEARCHING RESULTS</h3>
            
          {cards.map(cardData => <Card key={cardData.id} {...cardData} />)}

        </Container>
      </section>
    );
  }

}

export default SearchResults;