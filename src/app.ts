import express  from "express";
import clientRoute from "./routes/clients.routes"


const app = express()

app.use("/api/clients", clientRoute)

export default app

