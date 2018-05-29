import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Profile = ({ logout }) => (
  <div className="container text-align--right">
    <button className="profile__button" onClick={logout}>
      Logout
    </button>
    <div className="profile">
      <p className="profile__alert">
        Top secret!
      </p>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  },
});

export default connect(null, mapDispatchToProps)(Profile);
