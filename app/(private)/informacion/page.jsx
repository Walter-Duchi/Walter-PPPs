"use client";
import dynamic from 'next/dynamic';

const InformacionDashboard = dynamic(() => import('@/components/Informacion/Informacion'), {
    loading: () => <div>Cargando dashboard...</div>,
    ssr: false
    }); 

export default function InformacionPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <InformacionDashboard />
        </div>
    );
}