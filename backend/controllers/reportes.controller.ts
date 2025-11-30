import { Request, Response } from "express";
import { supabase } from "../config/supabase";

export const reporteCosechas = async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("cosechas")
    .select();

  if (error) {
    return res.status(400).json({ ok: false, error });
  }

  return res.json({ ok: true, data });
};
