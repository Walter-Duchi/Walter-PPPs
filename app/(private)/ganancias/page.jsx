"use client";
import dynamic from 'next/dynamic';

const Ganancias = dynamic(() => import('@/components/Ganancias/Ganancias'), {
  loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Ganancias />
    </div>
  );
}