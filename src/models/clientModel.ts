import mongoose from "mongoose";

const clientsCollection = "clientCol";

const clientsSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  compania: { type: String, required: true },
  fecha: { type: String, required: true, max: 100 },
  periodo: { type: String, required: true },
});

export const Clients = mongoose.model(clientsCollection, clientsSchema);
