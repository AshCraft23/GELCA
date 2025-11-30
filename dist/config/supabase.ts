import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'; // 👈 IMPORTAR dotenv

// 🚨 DEBE SER LO PRIMERO ANTES DE LEER process.env
dotenv.config(); 

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''; 

if (!supabaseUrl || !supabaseAnonKey) {
  // Ahora el warning es preciso y se ejecuta SOLO si falla la lectura
  console.warn("WARNING: SUPABASE_URL o SUPABASE_ANON_KEY no está(n) definido(s) en el entorno.");
}

// 🔑 USAMOS LAS VARIABLES DEFINIDAS ARRIBA
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
