import { all } from "redux-saga/effects";
import { itemsSagas } from './items';

export default function* rootSaga() {
  yield all([
    ...itemsSagas
  ]);
}