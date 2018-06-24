import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {convertObjToArr} from './utils/utils'
import {requestItems} from './store/actions/items'

import SearchItems from './components/SearchItems';

class App extends Component {

  componentDidMount(){
    // this.props.dispatch(requestItems());
  }

  onRequestItems = query => {
    this.props.dispatch(requestItems(query));
  }

  render() {
    return (
        <SearchItems loading={this.props.loading} productList={this.props.items} onSearch={this.onRequestItems} />
    );
  }
}

const mapStateToProps = (state) => {
  const {items, processingRequest } = state;
  let itemsObj;
  
  if (items)
    itemsObj = convertObjToArr(items);

  return {
    items: itemsObj,
    loading: processingRequest
  }
}

export default connect(mapStateToProps)(App);
