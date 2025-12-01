import { useState } from 'react';
import { Button } from './components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { LogOut, Waves } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { DashboardAnual } from './components/DashboardAnual';
import { LoteForm } from './components/LoteForm';
import { CosechaForm } from './components/CosechaForm';
import { VentaForm } from './components/VentaForm';
import { LotesList } from './components/LotesList';
import { AdministracionPanel } from './components/AdministracionPanel';
import { LoginForm } from './components/LoginForm';

export type EstadoLote = 'Crianza' | 'Listo para Pescar' | 'En Venta' | 'Reposo' | 'Descarte';
export type UserRole = 'Administrador' | 'Propietario' | 'Vendedor' | 'Pescador';

export interface Usuario {
  id: string;
  nombre: string;
  username: string;
  password: string;
  rol: UserRole;
  activo: boolean;
}

// … (tus interfaces y datos mock siguen igual)

// ⬇️ No los repito aquí porque ya los tienes bien

export default function App() {
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);
  const [selectedLoteId, setSelectedLoteId] = useState<string | null>(null);

  const handleLogin = (user: Usuario) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedLoteId(null);
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-3 rounded-full">
              <Waves className="size-8 text-white" />
            </div>
          </div>

          <h1 className="text-center text-cyan-900 mb-2 text-xl font-semibold">Sistema GELCA</h1>
          <p className="text-center text-gray-600 mb-8">Gestión de Camarones por Lotes</p>

          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-teal-500 p-2 rounded-lg">
              <Waves className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-cyan-900 font-bold">Sistema GELCA</h1>
              <p className="text-sm text-gray-600">
                {currentUser.nombre} - {currentUser.rol}
              </p>
            </div>
          </div>

          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 size-4" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      {/* Aquí puedes seguir pegando tus Tabs, Dashboard,
          Lotes, etc exactamente como los tenías. */}
    </div>
  );
}
