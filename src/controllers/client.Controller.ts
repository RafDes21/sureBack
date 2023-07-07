import { Request, Response } from "express";
import { Clients } from "../models/clientModel";

export const getClients = async (_req: Request, res: Response) => {
  try {
    const clients = await Clients.find().sort({ date: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Clients" });
  }
};

export const getClientsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Clients.findById(id);
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: "patient not exist" });
  }
};

export const updateClients = async (req: Request, res: Response) => {
   
  try {
    const { id } = req.params;
    const { name, document, address, phone } = req.body;
    await Clients.updateOne(
      { _id: id },
      { $set: { name, document, address, phone } }
    );
    res.status(200).send();
  } catch (error) {
    res.status(404).json({ message: "patient not exist" });
  }
};

export const deleteClients = async (req: Request, res: Response) => {
  
  const ids: string = req.query.ids as string;
  try {
    if (ids) {
      await Clients.deleteMany({ _id: { $in: ids.split(",") } });
      res.status(200).send();
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "has occurred while deleting the patient" });
  }
};

export const createClients = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const client = req.body;
    const newClient = new Clients(client);
    await newClient.save();
    res.send(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error to create a patient" });
  }
};