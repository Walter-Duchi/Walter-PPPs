import { useState } from 'react';
import Image from 'next/image';
import styles from './ModalPago.module.css';
import BancoP from '@/app/assets/image/BancoP.png';
import DatafastImage from '@/app/assets/image/verificado.png';
import DatafastLogo from '@/app/assets/image/datafast.png';

interface ModalPagoProps {
  onClose: () => void;
  onPagoCompletado: () => void;
  montoAportaciones?: number;
}

function ModalPago({ onClose, onPagoCompletado, montoAportaciones }: ModalPagoProps) {
  const [metodoPago, setMetodoPago] = useState<string | null>(null);

  const handlePagarConDatafast = () => {
    // Simular proceso de pago
    setTimeout(() => {
      onPagoCompletado();
      onClose();
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalPago}>
        <button className={styles.cerrarModal} onClick={onClose}>×</button>
        <h1>Elige tu método de pago favorito!</h1>
        <p className={styles.subtitulo}>Estás a un paso de completar tu pago.</p>

        <div className={styles.metodoPago}>
          <h2>BANCO PICHINCHA</h2>
          <div className={styles.instrucciones}>
            <p><strong>Paga Rápido</strong></p>
            <div className={styles.imagenCentrada}>
              <Image 
                src={BancoP} 
                alt="Banco Pichincha" 
                width={200}
                height={100}
                quality={100}
              />
            </div>
            <ol>
              <li>Abre tu app Banco Pichincha</li>
              <li>Escoge la opción pagar con QR.</li>
              <li>Escanea el código QR.</li>
              <li>Ingresa el monto a pagar: <strong>${montoAportaciones?.toFixed(2) || '0.00'}</strong></li>
              <li>Confirma el pago.</li>
            </ol>
          </div>
          <button 
            className={styles.botonPago}
            onClick={() => setMetodoPago('pichincha')}
          >
            Pagar con Banco Pichincha
          </button>
        </div>

        <div className={styles.separador}>---</div>

        <div className={styles.metodoPago}>
          <h2>Datafast</h2>
          
          <div className={`${styles.imagenCentrada} ${styles.datafastImagen}`}>
            <Image 
              src={DatafastLogo} 
              alt="Datafast" 
              width={200}
              height={80}
              quality={100}
            />
          </div>
          
          <div className={styles.valorPagarContainer}>
            <p className={styles.valorPagar}>Valor a pagar: <strong>${montoAportaciones?.toFixed(2) || '0.00'}</strong></p>
          </div>
          
          <button 
            className={`${styles.botonPago} ${styles.datafast}`}
            onClick={handlePagarConDatafast}
          >
            Pagar con Datafast
          </button>
          
          <div className={styles.datafastInfo}>
            <p>Se abrirá una nueva ventana con el formulario de pago seguro</p>
            <div className={`${styles.imagenCentrada} ${styles.poweredByImage}`}>
              <Image 
                src={DatafastImage} 
                alt="Powered by Datafast" 
                width={150}
                height={50}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPago;