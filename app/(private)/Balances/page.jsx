"use client";
import dynamic from 'next/dynamic';

const Balances = dynamic(() => import('@/components/Balances/Balances'), {
    dinamic: true,
    ssr: false,
});

export default function Page() {
    return (
        <div>
            <Balances />
        </div>
    );
}