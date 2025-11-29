import { Router } from "express";
import { reporteCosechas } from "../controllers/reportes.controller";

const router = Router();

router.get("/cosechas", reporteCosechas);

export default router;
