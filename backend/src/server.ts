// backend/src/server.ts

import 'dotenv/config'; // 👈 Carga dotenv PRIMERO y SOLO aquí
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Importa el cliente Supabase y las rutas
// import { supabase } from './config/supabase'; // Si lo necesitas directamente aquí
import cosechasRoutes from './routes/cosechas.routes'; 
// Asumo que cosechas.routes.ts es donde usas el reporteCosechas

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas API
app.use('/api/cosechas', cosechasRoutes);

// Healthcheck
app.get('/health', (req, res) => res.json({ status: 'ok', message: 'GELCA Backend running' }));

// 404 (Si ninguna ruta coincide)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler (Debe tener 4 argumentos para que Express lo reconozca)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// Inicio del Servidor
const PORT = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, '0.0.0.0', () => { 
    console.log(`🚀 Servidor Express iniciado en http://localhost:${PORT}`);
});
