import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// import AuthReducer from './useReducer/auth/auth-reducer';
// import { SIGNOUT, REGISTER, LOGIN } from './useReducer/auth/auth-actions';

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [profile, setProfile] = useState('');

  // const [state, dispatch] = useReducer(AuthReducer, null);
  // console.log('state', state);

  const getProfile = async () => {
    const { data } = await axios.get('/api/v1/users/profile');
    setProfile(data);
  };

  const fetchCurrentUser = async () => {
    const { data } = await axios.get('/api/v1/users/currentuser');

    setCurrentUser(data.currentUser);
  };

  const getProfileAndUser = async () => {
    fetchCurrentUser();
    getProfile();
  };

  const signout = async () => {
    await axios.post('api/v1/users/signout');

    fetchCurrentUser();
  };

  useEffect(() => {
    fetchCurrentUser();
    getProfile();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        getProfileAndUser,
        signout,
        profile,
        getProfile,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
