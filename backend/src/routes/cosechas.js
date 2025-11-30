import { Router } from "express";
import supabase from "../supabase";

const router = Router();

// Crear cosecha
router.post("/", async (req, res) => {
  const { loteId, fecha, libras, pescador } = req.body;

  const { data, error } = await supabase
    .from("cosechas")
    .insert([
      {
        lote_id: loteId,
        fecha,
        libras,
        pescador_nombre: pescador
      }
    ])
    .select();

  if (error) return res.status(400).json({ error });

  res.json(data);
});

// Obtener todas las cosechas
router.get("/", async (_, res) => {
  const { data, error } = await supabase.from("cosechas").select("*");

  if (error) return res.status(400).json({ error });

  res.json(data);
});

export default router;

