import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../Profile';

const Secured = ({ isLoggedIn }) => {
  return isLoggedIn ? <Profile /> : <Redirect to="/login" />;
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

Secured.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Secured);
