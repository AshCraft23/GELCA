// dist/server.js (Generado por TypeScript)

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    // ... (Lógica de importación de TypeScript)
}) : (function(o, m, k, k2) {
    // ... (Lógica de importación de TypeScript)
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    // ... (Lógica de importación de TypeScript)
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

// Las importaciones de TypeScript se convierten a 'require' de JavaScript
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const supabase_js_1 = require("@supabase/supabase-js");

// Carga las variables de entorno
dotenv.config();

// --- 1. Inicialización de Supabase ---
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials in environment variables.");
}

const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);

// --- 2. Configuración del Servidor Express ---
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Middlewares
app.use(express_1.default.json()); 

// --- 3. Rutas (Endpoints) ---

// Endpoint simple de salud
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido al Backend de GELCA.');
});

// Endpoint para obtener productos
app.get('/api/productos', async (req, res) => {
    console.log('Fetching products...');
    const { data, error } = await supabase
        .from('productos_gelca')
        .select('*');
    if (error) {
        console.error('Supabase Error:', error);
        return res.status(500).json({ 
            message: 'Error al obtener productos de Supabase', 
            error: error.message 
        });
    }
    res.status(200).json(data);
});

// --- 4. Inicio del Servidor ---
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express iniciado en el puerto ${PORT}`);
});
