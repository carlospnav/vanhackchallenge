import { URL, FOOD_CATEGORY, API_KEY } from "../constants";
// const uuidv1 = require("uuid/v1");
 
/*Headers for the AJAX request.*/
const headers = {
  "Authorization": "myreads",
  "Content-Type": "application/json"  
}

/*Base API that exported API builds upon on its
methods 
*/
const baseAPI = {
  /*Returns all items from an entity's collection.
  */
  getAll: function(query = `cheese`){
    console.log(query)
    return fetch(
      `${URL}search?apiKey=${API_KEY}&categoryId=${FOOD_CATEGORY}&query=${query}`,
      {
        method: "GET",
        headers
      }
    )
    .then(res => res.json());
  },

  /*Returns an item from an entity based on its ID. 
  */
  getSingle: function(id){
      return fetch(
        `${URL}items?apiKey=${API_KEY}&ids=${id}`,
        {
          method: "GET",
          headers
        }
      )
      .then(res => res.json());
  }
}

export default {
  /*Returns all items.*/
  getItems: baseAPI.getAll,
  getItem: baseAPI.getSingle
}