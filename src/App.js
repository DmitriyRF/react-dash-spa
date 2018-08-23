import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
