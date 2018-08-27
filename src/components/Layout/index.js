import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Sidebar />
            </div>
            <div className="col-12 col-md-9">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
