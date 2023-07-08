import { Router } from "express";
import {createClients, deleteClient, getClients, getClientsById, updateClients} from "../controllers/client.Controller"

const route = Router();

route.get("/", getClients)
route.get("/:id", getClientsById);
route.put("/:id", updateClients);
route.post("/", createClients);
route.delete("/:id", deleteClient);

export default route;
