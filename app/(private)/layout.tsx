import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Footer } from "@/components/footer";

const ProfileHeader = dynamic(() => import('@/components/ProfileHeader/ProfileHeader'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Sidebar = dynamic(() => import('@/components/Sidebar/Sidebar'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
  <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ">
      {/* 1. ProfileHeader primero */}
      <ProfileHeader />
      
      {/* 2. Sidebar debajo del header */}
      <Sidebar />
      
      {/* 3. Contenido principal debajo del sidebar */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* 4. Footer al final */}
      <Footer />
    </div>
    </div>
  );
}