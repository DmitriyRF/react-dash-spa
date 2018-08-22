import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="menu">
      <ul>
        <Link to="/epam-system"> EPAM System</Link>
      </ul>

      <ul>
        <Link to="/epam-system/employees"> Employees</Link>
        <Link to="/epam-system/projects"> Projects</Link>
      </ul>
    </div>
  </div>
);

export default Sidebar;
