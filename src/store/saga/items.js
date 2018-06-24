import { call, put, takeEvery } from "redux-saga/effects";
import { 
  successRequestItems,
  successRequestProcessItem } from "../actions/items";
import { 
  ITEMS_REQUEST, 
  ITEM_REQUEST } from "../constants";
import { throwError, processEntity } from "./sagaHelper";
import API from "../api";

/* Functions with the correct action to be dispatched 
upon successful API call, injected in it through currying. 
They take the API function to call as parameter and return
another function that takes the action received from Saga. 
Ultimately you will have the action to be dispatched, the API
function and the action received from Saga to be used by a helper
function imported from sagaHelper.js. All sagas use the same helper file.
*/
const injectProcessAction = processEntity(successRequestProcessItem);

function* fetchItems(action){
  try{
    const items = yield call(API.getItems, action.query);
    yield put(successRequestItems(items));
  }
  catch (e){
    yield throwError(e);
  }
}

function* fetchItem(action){
    try {
        const item = yield call(API.getItem, action.id);
        yield put(successRequestProcessItem(item));
    }
    catch (e){
        yield throwError(e);
    }
}

export const itemsSagas = [
  takeEvery(ITEMS_REQUEST, fetchItems),
  takeEvery(ITEM_REQUEST, fetchItem)
];