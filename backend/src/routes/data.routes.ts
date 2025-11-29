import { Router } from "express";
import { saveData } from "../controllers/data.controller";

const router = Router();

router.post("/save", saveData);

export default router;
