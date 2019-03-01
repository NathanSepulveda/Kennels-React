

import APIManager from "./APIManager"
const remoteURL = "http://localhost:5002"


export default Object.create(APIManager, {
    fireEmployee : {
        value: function (id) {
            return fetch(`http://localhost:5002/employees/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => fetch(`http://localhost:5002/employees`))
                .then(e => e.json())
        }
    }

    }
)

