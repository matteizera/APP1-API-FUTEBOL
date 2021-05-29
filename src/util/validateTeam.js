
const validateTeam = (team) => {
  const series = ['A', 'B', 'C', '']
  const errorMessages = []

  if (isNaN(team.titles[0]) || isNaN(team.titles[1]) || isNaN(team.titles[2])) {
    errorMessages.push('Titulo deve ser um array com 3 numeros')
  }
  if (!series.includes(team.serie.toUpperCase())) {
    errorMessages.push('Serie deve ser a, b, c ou nada')
  }
  if (!team.name) {
    errorMessages.push('Nome deve ser um nome valido')
  }
  if (!team.city) {
    errorMessages.push('Cidade deve ser um nome valido')
  }
  if (!team.state) {
    errorMessages.push('Estado deve ser um nome valido')
  }
  if (isNaN(team.payment) && team.payment) {
    console.log(team.payment)
    errorMessages.push('Pagamento deve ser um numero valido')
  }

  if (errorMessages.length) {
    throw errorMessages
  }

  return true
}

module.exports = validateTeam
