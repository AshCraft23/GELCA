import { Router } from "express";
import healthRouter from "./health.routes";
import reportesRouter from "./reportes.routes";

const router = Router();

router.use("/health", healthRouter);
router.use("/reportes", reportesRouter);

export default router;
