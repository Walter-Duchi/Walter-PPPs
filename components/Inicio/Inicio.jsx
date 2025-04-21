'use client';

import { useState } from 'react';

import Image from 'next/image';

// Importar imágenes locales
import noticia1 from '../../app/assets/image/Noticia1.jpg';
import noticia2 from '../../app/assets/image/noticia2.jpg';


export default function Inicio() {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: 'Banco Financiero lanza nueva plataforma digital',
      contenido: 'El Banco Financiero ha presentado su nueva plataforma digital con tecnología blockchain para transacciones más seguras...',
      imagen: noticia1,
      fecha: '15 Mayo 2023',
      meGusta: 124,
      comentarios: 28,
      liked: false,
      tamaño: 'grande'
    },
    {
      id: 2,
      titulo: 'Nuevas oficinas en Guayaquil',
      contenido: 'Inauguramos nuestras nuevas oficinas corporativas en el centro financiero de Guayaquil...',
      imagen: noticia2,
      fecha: '10 Mayo 2023',
      meGusta: 89,
      comentarios: 14,
      liked: true,
      tamaño: 'pequeño'
    },
    {
      id: 3,
      titulo: 'Convenio con universidades locales',
      contenido: 'Firmamos un importante convenio con las principales universidades para programas de pasantías...',
      imagen: noticia2,
      fecha: '5 Mayo 2023',
      meGusta: 156,
      comentarios: 42,
      liked: false,
      tamaño: 'pequeño'
    },
    {
      id: 4,
      titulo: 'Reporte financiero del primer trimestre',
      contenido: 'Presentamos nuestros resultados financieros del primer trimestre con un crecimiento del 12% en cartera crediticia...',
      imagen: noticia2,
      fecha: '1 Mayo 2023',
      meGusta: 210,
      comentarios: 35,
      liked: false,
      tamaño: 'grande'
    }
  ]);

  const handleLike = (id) => {
    setNoticias(noticias.map(noticia => {
      if (noticia.id === id) {
        return {
          ...noticia,
          liked: !noticia.liked,
          meGusta: noticia.liked ? noticia.meGusta - 1 : noticia.meGusta + 1
        };
      }
      return noticia;
    }));
  };

  return (
    <div className="max-w-[90%] mx-auto pt-5 font-sans">
      <h1 className="text-[#253b4a] text-center mb-8 text-3xl font-semibold">Últimas Noticias</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {noticias.map(noticia => (
          <div 
            key={noticia.id} 
            className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 bg-white border border-gray-200 hover:-translate-y-1 hover:shadow-lg ${
              noticia.tamaño === 'grande' ? 'md:col-span-2' : ''
            }`}
          >
            <div className={`relative w-full ${noticia.tamaño === 'grande' ? 'h-[300px]' : 'h-[200px]'}`}>
              <Image 
                src={noticia.imagen} 
                alt={noticia.titulo} 
                fill
                className="object-cover transition-transform duration-500 hover:scale-103"
                placeholder="blur"
                priority={noticia.id === 1}
              />
            </div>
            
            <div className="p-5">
              <span className="text-gray-500 text-sm block mb-2 font-medium">{noticia.fecha}</span>
              <h2 className={`text-gray-800 mb-3 font-bold leading-snug ${
                noticia.tamaño === 'grande' ? 'text-2xl' : 'text-xl'
              }`}>
                {noticia.titulo}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">{noticia.contenido}</p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <button 
                  className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-1.5 px-3 rounded-full transition-all duration-200 text-sm ${
                    noticia.liked 
                      ? 'text-red-600 bg-red-100' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleLike(noticia.id)}
                  aria-label={noticia.liked ? 'Quitar me gusta' : 'Dar me gusta'}
                >
                  <span>❤️</span>
                  <span className="font-medium">{noticia.meGusta}</span>
                </button>
                
                <button 
                  className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer py-1.5 px-3 rounded-full text-blue-600 hover:bg-gray-100 transition-all duration-200 text-sm"
                  aria-label="Comentar"
                >
                  <span>💬</span>
                  <span className="font-medium">{noticia.comentarios}</span>
                </button>
                
                <button 
                  className="ml-auto py-2 px-4 bg-[#253b4a] text-white border-none rounded-full cursor-pointer transition-colors duration-200 hover:bg-[#1a2d3a] text-sm font-medium"
                  aria-label="Ver más detalles"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}