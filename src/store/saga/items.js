import { call, put, takeEvery } from "redux-saga/effects";
import { 
  successRequestItems,
  successRequestProcessItem } from "../actions/items";
import { 
  ITEMS_REQUEST, 
  ITEM_REQUEST } from "../constants";
import { throwError, processEntity } from "./sagaHelper";
import API from "../api";

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