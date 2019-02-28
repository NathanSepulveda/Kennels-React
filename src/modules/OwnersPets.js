const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/ownerPets/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/ownerPets`).then(e => e.json())
  }
}