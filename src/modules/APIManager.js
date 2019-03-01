const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id, catergory) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function (catergory) {
            return fetch(`${remoteURL}/${catergory}`).then(e => e.json())
        }
    }
})