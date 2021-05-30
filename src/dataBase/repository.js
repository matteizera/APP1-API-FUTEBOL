const database = require('./data.json')

const sequence = {
  nextId(data) {
    return data.reduce((maxId, team) => Math.max(maxId, team.id), 1) + 1
  },
}

class Repository {
  constructor(collection) {
    this._collection = collection
  }

  get() {
    return this._collection
  }

  find(id) {
    return this._collection.find((item) => item.id == id) // eslint-disable-line eqeqeq
  }

  findByName(name) {
    return this._collection.find((item) => item.name.toLocaleLowerCase() == name.toLocaleLowerCase()) // eslint-disable-line eqeqeq
  }

  save(data) {
    if (data.id) {
      const item = this.find(data.id)

      return item && Object.assign(item, data)
    }

    this._collection.push({
      id: sequence.nextId(this._collection),
      ...data,
    })

    return this._collection.slice(-1)
  }

  delete(id) {
    const itemIndex = this._collection.findIndex((item) => item.id == id) // eslint-disable-line eqeqeq
    const item = this._collection[itemIndex] || null

    return item && this._collection.splice(itemIndex, 1)[0]
  }
}

module.exports = {
  teamsRepository: new Repository(database.teams),
}
