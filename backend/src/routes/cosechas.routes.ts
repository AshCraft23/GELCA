import { Router } from "express";
import { supabase } from "../supabase.js";

const router = Router();

// POST /cosechas
router.post("/", async (req, res) => {
  const { lote_id, fecha, libras, pescador_id, pescador_nombre } = req.body;

  const { data, error } = await supabase
    .from("cosechas")
    .insert({
      lote_id,
      fecha,
      libras,
      pescador_id,
      pescador_nombre
    })
    .select();

  if (error) return res.status(400).json({ error });

  res.json({ data });
});

// GET /cosechas
router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("cosechas").select("*");

  if (error) return res.status(400).json({ error });

  res.json({ data });
});

export default router;
