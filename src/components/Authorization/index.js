import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Authorization = (WrappedComponent) => {
  const WithAuthorization = ({ isLoggedIn, location }) => {
    return (
      isLoggedIn ?
        <WrappedComponent {...this.props} /> :
        <Redirect to={
          {
            pathname: '/login',
            state:    { from: location },
          }
        }
        />
    );
  };

  const mapStateToProps = ({ auth: { isLoggedIn } }) => ({
    isLoggedIn,
  });

  return connect(mapStateToProps)(WithAuthorization);
};

export default Authorization;
