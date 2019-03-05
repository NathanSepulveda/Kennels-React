// const remoteURL = "http://localhost:5002"

// export default {
//   get(id) {
//     return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
//   },
//   getAll() {
//     return fetch(`${remoteURL}/animals`).then(e => e.json())
//   },
//   removeAndList(id) {
//     return fetch(`http://localhost:5002/animals/${id}`, {
//         method: "DELETE"
//     }).then(e => e.json()).then(() => { return fetch(`${remoteURL}/animals`).then(e => e.json())})
//   },

// }

import APIManager from "./APIManager"
const remoteURL = "http://localhost:5002"


export default Object.create(APIManager, {
    get: {
        value: function () {
           return APIManager.get("animals")
        }
    },
    all: {
        value: function () {
           return APIManager.all("animals")
        }
    },

    post: {
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newAnimal)
            }).then(data => data.json())
          }

        }
    }


)


