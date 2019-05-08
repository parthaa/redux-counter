import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducers";
import ConnectedCounter from "./ConnectedCounter";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render = () => <ConnectedCounter/>
}

var store = createStore(counter);
render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);