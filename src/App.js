import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main id="main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-3">
                  <Sidebar />
                </div>
                <div className="col-12 col-md-9">
                  <Switch>
                    {/* Main menu links */}
                    <Route path="/" component={Content} />
                    <Route path="/faq" component={Content} />
                    <Route path="/help" component={Content} />
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
