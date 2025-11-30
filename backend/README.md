# GELCA Backend

Estructura mínima del backend en TypeScript con Express y Supabase.

Rápido inicio:

1. cd backend
2. npm install
3. cp .env.example .env  # y rellena SUPABASE_URL y SUPABASE_KEY
4. npm run dev

Endpoints:
- GET /api/reportes
- POST /api/reportes
- GET /api/cosechas
- POST /api/cosechas
- GET /health

Notas:
- No subas .env con claves reales al repositorio.
- Asegúrate de tener las tablas `reportes` y `cosechas` en tu proyecto de Supabase o ajusta los nombres en los controladores.
