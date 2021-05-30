const express = require('express')
const validateTeam = require('./util/validateTeam')
const { teamsRepository } = require('./dataBase/repository')

const routes = express.Router()

// Create team
routes.post('/teams', (req, res) => {
  const { name, city, state, serie = null, payment, titles = [] } = req.body
  const team = { name, city, state, serie, payment, titles }

  try {
    validateTeam(team)
    team.payment = parseFloat(team.payment)
    team.titles = team.titles.map((title) => Math.floor(title))
    res.status(201).json(teamsRepository.save(team))
  } catch (msg) {
    res.status(422).json({ msg })
  }
})

// List teams
routes.get('/teams', (req, res) => {
  const teams = teamsRepository
  if (!teams) {
    res.status(404).json({ msg: 'Não existem times cadastrados' })
  } else {
    res.status(200).json(teams)
  }
})

// Find team
routes.get('/teams/:id', (req, res) => {
  const teamId = Number(req.params.id)
  const team = teamsRepository.find(teamId)

  if (!team) {
    res.status(404).json({ msg: `Time com ID '${req.params.id}' não encontrado` })
  } else {
    res.status(200).json(team)
  }
})

// Find team by name
routes.get('/teams/search/:name', (req, res) => {
  const teamName = String(req.params.name)
  const team = teamsRepository.findByName(teamName)

  if (!team) {
    res.status(404).json({ msg: `Time com o nome '${req.params.name}' não encontrado` })
  } else {
    res.status(200).json(team)
  }
})

// Edit team
routes.put('/teams/:id', (req, res) => {
  const teamId = Number(req.params.id)
  const oldTeam = teamsRepository.find(teamId)
  const { name, city, state, serie = null, payment, titles = [] } = req.body
  const newTeam = { id: teamId, name, city, state, serie, payment, titles }

  if (!oldTeam) {
    res.status(404).json({ msg: `Time com ID '${req.params.id}' não encontrado` })
    return
  }

  try {
    validateTeam(newTeam)
    newTeam.payment = parseFloat(newTeam.payment)
    newTeam.titles = newTeam.titles.map((title) => Math.floor(title))
    res.status(200).json(teamsRepository.save(newTeam))
  } catch (msg) {
    res.status(422).json({ msg })
  }
})

// Remove team
routes.delete('/teams/:id', (req, res) => {
  const teamId = Number(req.params.id)
  const deletedTeam = teamsRepository.delete(teamId)

  res.status(200).json(deletedTeam)
})

module.exports = routes
