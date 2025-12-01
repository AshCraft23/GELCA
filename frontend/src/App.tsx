import { useState } from 'react';
import { Button } from './components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { User, LogOut, Waves } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { DashboardAnual } from './components/DashboardAnual';
import { LoteForm } from './components/LoteForm';
import { CosechaForm } from './components/CosechaForm';
import { VentaForm } from './components/VentaForm';
import { LotesList } from './components/LotesList';
import { AdministracionPanel } from './components/AdministracionPanel';
import { LoginForm } from './components/LoginForm';

export type EstadoLote =
  | 'Crianza'
  | 'Listo para Pescar'
  | 'En Venta'
  | 'Reposo'
  | 'Descarte';

export type UserRole =
  | 'Administrador'
  | 'Propietario'
  | 'Vendedor'
  | 'Pescador';

export interface Usuario {
  id: string;
  nombre: string;
  username: string;
  password: string;
  rol: UserRole;
  activo: boolean;
}

export interface Lote {
  id: string;
  nombre: string;
  fechaInicio: string;
  fechaEstimadaPesca: string;
  tipoCamaron: string;
  estado: EstadoLote;
  librasCosechadas: number;
  librasVendidas: number;
  costoProduccion: number;
  ingresosTotales: number;
}

export interface Cosecha {
  id: string;
  loteId: string;
  fecha: string;
  libras: number;
  pescador: string;
}

export interface Venta {
  id: string;
  loteId: string;
  fecha: string;
  libras: number;
  precioLibra: number;
  proveedor: string;
  vendedor: string;
}

export interface Proveedor {
  id: string;
  nombre: string;
  contacto: string;
  telefono: string;
  email: string;
  activo: boolean;
}

export interface Pescador {
  id: string;
  nombre: string;
  telefono: string;
  especialidad: string;
  activo: boolean;
}

export interface Vendedor {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  activo: boolean;
}

// ------------------ DATOS INICIALES ------------------

const initialLotes: Lote[] = [
  {
    id: 'L-001',
    nombre: 'Piscina Norte A',
    fechaInicio: '2025-01-15',
    fechaEstimadaPesca: '2025-04-15',
    tipoCamaron: 'Vannamei',
    estado: 'En Venta',
    librasCosechadas: 27558,
    librasVendidas: 17196,
    costoProduccion: 62500,
    ingresosTotales: 60186
  },
  {
    id: 'L-002',
    nombre: 'Piscina Sur B',
    fechaInicio: '2025-02-01',
    fechaEstimadaPesca: '2025-05-02',
    tipoCamaron: 'Vannamei',
    estado: 'Crianza',
    librasCosechadas: 0,
    librasVendidas: 0,
    costoProduccion: 45000,
    ingresosTotales: 0
  }
];

const initialCosechas: Cosecha[] = [
  {
    id: 'C-001',
    loteId: 'L-001',
    fecha: '2025-10-20',
    libras: 27558,
    pescador: 'Juan Pérez'
  }
];

const initialVentas: Venta[] = [
  {
    id: 'V-001',
    loteId: 'L-001',
    fecha: '2025-10-22',
    libras: 11023,
    precioLibra: 3.5,
    proveedor: 'Mariscos del Pacífico',
    vendedor: 'María González'
  }
];

const initialProveedores: Proveedor[] = [];
const initialPescadores: Pescador[] = [];
const initialVendedores: Vendedor[] = [];

// ------------------ APP ------------------

export default function App() {

  console.log('APP MONTADA EN PRODUCCIÓN ✅');

  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);
  const [lotes, setLotes] = useState<Lote[]>(initialLotes);
  const [cosechas, setCosechas] = useState<Cosecha[]>(initialCosechas);
  const [ventas, setVentas] = useState<Venta[]>(initialVentas);
  const [proveedores, setProveedores] = useState<Proveedor[]>(initialProveedores);
  const [pescadores, setPescadores] = useState<Pescador[]>(initialPescadores);
  const [vendedores, setVendedores] = useState<Vendedor[]>(initialVendedores);
  const [selectedLoteId, setSelectedLoteId] = useState<string | null>(null);
  const [showLoteForm, setShowLoteForm] = useState(false);

  const selectedLote = lotes.find(l => l.id === selectedLoteId);

  const handleLogin = (user: Usuario) => {
    setCurrentUser(user);
    if (lotes.length > 0 && !selectedLoteId) {
      setSelectedLoteId(lotes[0].id);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedLoteId(null);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow">
          <h1 className="mb-6 text-xl font-bold text-center">Sistema GELCA</h1>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  }

 
