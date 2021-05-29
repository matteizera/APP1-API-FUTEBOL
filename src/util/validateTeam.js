
const validateTeam = (team) => {
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

module.exports = validateTeam