import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="container">
              <Sidebar/>
              <div className="content">
                  <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                  </p>

              </div>
          </div>

      </div>
    );
  }
}

export default App;
