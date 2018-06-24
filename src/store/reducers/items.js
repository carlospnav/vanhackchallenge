import { 
    ITEMS_REQUEST, 
    ITEMS_REQUEST_SUCCESS,
    ITEM_PROCESS_REQUEST_SUCCESS } from '../constants';
  import { convertArrToObj, extractItemFromResult } from '../../utils/utils';
  import { success, initState } from './reducerHelper';
  
  export default function(state = initState, action){
    /*Switches the flag for the item being processed in the store
    so the app only fires one request per type of entity being
    updated.  
    */
    switch(action.type){
      case ITEMS_REQUEST: {
        return {
          ...state,
          processingRequest: true
        }
      }
  
      /*Replaces the store with an array of items received from the api
      but transformed into an obj of items with their Ids for 
      property keys. 
      */
      case ITEMS_REQUEST_SUCCESS: {
        let newItems = convertArrToObj(action.payload.items);
        return {
          ...success,
          items: newItems
        }
      }

      /* Replaces or adds a specific post in the store with all of
      its modifications. 
      */
      case ITEM_PROCESS_REQUEST_SUCCESS: {
        const item = extractItemFromResult(action.payload);

        return {
          ...state,
          ...success,
          items: {
            ...state.items,
            [item.itemId]: item
          }
        }
      }
  
      default:
        return state;
    }
  }
  