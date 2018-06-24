import React, {Component} from 'react';
import logo from '../assets/skip-logo-white.png';
import './Search_products.css';
import {List, Container} from '../components/styled/SearchItems'

import SearchForm from './SearchForm';


class SearchItems extends Component {

  state={
    query: ''
  }
  /**************************************************************
  * Objective: Constructor
  *
  *   State variables:
  *     product_name: searched text for name of product
  *     productlist: products found in the return of API 
  *
  *   Added binding to 2 methods that will use the state props
  *     handleChange
  *     handleSearch
  *
  * Author: Gerson Bonfim (gerson@dvdsp.com.br)
  * Date: 24th March, 2018 -
  ***************************************************************/
 
   /**************************************************************
  * Objective: Handle Text change
  *
  *   Update the State variable 'product_name'
  *   Prevent default method action
  *
  * Author: Gerson Bonfim (gerson@dvdsp.com.br)
  * Date: 24th March, 2018 -
  ***************************************************************/
  onChange = (e) => { 
    this.setState({query: e.target.value});
  }

  
  /**************************************************************
  * Objective: Handle Search / form submit calls this function
  *
  *   Call an API get web service to get information regarding all products
  *   using categoryID=976759 for food
  *   Filter the list with the searched text
  * Author: Gerson Bonfim (gerson@dvdsp.com.br)
  * Date: 24th March, 2018 -
  ***************************************************************/
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }


  /**************************************************************
  * Objective: Render products information
  *
  *   Creates a li and div tags for each product on the list
  *
  * Author: Gerson Bonfim (gerson@dvdsp.com.br)
  * Date: 24th March, 2018 -
  ***************************************************************/

  renderProducts = (products) => products.map(
    items => 
      <li key={items.itemId} >
        <div className="product-container">
            <div><img src={items.thumbnailImage} alt="imagem" />{items.name} </div>
            <div className="product-label">Price:  CAD$ {items.salePrice} 
            </div>
        </div>
      </li>);
   
  render(){
    const {productList, loading} = this.props;
    return (
      <div className="search_products">
        <header className="search_products-header">
          <img src={logo} className="search_products-logo" alt="logo" />
        </header>
        <Container center>
          <SearchForm onChange={this.onChange} onSearch={this.onSubmit} query={this.state.query}/>
        </Container>
        {loading ? (
          <p style={{textAlign: 'center'}}>loading!</p>
        ) : productList && (
          <Container>
            <List className="productlist">{this.renderProducts(productList)}</List>
          </Container>
        )}
      </div>
    );
  } 
}

export default SearchItems;
