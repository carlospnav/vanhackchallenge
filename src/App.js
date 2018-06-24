import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { requestItems, requestItem } from './store/actions/items';
import {connect} from 'react-redux';
import {convertObjToArr} from './utils/utils'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(requestItems());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">aa</h1>
        </header>
        <ConnectedTestComponent />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class BaseTestComponent extends Component{
  render(){
    console.log(`rendered Items`, this.props.items)
    return (
      <p>oi</p>
    )
  }
}

const mapStateToProps = (state) => {
  const {items} = state;
  let itemsObj;

  if (items)
    itemsObj = convertObjToArr(items);

  return {
    items: itemsObj
  }
}

const ConnectedTestComponent = connect(mapStateToProps)(BaseTestComponent);

export default App;
