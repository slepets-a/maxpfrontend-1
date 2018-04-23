import React from 'react';
import { Redirect } from 'react-router-dom';
import Profile from '../Profile';

const Secured = () => {
  return true ? <Profile /> : <Redirect to="/login" />;
};

export default Secured;
