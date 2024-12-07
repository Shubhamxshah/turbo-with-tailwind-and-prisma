import express from 'express'
import http from 'http'
import {Server, WebSocket } from 'ws'

const app = express()
const server = http.createServer(app)

const wss = new Server({server})

app.get("/ping", (_, res) => {
  res.json("pong")
})

wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: string) => {
    console.log(message.toString())
  })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})

