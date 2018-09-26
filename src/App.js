import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Routes from './routes';
import * as reducers from './store/reducers';

class App extends Component {
  render() {
    const store = createStore(combineReducers(reducers));
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
