import React, { useContext, useEffect, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';

import { CurrentUserContext } from '../../context/current-user';
import { AuthButtonContext } from '../../context/authButton';
import { NavbarContext } from '../../context/navbar.context';

import './AuthButton.scss';

const AuthButton = () => {
  const history = useHistory();
  const { currentUser, signout, profile } = useContext(CurrentUserContext);

  const { closeNavbar } = useContext(NavbarContext);
  const { closeAuthButton, toggleAuthButton, stateAuth } = useContext(
    AuthButtonContext
  );

  const activeAuth = stateAuth.showAuthLinks ? 'activeAuth' : '';

  const spinArrow = stateAuth.showAuthLinks ? 'spin' : '';

  const toggleButtons = () => {
    toggleAuthButton();
    closeNavbar();
  };

  const signoutButton = () => {
    signout();
    closeNavbar();
    closeAuthButton();
    // change page if in profile page when sign out
    if (window.location.pathname === '/profile') {
      history.push('/');
    }
  };

  const profileButton = () => {
    closeAuthButton();
    closeNavbar();
  };

  // Close dropdown when clicking outside
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          closeAuthButton();
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="auth-container" ref={wrapperRef}>
      {!currentUser || !profile ? (
        <NavLink
          activeClassName="selected"
          className="auth-button"
          to="/signin"
        >
          Sign In
        </NavLink>
      ) : (
        <button type="button" className="auth-button" onClick={toggleButtons}>
          Hi
          <div className="profile-name">{profile.name}</div>
          <div className={`triangules ${spinArrow}`}>
            <GoTriangleDown />
          </div>
        </button>
      )}

      <div className={`auth-links ${activeAuth}`}>
        <NavLink onClick={profileButton} className="profile-link" to="/profile">
          Profile
        </NavLink>
        <button
          onClick={signoutButton}
          type="button"
          className="signout-button"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AuthButton;
