import React, { useState } from 'react';

export default function AzomalliWeb() {
  // Datos dinámicos para el módulo interactivo de Reels
  const reelsData = [
    {
      title: "Desmolde y Brillo Escultural",
      desc: "Descubre el preciso momento del desmolde de nuestras piezas más icónicas directamente en Facebook Reels.",
      url: "https://www.facebook.com/share/18aiY5xQPU/"
    },
    {
      title: "Arte Botánico y Aromas",
      desc: "Sumérgete en la estética floral de Azomalli revisando nuestro feed oficial de Instagram Videos.",
      url: "https://www.instagram.com/azomalli.jabonesyvelasa?igsh=MzlhZHg3dDB1M3My"
    }
  ];

  // Estado de React para controlar el Reel activo
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  // Funciones de navegación
  const handleNextReel = () => {
    setCurrentReelIndex((prevIndex) => (prevIndex + 1) % reelsData.length);
  };

  const handlePrevReel = () => {
    setCurrentReelIndex((prevIndex) => (prevIndex - 1 + reelsData.length) % reelsData.length);
  };

  // Estilos embebidos en objetos para asegurar portabilidad en React
  const styles = {
    body: {
      backgroundColor: '#2C1B12',
      color: '#FDFBF7',
      fontFamily: "'Montserrat', sans-serif",
      margin: 0,
      padding: 0,
      lineHeight: '1.6'
    },
    header: {
      backgroundColor: '#3D271B',
      padding: '40px 20px',
      textAlign: 'center',
      borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
    },
    mainTitle: {
      fontFamily: "'Marcellus', serif",
      fontSize: '3rem',
      letterSpacing: '4px',
      margin: '0 0 5px 0',
      color: '#FDFBF7'
    },
    subtitle: {
      fontSize: '0.9rem',
      letterSpacing: '6px',
      textTransform: 'uppercase',
      color: '#F3C6C1',
      margin: 0
    },
    socialBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      padding: '20px',
      flexWrap: 'wrap',
      backgroundColor: '#2C1B12'
    },
    btnLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 24px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      color: 'white',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      transition: 'transform 0.2s'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    storyCard: {
      backgroundColor: '#4A3325',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
      marginBottom: '40px'
    },
    sectionTitle: {
      textAlign: 'center',
      fontFamily: "'Marcellus', serif",
      color: '#D4AF37',
      fontSize: '2.2rem',
      margin: '40px 0 25px 0',
      letterSpacing: '2px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      marginBottom: '60px'
    },
    productCard: {
      backgroundColor: '#4A3325',
      borderRadius: '14px',
      overflow: 'hidden',
      border: '1px solid rgba(212, 175, 55, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    },
    cardVisual: {
      height: '220px',
      backgroundColor: '#332116',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F3C6C1',
      fontSize: '0.9rem',
      fontStyle: 'italic',
      borderBottom: '2px solid rgba(212, 175, 55, 0.1)'
    },
    cardContent: {
      padding: '20px',
      textAlign: 'center'
    },
    reelsSection: {
      backgroundColor: '#3D271B',
      borderRadius: '20px',
      padding: '40px 20px',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      textAlign: 'center'
    },
    reelsPlayer: {
      width: '100%',
      maxWidth: '340px',
      height: '520px',
      margin: '20px auto',
      backgroundColor: '#110A07',
      borderRadius: '18px',
      border: '4px solid #D4AF37',
      boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30px'
    },
    btnActionReel: {
      backgroundColor: '#D4AF37',
      color: '#2C1B12',
      padding: '12px 28px',
      border: 'none',
      borderRadius: '30px',
      fontWeight: '700',
      cursor: 'pointer',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginTop: '15px'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px'
    },
    btnNav: {
      backgroundColor: 'transparent',
      border: '2px solid #D4AF37',
      color: '#D4AF37',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    footer: {
      backgroundColor: '#1F120C',
      textAlign: 'center',
      padding: '40px 20px',
      fontSize: '0.9rem',
      color: '#D9C3B0',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      marginTop: '60px'
    }
  };

  return (
    <div style={styles.body}>
      {/* Carga de fuentes e iconos externa */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />

      {/* CABECERA */}
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Azomalli</h1>
        <p style={styles.subtitle}>Velas y Jabones Artesanales</p>
      </header>

      {/* BARRA DE REDES SOCIALES */}
      <section style={styles.socialBar}>
        <a href="https://www.facebook.com/share/18aiY5xQPU/" target="_blank" rel="noreferrer" style={{ ...styles.btnLink, backgroundColor: '#1877F2' }}>
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.instagram.com/azomalli.jabonesyvelasa?igsh=MzlhZHg3dDB1M3My" target="_blank" rel="noreferrer" style={{ ...styles.btnLink, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #bc1888 100%)' }}>
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://chat.whatsapp.com/JzHniCqF6cvKo7yC2om7QV" target="_blank" rel="noreferrer" style={{ ...styles.btnLink, backgroundColor: '#25D366' }}>
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main style={styles.container}>
        
        {/* HISTORIA */}
        <article style={styles.storyCard}>
          <h2 style={{ fontFamily: "'Marcellus', serif", color: '#D4AF37', fontSize: '1.8rem', margin: '0 0 5px 0' }}>
            María Guadalupe Vázquez Lara: liderazgo, servicio y transformación
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#F3C6C1', textTransform: 'uppercase', margin: '0 0 20px 0', letterSpacing: '1px' }}>
            Azomalli News &bull; Mayo 2026
          </p>
          <p style={{ color: '#D9C3B0', textAlign: 'justify', margin: '0 0 15px 0' }}>
            Ingeniera Bioquímica orgullosamente lince egresada del Tecnológico Nacional de México en Celaya, Guadalupe ha sabido combinar el conocimiento técnico con la sensibilidad humana, convirtiéndose en una mujer que inspira desde el trabajo diario y la constancia silenciosa.
          </p>
          <p style={{ color: '#D9C3B0', textAlign: 'justify', margin: 0 }}>
            Actualmente se desempeña dentro del área de Desarrollo Urbano, Ecología y Planeación del municipio de Apaseo el Alto, Gto. En Azomalli, esa misma pasión se traduce en la creación de velas y jabones que transforman espacios y brindan armonía desde la cercanía.
          </p>
        </article>

        {/* PRODUCTOS */}
        <h2 style={styles.sectionTitle}>Nuestras Líneas de Diseño</h2>
        <div style={styles.grid}>
          
          <div style={styles.productCard}>
            <div style={styles.cardVisual}>
              <i className="fa-solid fa-seedling" style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}></i>
              <span>[ Cuadro Floral Especial ]</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0' }}>Madre & Botánica</h3>
              <p style={{ color: '#D9C3B0', fontSize: '0.9rem', margin: 0 }}>Hermosos enmarcados florales y bouquets preservados tridimensionales perfectos para inmortalizar momentos especiales.</p>
            </div>
          </div>

          <div style={styles.productCard}>
            <div style={styles.cardVisual}>
              <i className="fa-solid fa-cross" style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}></i>
              <span>[ Escultura Sagrada ]</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0' }}>Línea Sacra</h3>
              <p style={{ color: '#D9C3B0', fontSize: '0.9rem', margin: 0 }}>Velas de cera pura esculpidas con alta definición, coronadas con destellos dorados finos para iluminación espiritual.</p>
            </div>
          </div>

          <div style={styles.productCard}>
            <div style={styles.cardVisual}>
              <i className="fa-solid fa-cubes" style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}></i>
              <span>[ Jabón Panditas ]</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0' }}>Cuidado Divertido</h3>
              <p style={{ color: '#D9C3B0', fontSize: '0.9rem', margin: 0 }}>Divertidos paquetes de jabón para manos con formas detalladas de "Panditas", ideales para incentivar la higiene.</p>
            </div>
          </div>

          <div style={styles.productCard}>
            <div style={styles.cardVisual}>
              <i className="fa-solid fa-ice-cream" style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}></i>
              <span>[ Diseños Creativos ]</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0' }}>Gourmet / Popcorn</h3>
              <p style={{ color: '#D9C3B0', fontSize: '0.9rem', margin: 0 }}>Velas de ilusión hiperrealistas presentadas en vasos temáticos que imitan palomitas de maíz frescas.</p>
            </div>
          </div>

          <div style={styles.productCard}>
            <div style={styles.cardVisual}>
              <i className="fa-solid fa-mountain-sun" style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}></i>
              <span>[ Terrario de Cactus ]</span>
            </div>
            <div style={styles.cardContent}>
              <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0' }}>Eco-Terrarios</h3>
              <p style={{ color: '#D9C3B0', fontSize: '0.9rem', margin: 0 }}>Sofisticadas composiciones estéticas de cactus y suculentas modeladas meticulosamente en cera.</p>
            </div>
          </div>

        </div>

        {/* REELS INTERACTIVOS CON STATE DE REACT */}
        <section style={styles.reelsSection}>
          <h2 style={{ ...styles.sectionTitle, margin: '10px 0' }}>Videos & Reels Destacados</h2>
          <p style={{ color: '#D9C3B0', marginBottom: '20px' }}>Usa las flechas para explorar los procesos creativos en nuestras redes sociales.</p>
          
          <div style={styles.reelsPlayer}>
            <i className="fa-solid fa-circle-play" style={{ fontSize: '4rem', color: '#F3C6C1', marginBottom: '20px' }}></i>
            <h3 style={{ fontFamily: "'Marcellus', serif", color: '#FDFBF7', margin: '0 0 10px 0', fontSize: '1.4rem' }}>
              {reelsData[currentReelIndex].title}
            </h3>
            <p style={{ color: '#D9C3B0', fontSize: '0.95rem', margin: '0 0 20px 0', minHeight: '60px' }}>
              {reelsData[currentReelIndex].desc}
            </p>
            <button 
              style={styles.btnActionReel} 
              onClick={() => window.open(reelsData[currentReelIndex].url, '_blank')}
            >
              Ver en Redes
            </button>
          </div>

          <div style={styles.navContainer}>
            <button style={styles.btnNav} onClick={handlePrevReel}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button style={styles.btnNav} onClick={handleNextReel}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={{ margin: 0 }}>&copy; 2026 Azomalli &bull; Apaseo el Alto, México</p>
        <p style={{ margin: '10px 0 0 0', fontSize: '0.8rem' }}>
          Contacto directo: <a href="mailto:azomalli.jabonesyvelasa@gmail.com" style={{ color: '#F3C6C1', textDecoration: 'none' }}>azomalli.jabonesyvelasa@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
