import {  
    ITEMS_REQUEST, 
    ITEMS_REQUEST_SUCCESS,
    ITEM_REQUEST, 
    ITEM_PROCESS_REQUEST_SUCCESS
  } from "../../constants";
  
  /*GetAll Posts*/
  export const requestItems = query => ({
    type: ITEMS_REQUEST,
    query
  });
  
  /*Get Post */
  export const requestItem = id => ({
    type: ITEM_REQUEST,
    payload: id
  });
  
  /* Getall Success */
  export const successRequestItems = items => ({
    type: ITEMS_REQUEST_SUCCESS,
    payload: items
  });
  
  /*Operation on Item Success Action Creator. Works for 
  all other CRUD operations. */
  export const successRequestProcessItem = item => ({
    type: ITEM_PROCESS_REQUEST_SUCCESS,
    payload: item
  });