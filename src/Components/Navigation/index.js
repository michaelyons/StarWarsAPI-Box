import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = ({ favoritesData }) => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink exact to="/" className="nav-link">
          <img
            className="brand-image"
            src={require('../../images/starWarsLogoOneLine.png')}
            alt="star wars logo"
          />
        </NavLink>
        <nav className="nav-btns">
          <NavLink
            exact
            to="/people"
            className="nav-link"
            activeStyle={{
              color: '#feda4a'
            }}
          >
            People
          </NavLink>
          <NavLink
            exact
            to="/planets"
            className="nav-link"
            activeStyle={{
              color: '#feda4a'
            }}
          >
            Planets
          </NavLink>
          <NavLink
            exact
            to="/vehicles"
            className="nav-link"
            activeStyle={{
              color: '#feda4a'
            }}
          >
            Vehicles
          </NavLink>
          <NavLink
            exact
            to="/favorites"
            className="nav-link"
            activeStyle={{
              color: '#feda4a'
            }}
          >
            {`Favorites (${favoritesData.length})`}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

Navigation.propTypes = {
  favoritesData: PropTypes.array.isRequired
};

export default Navigation;
