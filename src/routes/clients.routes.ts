import { Router } from "express";
import {createClients, deleteClients, getClients, getClientsById, updateClients} from "../controllers/client.Controller"

const route = Router();

route.get("/", getClients)
route.get("/:id", getClientsById);
route.put("/:id", updateClients);
route.post("/", createClients);
route.delete("/", deleteClients);

export default route;
