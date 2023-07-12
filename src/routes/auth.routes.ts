import { authenticateAdmin } from "../controllers/auth.Controller";
import { Router } from "express";

const router = Router();

router.post("/", authenticateAdmin);

export default router;
