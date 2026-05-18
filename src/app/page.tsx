"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import styles from './page.module.css';

// Import local images directly from assets
import heroPoster from './assets/hero_poster.png';
import medCourse1 from './assets/med_course_1.png';
import medCourse2 from './assets/med_course_2.png';
import medCourse3 from './assets/med_course_3.png';

// Inline SVGs for no-dependency icons
const VolumeXIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
);

const Volume2Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const ActivityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const PlayIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const MonitorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ClockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const FlameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightLargeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function DiagnosticandoVidaLanding() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Casos Reales Slider logic
  const [currentCaso, setCurrentCaso] = useState(0);
  const casosData = [
    { image: "/students_training.png", title: "Análisis en Equipo", text: "Detectando anomalías sutiles en tomografías durante el turno de noche.", isVideo: false, filter: '' },
    { image: null, title: "Caso Clínico: Neumotórax", text: '"Gracias al curso, pude diagnosticar un neumotórax a tensión en segundos." - Dra. Gómez', isVideo: true, filter: '' },
    { image: "/students_training.png", title: "Práctica Intensiva", text: "Simuladores de alta fidelidad para calibrar el ojo clínico.", isVideo: false, filter: 'hue-rotate(45deg)' }
  ];

  const nextCaso = () => setCurrentCaso((prev) => (prev + 1) % casosData.length);
  const prevCaso = () => setCurrentCaso((prev) => (prev - 1 + casosData.length) % casosData.length);

  useEffect(() => {
    // Simulate initial loading for Apple-like entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // Increased time to see the 3D Spline
    return () => clearTimeout(timer);
  }, []);
  
  // Drag logic for reels
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // WhatsApp Configuration - exact number requested
  const whatsappUrl = "https://wa.me/51923961751?text=Hola,%20me%20gustar%C3%ADa%20perder%20el%20miedo%20a%20equivocarme%20en%20mis%20diagn%C3%B3sticos.%20%C2%BFMe%20dan%20m%C3%A1s%20informaci%C3%B3n?";

  // Variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: '#0b3663', zIndex: 9999,
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }}
          >
            {/* Animated Medical Heartbeat (EKG) */}
            <div style={{ marginBottom: '2rem' }}>
              <motion.svg width="250" height="100" viewBox="0 0 200 100" fill="none" stroke="#31ccd3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 0px 8px rgba(49,204,211,0.8))' }}>
                <motion.path
                  d="M 0 50 L 40 50 L 55 20 L 75 90 L 95 10 L 115 70 L 130 50 L 200 50"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                />
              </motion.svg>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ffffff', fontSize: '3rem', fontWeight: '800', zIndex: 1, textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            >
              <ActivityIcon /> Diagnosticando Vida
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              style={{ height: '4px', backgroundColor: '#31ccd3', marginTop: '2rem', borderRadius: '5px', zIndex: 1, boxShadow: '0 0 15px rgba(49, 204, 211, 0.8)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <ActivityIcon />
          </div>
          Diagnosticando Vida
        </div>
        <div className={styles.navLinks}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#dolor" className={styles.navLink}>¿Inseguro?</a>
          <a href="#casos-reales" className={styles.navLink}>Casos Reales</a>
          <a href="#nosotros" className={styles.navLink}>Quiénes Somos</a>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.primaryBtn} ${styles.navBtn}`} style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem' }}>
          <WhatsAppIcon /> Escríbenos
        </a>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
            Un mal diagnóstico puede costar una <span>vida</span> (y tu carrera).
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            La teoría de los libros no te salvará a las 3 AM en urgencias. Nuestro entrenamiento intensivo online está diseñado para que NUNCA más dudes frente a un monitor. Solo 50 cupos por ciclo.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroButtons}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              <WhatsAppIcon /> Postular a un Cupo
            </a>
            <a href="#online" className={styles.secondaryBtn}>
              Ver Metodología <ChevronRightIcon />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroVideoContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <video
            ref={videoRef}
            className={styles.heroVideo}
            poster="/Mi_Poster.jpg"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls={false}
            onClick={handlePlayVideo}
          >
            <source src="/Video_Hero.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          <button className={styles.muteBtn} onClick={toggleMute} aria-label="Activar Sonido">
            {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
            {isMuted && <span style={{ marginLeft: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>Activar Sonido</span>}
          </button>

          {!isPlaying && (
            <div className={styles.playOverlay} onClick={handlePlayVideo}>
              <div className={styles.playIcon}>
                <div style={{ marginLeft: '6px', display: 'flex' }}>
                  <PlayIcon />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Features Section - Attacking the pain points */}
      <motion.section 
        id="dolor" 
        className={styles.features}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>El Miedo a Equivocarte se Elimina con <span>Práctica Real</span></motion.h2>
        <div className={styles.featuresGrid}>
          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <AlertCircleIcon />
            </div>
            <h3 className={styles.featureTitle}>Casos de Vida o Muerte</h3>
            <p className={styles.featureText}>
              Olvídate de casos de libro perfectos. Te enfrentarás a tomografías y ecografías reales de urgencias, donde un error de lectura cambia el pronóstico del paciente.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <UsersIcon />
            </div>
            <h3 className={styles.featureTitle}>Cero Tolerancia a la Inseguridad</h3>
            <p className={styles.featureText}>
              Nuestros especialistas te presionarán como en una guardia real. Aprenderás a tomar decisiones diagnósticas rápidas bajo estrés y con total seguridad.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <EyeIcon />
            </div>
            <h3 className={styles.featureTitle}>Ojo Clínico de Especialista</h3>
            <p className={styles.featureText}>
              Simuladores que calibran tu vista para detectar anomalías milimétricas. Evita errores fatales por falta de experiencia visual en el monitor.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Casos Reales Section (Slider) */}
      <motion.section 
        id="casos-reales" 
        className={styles.casosRealesSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>Nuestros Alumnos en <span>Acción</span></motion.h2>
        <motion.p variants={fadeInUp} className={styles.gallerySubtitle}>Mira cómo nuestros estudiantes aplican el método en guardias reales.</motion.p>
        
        <div style={{ position: 'relative', maxWidth: '900px', margin: '3rem auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          
          <button onClick={prevCaso} className={styles.sliderBtn} aria-label="Anterior alumno">
            <ChevronLeftIcon />
          </button>

          <div style={{ overflow: 'hidden', width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCaso}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#0d2238' }}
              >
                {casosData[currentCaso].isVideo ? (
                  <div style={{ width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff' }}>
                    <PlayIcon />
                  </div>
                ) : (
                  <Image 
                    src={casosData[currentCaso].image || ""} 
                    alt={casosData[currentCaso].title} 
                    width={800} 
                    height={400} 
                    style={{ width: '100%', height: '350px', objectFit: 'cover', filter: casosData[currentCaso].filter }} 
                  />
                )}
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>{casosData[currentCaso].title}</h3>
                  <p style={{ color: '#a0b1c5', fontSize: '1.2rem', lineHeight: '1.6' }}>{casosData[currentCaso].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextCaso} className={styles.sliderBtn} aria-label="Siguiente alumno">
            <ChevronRightLargeIcon />
          </button>
        </div>
      </motion.section>

      {/* Quiénes Somos Section */}
      <motion.section 
        id="nosotros" 
        className={styles.aboutSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className={styles.aboutGrid}>
          <motion.div variants={fadeInUp} className={styles.aboutContent}>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1rem' }}>¿Quiénes Somos en <span>Diagnosticando Vida</span>?</h2>
            <p className={styles.aboutText}>
              Somos un equipo de médicos especialistas cansados de ver cómo el sistema educativo tradicional lanza a los estudiantes a las guardias sin la preparación visual necesaria.
            </p>
            <p className={styles.aboutText}>
              Nuestra misión es erradicar el miedo frente al monitor y brindarte las herramientas prácticas que la teoría de la facultad omitió. No formamos teóricos, <strong>formamos médicos de acción clínica inmediata</strong>.
            </p>
          </motion.div>
          <motion.div 
            className={styles.aboutImages}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/doctor_profile.png" alt="Doctor" width={400} height={400} className={styles.aboutImageMain} />
            <Image src="/students_training.png" alt="Estudiantes" width={300} height={300} className={styles.aboutImageSecondary} />
          </motion.div>
        </div>
      </motion.section>

      {/* Carrusel de Reels */}
      <motion.section 
        id="reels" 
        className={styles.reelsSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className={styles.sectionTitle}>Los Libros Mienten. Así se Ve la Anatomía <span>en un Paciente Real</span>.</h2>
        <p className={styles.gallerySubtitle}>
          Tu facultad te enseñó anatomía con dibujos perfectos. Aquí te enfrentamos a la realidad anatómica que encontrarás en la guardia. Desliza para ver nuestros casos clínicos.
        </p>

        <motion.div 
          className={styles.reelsCarousel}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* Reel 1 */}
          <div className={styles.reelCard}>
            <video className={styles.reelVideo} src="/Reels_1.mp4" poster="/poster-reel1.jpg" controls playsInline />
          </div>
          {/* Reel 2 */}
          <div className={styles.reelCard}>
            <video className={styles.reelVideo} src="/reel2.mp4" poster="/poster-reel2.jpg" controls playsInline />
          </div>
          {/* Reel 3 */}
          <div className={styles.reelCard}>
            <video className={styles.reelVideo} src="/reel3.mp4" poster="/poster-reel3.jpg" controls playsInline />
          </div>
          {/* Reel 4 */}
          <div className={styles.reelCard}>
            <video className={styles.reelVideo} src="/reel4.mp4" poster="/poster-reel4.jpg" controls playsInline />
          </div>
        </motion.div>
      </motion.section>

      {/* Online Classes Scarcity Section */}
      <motion.section 
        id="online" 
        className={styles.onlineSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className={styles.scarcityBadge}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FlameIcon /> ¡Cupos Limitados para la Siguiente Edición!
          </div>
        </motion.div>

        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>Domina la Guardia desde <span>Cualquier Lugar</span></motion.h2>
        <motion.p variants={fadeInUp} className={styles.gallerySubtitle}>
          Nuestras clases son 100% online y están diseñadas para encajar en la caótica agenda de un médico. Tu guardia no espera, tu preparación tampoco debería.
        </motion.p>

        <div className={styles.onlineGrid}>
          <motion.div variants={fadeInUp} className={styles.onlineCard}>
            <div className={styles.onlineIcon}><MonitorIcon /></div>
            <h3>Simulador de Casos en Vivo</h3>
            <p>Discute diagnósticos reales con especialistas a través de nuestra plataforma interactiva, sin salir de tu casa.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.onlineCard}>
            <div className={styles.onlineIcon}><ClockIcon /></div>
            <h3>Acceso 24/7 sin Restricciones</h3>
            <p>¿Tuviste turno de 24h? Repasa las sesiones grabadas y el material en alta resolución en tu tiempo libre.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.onlineCard}>
            <div className={styles.onlineIcon}><UsersIcon /></div>
            <h3>Comunidad y Mentoria</h3>
            <p>Únete a nuestro grupo exclusivo de WhatsApp. Comenta tus casos complejos y recibe apoyo inmediato de nuestra red de médicos.</p>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>Cierre de Inscripciones <span>Inminente</span></h3>
          <p className={styles.ctaSubtitle}>Limitamos el grupo a 50 estudiantes para garantizar retroalimentación personalizada de primer nivel.</p>

          <div className={styles.stockBar}>
            <div className={styles.stockFill}></div>
          </div>
          <p className={styles.stockText}>42/50 Cupos Reservados</p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
              <WhatsAppIcon /> Asegurar Mi Cupo Ahora
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ActivityIcon />
          </div>
          Diagnosticando Vida
        </div>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Diagnosticando Vida. Todos los derechos reservados.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWsp}
        aria-label="Contactar por WhatsApp"
      >
        <div style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WhatsAppIcon />
        </div>
      </a>
    </div>
    </>
  );
}
