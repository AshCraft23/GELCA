import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getReportes = async (_req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('reportes').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data ?? []);
  } catch (err) {
    console.error('getReportes error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createReporte = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    if (!payload) return res.status(400).json({ error: 'Payload requerido' });

    const { data, error } = await supabase.from('reportes').insert([payload]).select();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data?.[0] ?? null);
  } catch (err) {
    console.error('createReporte error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};