const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor executando em http://localhost:${port}`)
})
