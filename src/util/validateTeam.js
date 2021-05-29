
const validateTeam = (team) => {
  const series = ['A', 'B', 'C', null]
  const errorMessages = []

  if (!Array.isArray(team.titles) || team.titles.length !== 3 || team.titles.some((title) => isNaN(title))) {
    errorMessages.push("'titles' deve ser um array com 3 números")
  }
  if (team.serie !== undefined) {
    if (!series.includes(team.serie)) {
      errorMessages.push("'serie' deve ser 'A', 'B', 'C' ou nula")
    }
  }
  if (!team.name) {
    errorMessages.push("'name' deve ser um nome válido")
  }
  if (!team.city) {
    errorMessages.push("'city' deve ser uma cidade válida")
  }
  if (!team.state) {
    errorMessages.push("'state' deve ser um estado válido")
  }
  if (isNaN(team.payment)) {
    errorMessages.push("'payment' deve ser um número valido")
  }

  if (errorMessages.length) {
    throw errorMessages
  }

  return true
}

module.exports = validateTeam
