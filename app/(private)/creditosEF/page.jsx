"use client";
import dynamic from 'next/dynamic';

const CreditosEF = dynamic(() => import('@/components/CreditosEF/CreditosEF'), {
    loading: () => <div>Cargando dashboard...</div>,
  ssr: false
});

export default function Page() {
  return (
    <div >
      <CreditosEF />
    </div>
  );
}