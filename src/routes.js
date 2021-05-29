const express = require('express')
const validateTeam = require('./util/validateTeam')
const { teamsRepository } = require('./dataBase/repository')

const routes = express.Router()

// Create team
routes.post('/teams', (req, res) => {
  const { name, city, state, serie, payment, titles } = req.body
  const team = { name, city, state, serie, payment, titles }
  const { isTeamValid, msg } = validateTeam(team)

  if (isTeamValid) {
    const fixedTitles = team.titles.map((title) => Math.floor(title))

    team.titles = fixedTitles
    res.status(201).json(teamsRepository.save(team))
  } else {
    res.status(422).json({ msg })
  }
})

// List teams
routes.get('/teams', (req, res) => {})

// Find team
routes.get('/teams/:id', (req, res) => {})

// Edit team
routes.put('/teams/:id', (req, res) => {})

// Remove team
routes.delete('/teams/:id', (req, res) => {
  const teamId = Number(req.params.id)
  const deletedTeam = teamsRepository.delete(teamId)

  res.status(200).json(deletedTeam)
})

module.exports = routes
