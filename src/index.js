import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import './index.css';

import App from './App';

/* TODO: 
- styling
*/
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App dispatch={store.dispatch}/>
    </Router>
  </Provider>, 
  document.getElementById('root'));