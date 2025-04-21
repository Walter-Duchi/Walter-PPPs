"use client";
import dynamic from 'next/dynamic';

const AccionistasDashboard = dynamic(() => import('@/components/Accionistas/Accionistas'), {
  loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function AccionistasPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AccionistasDashboard />
    </div>
  );
}