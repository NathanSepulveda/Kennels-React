import APIManager from "./APIManager"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/owners`).then(e => e.json())
//   }
// }

export default Object.create(APIManager, {
  removeOwner : {
      value: function (id) {
          return fetch(`http://localhost:5002/owners/${id}`, {
              method: "DELETE"
          })
              .then(e => e.json())
              .then(() => fetch(`http://localhost:5002/owners`))
              .then(e => e.json())
      }
  }

  }
)