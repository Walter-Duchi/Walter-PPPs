"use client";
import dynamic from 'next/dynamic';

const EstadoFinancieroDashboard = dynamic(() => import('@/components/EstadoFinanciero/EstadoFinanciero'), {
  loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function EstadoFinancieroPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <EstadoFinancieroDashboard />
    </div>
  );
}