import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarContext } from '../../context/navbar.context';

import './Navbar.scss';

const Navbar = () => {
  // toggle or close navbar in mobile
  const { toggleNavbar, closeNavbar, state } = useContext(NavbarContext);

  const active = state.showLinks ? 'active' : '';

  return (
    <header className="header">
      <div className="nav">
        <div className="nav-title">React Movie DB</div>
        <div className={`nav-links ${active}`}>
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            onClick={closeNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            activeClassName="selected"
            onClick={closeNavbar}
          >
            Movies
          </NavLink>
          <NavLink to="/tv" activeClassName="selected" onClick={closeNavbar}>
            tv shows
          </NavLink>
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <div className="btn-nav" onClick={toggleNavbar}>
        <span className={`hamburger ${active}`}>&nbsp;</span>
      </div>
    </header>
  );
};

export default Navbar;
