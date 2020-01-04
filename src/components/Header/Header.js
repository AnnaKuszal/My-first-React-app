import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Header extends React.Component {

  static propTypes = {
    icon: PropTypes.node.isRequired,
  }

  static defaultProps = {
    icon: settings.navbar.icon,
  }


  render () {
    const {icon} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.navbar.links.home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.navbar.links.info}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{settings.navbar.links.faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;



