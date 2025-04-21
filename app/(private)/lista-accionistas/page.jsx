"use client";
import dynamic from 'next/dynamic';

const ListaAccionistas = dynamic(() => import('@/components/ListaAccionistas/ListaAccionistas'), {
  loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ListaAccionistas />
    </div>
  );
}