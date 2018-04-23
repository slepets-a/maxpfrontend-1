import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header className="Header">
    <ul className="Header__navigation">
      <li>
        <Link to="/" className="Header__link">Main</Link>
      </li>
      <li>
        <Link to="/news" className="Header__link">News</Link>
        <Link to="/profile" className="Header__link">Profile</Link>
      </li>
    </ul>
  </header>
);

export default Header;
