import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CompanySwitcher from './CompanySwitcher';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="menu">
          <CompanySwitcher />
          <br />
          <Link to="/employees"> Employees</Link>
          <Link to="/projects"> Projects</Link>
        </div>
      </div>
    );
  }
}
export default Sidebar;
