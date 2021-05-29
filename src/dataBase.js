const sequence = {
  _id: 2,
  get id() {
    return this._id++
  }
}

function saveTeam(team) {
  if (!team.id) team.id = sequence.id
  db.teams[team.id] = team
  return team
}

function getTeams() {
  return Object.values(db.teams)
}
const db = {
  teams: [
        {
      id: 1,
      name:"Curitiba",
      city:"Curitiba",
      state:"Parana",
      serie:"A",
      payment:320000.00,
      titles:[5,1,1],
    }
  ]
}

module.exports = {
  db,
  getTeams,
  saveTeam
}