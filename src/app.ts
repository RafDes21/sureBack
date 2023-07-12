import express from "express";
import cors from "cors";
import clientRoute from "./routes/clients.routes";
import authRouter from "./routes/auth.routes";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/clients", clientRoute);
app.use("/api/auth", authRouter);

export default app;
