
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Sidebar />
      <div className="content">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  </div>
); 

export default App;