const express = require("express")
const cors = require("cors")
const connectDatabase = require("./database")

const app = express()
const PORTA = 3333
app.use(cors())

connectDatabase()
app.use(express.json())

const router = require("./route")
app.use("/", router)

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`))
