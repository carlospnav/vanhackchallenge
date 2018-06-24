import { URL, ITEMS } from "../constants";
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
  getAll: function(entity = ITEMS){
    return fetch(
      `${URL}/${entity}`,
      {
        method: "GET",
        headers
      }
    )
    .then(res => res.json());
  },

  /*Returns an item from an entity based on its ID. 
  */
  getSingle: function(entity){
    return function(id){
      return fetch(
        `${URL}/${entity}/${id}`,
        {
          method: "GET",
          headers
        }
      )
      .then(res => res.json());
    }
  },

  /*Adds an item to an entity's collection. 
  */
//   add: function(entity){  
//     return function(payload){ 
//       return fetch(
//         `${URL}/${entity}`,
//         {
//           method: 'POST',
//           headers,
//           body: JSON.stringify({
//             ...payload,
//             id: uuidv1(),
//             timestamp: Date.now()
//           })
//         }
//       )
//       .then(res => res.json());
//     }
//   },

  /*Edits an item in an entity's collection.
  */
//   edit: function(entity){
//     return function(payload) {
//       return fetch(
//         `${URL}/${entity}/${payload.id}`,
//         {
//           method: 'PUT',
//           headers,
//           body: JSON.stringify(payload)
//         }
//       )
//       .then(res => res.json());
//     }
//   },

  /*Sets the deleted flag of the specific item to
  true  
  */
//   delete: function(entity){
//     return function(payload){
//       return fetch(
//         `${URL}/${entity}/${payload}`,
//         {
//           method: "DELETE",
//           headers
//         }
//       )
//     }
//   },

  /*Votes on a comment, increasing or decreasing
  its voteScore based on the payload option "vote" 
  */
//   vote: function(entity) {
//     return function(actionPayload){
//       const { id, vote } = actionPayload;

//       return fetch(
//         `${URL}/${entity}/${id}`,
//         {
//           method: "POST",
//           headers,
//           body:  JSON.stringify({
//             option: vote
//           })
//         })
//         .then(res => res.json());
//     }
//   }
}

export default {
  /*Returns all items.*/
  getItems: baseAPI.getAll,
  getPost: baseAPI.getSingle(ITEMS),
//   addPost: baseAPI.add(POSTS),
//   editPost: baseAPI.edit(POSTS), 
//   votePost: baseAPI.vote(POSTS),
//   deletePost: baseAPI.delete(POSTS),
}