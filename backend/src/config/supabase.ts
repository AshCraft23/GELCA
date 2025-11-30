// backend/src/config/supabase.ts

import { createClient } from '@supabase/supabase-js';

// Usamos la clave ANÓNIMA (pública) para el cliente estándar.
const url = process.env.SUPABASE_URL || '';
const anonKey = process.env.SUPABASE_ANON_KEY || ''; 

if (!url || !anonKey) {
  // Ahora el warning es preciso.
  console.warn("ADVERTENCIA: Las credenciales de Supabase no están configuradas en el entorno.");
}

// Cliente estándar para uso general (con RLS)
export const supabase = createClient(url, anonKey); 

// Si usas el Service Role Key (para operaciones que necesitan privilegios)
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; 

export const supabaseAdmin = createClient(url, serviceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});
