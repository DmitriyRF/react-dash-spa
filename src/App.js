import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import RootContainer from 'Components/RootContainer';

import * as reducers from './store/reducers';

class App extends Component {
  render() {
    const store = createStore(combineReducers(reducers));
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
