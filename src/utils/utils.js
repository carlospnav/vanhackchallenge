
/* Converts an obj composed of objs with keys into
an array of objs.
*/
export const convertObjToArr = obj => Object.keys(obj)
  .map(objKey => obj[objKey]);

/*Converts an Array of entities into an Obj with
their ids as keys.  
*/
export const convertArrToObj = arr =>
 arr.reduce((acc, current) => {
    acc[current.itemId] = current
    return acc;
  }, {}) 

/* Extracts the specific item out of the result returned
from Walmart's API. */
export const extractItemFromResult = res => res.items[0];
