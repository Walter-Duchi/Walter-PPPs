"use client";
import dynamic from 'next/dynamic';

const SolicitudCredito = dynamic(() => import('@/components/SolicitudCredito/SolicitudCredito'), {
    loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function Page() {
  return (
    <div>
      <SolicitudCredito />
    </div>
  );
}