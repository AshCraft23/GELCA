import { createClient } from '@supabase/supabase-js';
//import dotenv from 'dotenv';


const supabaseUrl = process.env.SUPABASE_URL || '';

//dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''; 
export const supabase = createClient(supabaseUrl, anonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  // Ahora el warning te dirá si falta SUPABASE_ANON_KEY
  console.warn("WARNING: SUPABASE_URL o SUPABASE_ANON_KEY no está(n) definido(s).");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


