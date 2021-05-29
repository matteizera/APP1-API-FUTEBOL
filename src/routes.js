const express = require('express')
const routes = express.Router()
const DataBase = require('./dataBase')

const verifyTeam = (team) => {
  let isTeamValid = true
  let msg = []
  const series = ["A","B","C",""]
  if (isNaN(team.titles[0]) || isNaN(team.titles[1]) || isNaN(team.titles[2])){
    isTeamValid = false
    msg.push("Titulo deve ser um array com 3 numeros")
  }
  if (!series.includes(team.serie.toUpperCase())) {
    msg.push("Serie deve ser a, b, c ou nada")
    isTeamValid = false
  }
  if (!team.name){
    isTeamValid = false
    msg.push("Nome deve ser um nome valido")
  }
  if( !team.city){
    isTeamValid = false
    msg.push("Cidade deve ser um nome valido")
  }
  if( !team.state){
    isTeamValid = false
    msg.push("Estado deve ser um nome valido")
  }
  if (isNaN(team.payment) && team.payment) {
    console.log(team.payment)
    isTeamValid = false
    msg.push("Pagamento deve ser um numero valido")
  }

  return ({isTeamValid,msg})
}

//Create team
routes.post("/teams", (req, res) => {

  const { name, city, state, serie, payment, titles } = req.body
  const team = { name, city, state, serie, payment, titles }
  const {isTeamValid, msg} = verifyTeam(team)
  if (isTeamValid) {
    const fixedTitles = team.titles.map(title => Math.floor(title))
    team.titles = fixedTitles

    res.status(200).json(DataBase.saveTeam(team))

  } else {

    res.status(400).json({ msg })

  }
})

//List teams
routes.get('/teams', (req, res) => {
})
//Find team
routes.get('/teams/:id', (req, res) => {})
//Edit team
routes.put("/teams/:id", (req, res) => {})
//Remove team
routes.delete("/teams/:id", (req, res) => {})

module.exports =  routes