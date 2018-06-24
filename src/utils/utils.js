
/* Converts an obj composed of objs with keys into
an array of objs.
*/
export const convertObjToArr = obj => Object.keys(obj)
  .map(objKey => obj[objKey]);

/*Converts an Array of entities into an Obj with
their ids as keys.  
*/
export const convertArrToObj = (arr, a) => { console.log(a); return arr
  .reduce((acc, current) => {
    acc[current.itemId] = current
    return acc;
  }, {}) } 

// export const convertToReadableDate = timestamp => new Date(timestamp)
//   .toLocaleDateString("br")
//   .split(",")[0]
//   .split("-")
//   .reduce((str, current) => `${current}/${str}`);