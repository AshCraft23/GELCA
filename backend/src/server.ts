import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import reportesRoutes from './routes/reportes.routes';
import cosechasRoutes from './routes/cosechas.routes';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas API
app.use('/api/reportes', reportesRoutes);
app.use('/api/cosechas', cosechasRoutes);

// Healthcheck
app.get('/health', (_req: Request, res: Response) => res.json({ status: 'ok' }));

// 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => { // '0.0.0.0' es vital para Docker/Railway
    console.log(`Server running on port ${PORT}`);
});

