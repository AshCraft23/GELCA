import { Request, Response } from "express";
import { supabase } from "../supabase";

export const saveData = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const { error } = await supabase
      .from("cosechas")
      .insert(data);

    if (error) return res.status(400).json({ error });

    return res.json({ message: "Datos guardados correctamente" });

  } catch (err) {
    return res.status(500).json({ error: err });
  }
};
