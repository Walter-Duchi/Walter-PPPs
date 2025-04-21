"use client";
import dynamic from 'next/dynamic';

const AportacionesMensuales = dynamic(() => import('@/components/AportacionesMensuales/AportacionesMensuales'), {
    dinamic: true,
    ssr: false,
});

export default function Page() {
    return (
        <div>
            <AportacionesMensuales />
        </div>
    );
}