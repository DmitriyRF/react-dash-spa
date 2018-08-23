import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="menu">
      <Link to="/"> EPAM System</Link>
      <br/>
      <Link to="/employees"> Employees</Link>
      <Link to="/projects"> Projects</Link>
    </div>
  </div>
);

export default Sidebar;
