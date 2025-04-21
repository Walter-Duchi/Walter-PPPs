"use client";
import dynamic from 'next/dynamic';

const Normativas = dynamic(() => import('@/components/Normativas/Normativas'), {
    loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function Page() {
  return (
    <div>
      <Normativas />
    </div>
  );
}