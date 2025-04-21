"use client";
import styles from "./ProfileHeader.module.css";
import { useRouter } from "next/navigation";
import { FaPen, FaCamera, FaSignOutAlt } from "react-icons/fa";

// Importar imágenes
import coverPhoto from "../../app/assets/image/Banco.jpg";
import profilePhoto from "../../app/assets/image/Perfil1.png";

function ProfileHeader() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className={styles.profileContainer}>
      {/* Portada */}
      <div className={styles.coverPhotoContainer}>
        <img 
          src={coverPhoto.src}
          alt="Cover" 
          className={styles.coverPhoto} 
        />
        <button className={styles.changeCoverBtn}>
          <FaCamera className={styles.changePhotoIcon} /> Cambiar portada
        </button>
      </div>

      {/* Información de perfil */}
      <div className={styles.informacionPerfil}>
        <div className={styles.profileContent}>
          {/* Foto de perfil */}
          <div className={styles.profilePhotoWrapper}>
            <img
              src={profilePhoto.src}
              alt="Foto de perfil"
              className={styles.profilePhoto}
            />
            <button className={styles.changeProfileBtn}>
              <FaCamera className={styles.changePhotoIcon} />
            </button>
          </div>

          {/* Información principal a la derecha */}
          <div className={styles.profileMainInfo}>
            <div className={styles.profileNameRow}>
              <h1 className={styles.profileName}>DAYSI CAMAS</h1>
              <button
                className={styles.updateInfoBtn}
                onClick={() => router.push("/informacion")}
              >
                <FaPen className={styles.penIcon} />
              </button>
            </div>

            <div className={styles.profileRoles}>
              <span className={styles.roleTitle}>Accionistas:</span>
              <span className={styles.roleValue}>Banco Financiero ANEUPI</span>
            </div>

            <div className={styles.profileDescription}>
              <p>
                Soy una mujer visionaria que trabajo con mis objetivos grandes y
                lo estoy cumpliendo, siempre me conocerán por mis acciones y no
                por mis palabras.
              </p>
            </div>

            {/* Contenedor de botones */}
            <div className={styles.profileButtonsContainer}>
              {/* Botones principales centrados */}
              <div className={styles.profileButtonsRow}>
                <button
                  className={`${styles.actionBtn} ${styles.primaryBtn}`}
                  onClick={() => router.push("/informacion")}
                >
                  Overview
                </button>
                <button className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  Contactar
                </button>
                <button className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  Seguir
                </button>
              </div>
              
              {/* Botón de logout alineado a la derecha */}
              <div className={styles.logoutButtonContainer}>
                <button 
                  className={`${styles.actionBtn} ${styles.logoutBtn}`}
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className={styles.logoutIcon} /> Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;