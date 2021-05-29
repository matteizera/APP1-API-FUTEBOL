const express = require('express')
const routes = express.Router()
const DataBase = require('./dataBase')
const validateTeam = require('./util/validateTeam')

//Create team
routes.post("/teams", (req, res) => {

  const { name, city, state, serie, payment, titles } = req.body
  const team = { name, city, state, serie, payment, titles }
  const {isTeamValid, msg} = validateTeam(team)
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