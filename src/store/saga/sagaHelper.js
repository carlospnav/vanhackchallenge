import { put, call } from "redux-saga/effects";
import { failRequest } from "../actions";

export function throwError(e){
  put(failRequest(e.message));
}

/* Curried functions that take an action to be dispatched,
return a function that takes the correct API function to be
called and returns a generator function to use with Redux-Saga.
This allows for both Comments and Posts saga files to use the
same helper file. Any changes that need to be made can be made
in one file and avoids excessive repetition. 
*/

export const processEntity = actionToDispatch => APIfn => 
  function* (action){
    const {payload} = action;
    try{
      const item = yield call(APIfn, payload);
      yield put(actionToDispatch(item));
    }
    catch (e){
      yield throwError(e);
    }
  }