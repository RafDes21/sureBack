import { Request, Response } from "express";
import { Admin } from "../models/authModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";

export const authenticateAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (email === "admin123@gmail.com") {
      const existingAdmin = await Admin.findOne({ email });

      if (existingAdmin) {
        const passwordMatch = await bcrypt.compare(
          password,
          existingAdmin.password
        );
        if (passwordMatch) {
          const token = jwt.sign({ email }, config.secret, { expiresIn: "1h" });
          res.status(200).json({ token, admin: existingAdmin, message:"Welcome!!" });
        } else {
          res.status(401).json({ message: "incorrect password" });
        }
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
          email,
          password: hashedPassword,
          isFirstAdmin: true,
        });
        const admin = await newAdmin.save();
        const token = jwt.sign({ email }, config.secret, { expiresIn: "24h" });
        res.status(200).json({ token, admin });
      }
    } else {
      res.status(401).json({ message: "unauthorized email" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error registering administrator" });
  }
};
