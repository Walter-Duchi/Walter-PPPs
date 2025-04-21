"use client";
import dynamic from 'next/dynamic';

const InicioDashboard = dynamic(() => import('@/components/Inicio/Inicio'), {
  loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function InicioPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <InicioDashboard />
    </div>
  );
}