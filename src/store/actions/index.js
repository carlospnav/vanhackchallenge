import { REQUEST_FAILURE } from '../constants' 

  /* Request Failure. */
  export const failRequest = (message, helper = null) => ({
    type: REQUEST_FAILURE,
    payload: message,
    helper
  });