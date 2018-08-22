/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const header = () => (
  <header id="header">
    <Link to="/" className="header-brand">
      React Dash SPA
    </Link>
    <div className="right-wrapper">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              Help
            </Link>
          </li>
        </ul>
      </nav>
      <form className="form-inline header-form">
        <button className="btn" type="submit" />
        <input
          className="form-control"
          type="search"
          placeholder=""
          aria-label="Search"
        />
      </form>
    </div>
  </header>
);

export default header;
