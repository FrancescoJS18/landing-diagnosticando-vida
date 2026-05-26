"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';

// Icons
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
  <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.031 7.808L0 32l8.418-2.008A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.848l-.486-.29-5.002 1.194 1.216-4.875-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.363-1.166-2.73-1.3-.366-.133-.633-.2-.9.2s-1.033 1.3-1.266 1.566c-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5s-1.4 1.367-1.4 3.334 1.433 3.866 1.633 4.133c.2.267 2.82 4.306 6.827 6.033.954.412 1.699.658 2.28.842.958.305 1.83.262 2.52.159.768-.114 2.363-.966 2.697-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
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
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [featureTab, setFeatureTab] = useState(0);
  const [activeTestimonio, setActiveTestimonio] = useState<{nombre: string, especialidad: string, video: string} | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Cupos dinámicos
  const [cupos, setCupos] = useState(42);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCupos(prev => prev < 49 ? prev + 1 : prev);
    }, 3 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
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

  const whatsappUrl = "https://wa.me/51923961751?text=Hola,%20me%20gustar%C3%ADa%20perder%20el%20miedo%20a%20equivocarme%20en%20mis%20diagn%C3%B3sticos.%20%C2%BFMe%20dan%20m%C3%A1s%20informaci%C3%B3n?";

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: '#0b3663', zIndex: 9999,
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {['/anat1.jpeg', '/anat2.jpeg', '/anat3.jpeg'].map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.18, 0.18, 0] }}
                transition={{ duration: 2, delay: i * 0.6, ease: "easeInOut" }}
                style={{
                  position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'saturate(0.4) brightness(0.5) hue-rotate(180deg)',
                }}
              />
            ))}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11, 54, 99, 0.75)', zIndex: 1 }} />
            <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.img
                src="/logo.png" alt="DX Vida"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '1rem' }}
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '800' }}
              >
                Diagnosticando Vida
              </motion.div>
              <motion.svg
                width="250" height="60" viewBox="0 0 200 60"
                fill="none" stroke="#31ccd3" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round"
                style={{ marginTop: '1.5rem', filter: 'drop-shadow(0px 0px 8px rgba(49,204,211,0.8))' }}
              >
                <motion.path
                  d="M 0 30 L 30 30 L 45 10 L 60 55 L 75 5 L 90 45 L 105 30 L 200 30"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
                />
              </motion.svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.container}>

        {/* Navbar */}
        <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Diagnosticando Vida" width={48} height={48} style={{ objectFit: 'contain' }} />
            <span className={styles.logoText}>DX Vida</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#inicio" className={styles.navLink}>Inicio</a>
            <a href="#dolor" className={styles.navLink}>¿Inseguro? <span className={styles.navArrow}>▾</span></a>
            <a href="#testimonios" className={styles.navLink}>Casos Reales <span className={styles.navArrow}>▾</span></a>
            <a href="#nosotros" className={styles.navLink}>Quiénes Somos</a>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.primaryBtn} ${styles.navBtn}`} style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem' }}>
            <WhatsAppIcon /> Escríbenos
          </a>
        </nav>

        {/* Hero Section */}
        <section
          id="inicio"
          className={styles.hero}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
        >
          <video
            ref={videoRef}
            className={styles.heroBgVideo}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            controls={false}
          >
            <source src="/Video_Hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} />

          <motion.div
            className={styles.heroContent}
            animate={isHovered ? { bottom: '50%', transform: 'translateY(50%)', scale: 1, opacity: 1 } : { bottom: '2.5rem', transform: 'translateY(0%)', scale: 0.85, opacity: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.h1 className={styles.heroTitle} animate={{ textAlign: isHovered ? 'center' : 'left' }} transition={{ duration: 0.5 }}>
              Tú sí puedes confiar en tu <span>criterio clínico.</span>
            </motion.h1>
            <motion.p className={styles.heroSubtitle} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.4, delay: 0.1 }}>
              Inscripciones abiertas · Solo 50 cupos por ciclo. Entrena con casos reales y deja de dudar frente a un monitor para siempre.
            </motion.p>
            <motion.div className={styles.heroButtons} animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }} transition={{ duration: 0.4, delay: 0.2 }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <WhatsAppIcon /> Postular a un Cupo
              </a>
              <a href="#online" className={styles.secondaryBtn}>
                Ver Metodología <ChevronRightIcon />
              </a>
            </motion.div>
          </motion.div>

          <div className={styles.heroControls}>
            <button className={styles.heroControlBtn} onClick={handlePlayVideo} aria-label="Play/Pause">
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : <PlayIcon />}
            </button>
            <button className={styles.heroControlBtn} onClick={toggleMute} aria-label="Mute">
              {isMuted ? <VolumeXIcon /> : <Volume2Icon />}
            </button>
          </div>
        </section>

        {/* Quick Bar */}
        <div className={styles.quickBar}>
          {[
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: 'Quiénes Somos', href: '#nosotros' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, label: 'Casos Clínicos', href: '#testimonios' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg>, label: 'Anatomía Real', href: '#reels' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>, label: 'Clases Online', href: '#online' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, label: 'Inscríbete', href: whatsappUrl },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`${styles.quickItem} ${activeTab === i ? styles.quickItemActive : ''}`}
              target={i === 4 ? '_blank' : undefined}
              rel={i === 4 ? 'noopener noreferrer' : undefined}
              onClick={() => setActiveTab(i)}
            >
              <div className={styles.quickIcon}>{item.icon}</div>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Testimonios */}
        <section className={styles.testimonios} id="testimonios">
          <div id="casos-reales" style={{ position: 'absolute', marginTop: '-80px' }} />
          <div className={styles.testimoniosSplit}>
            <div className={styles.testimoniosLeft}>
              <h2 className={styles.testimoniosTitulo}>Lo que dicen nuestros <span>alumnos</span></h2>
              <p className={styles.testimoniosSubtitulo}>Estudiantes reales, resultados reales.</p>
              {!activeTestimonio ? (
                <div className={styles.testimonioGrid}>
                  {[
                    { nombre: 'Hebert', especialidad: 'Estudiante de Medicina', video: '/testi1.mp4' },
                    { nombre: 'Flor', especialidad: 'Estudiante de Medicina', video: '/testi2.mp4' },
                  ].map((t, i) => (
                    <div key={i} className={styles.testimonioCard}>
                      <div className={styles.testimonioFoto}>
                        <Image src="/logo.png" alt={t.nombre} width={80} height={80} style={{ objectFit: 'contain', borderRadius: '50%' }} />
                      </div>
                      <div className={styles.testimonioInfo}>
                        <h3>{t.nombre}</h3>
                        <p>{t.especialidad}</p>
                      </div>
                      <button className={styles.testimonioBtn} onClick={() => setActiveTestimonio(t)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        Ver testimonio
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.testimonioVideoWrap}>
                  <video controls autoPlay className={styles.testimonioVideo}>
                    <source src={activeTestimonio.video} type="video/mp4" />
                  </video>
                  <button className={styles.testimonioVolver} onClick={() => setActiveTestimonio(null)}>
                    ← Ver otros testimonios
                  </button>
                </div>
              )}
            </div>

            <div className={styles.testimoniosRight}>
              <div className={styles.doctorCard}>
                <Image src="/logo.png" alt="DX Vida" width={65} height={65} className={styles.doctorLogo} />
                <div className={styles.doctorLeft}>
                  <div className={styles.doctorInfo}>
                    <span className={styles.doctorBadge}>Médico Cirujano</span>
                    <h3>Deja de dudar.<br />Aprende a <span>diagnosticar</span> con certeza.</h3>
                    <p>El Dr. Daniel Tafur te enseña lo que la facultad nunca te mostró — con casos reales, no con libros.</p>
                    <ul className={styles.doctorPuntos}>
                      <li>+8 años formando médicos de acción clínica</li>
                      <li>Especialista en diagnóstico por imágenes</li>
                      <li>Metodología basada en guardias reales</li>
                      <li>+500 alumnos en Perú y Latinoamérica</li>
                    </ul>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.doctorBtn}>
                    🩺 Quiero aprender con el Dr. Tafur →
                  </a>
                </div>
                <div className={styles.doctorRight}>
                  <div className={styles.doctorImageWrap}>
                    <Image src="/doctor.png" alt="Dr. Daniel Tafur" width={400} height={600} className={styles.doctorImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
<section id="dolor" className={styles.features}>
  <div className={styles.featuresBanner}>
    <AnimatePresence mode="wait">
      <motion.div
        key={featureTab}
        className={styles.featuresBannerInner}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.featuresBannerLeft}>
          <div className={styles.featuresBannerLine} />
          <h2 className={styles.featuresBannerTitle}>
            {featureTab === 0 && 'Imágenes que la Facultad No Te Mostró'}
            {featureTab === 1 && 'Decide en Segundos. Vidas en Juego.'}
            {featureTab === 2 && 'Ve Lo que Otros Médicos No Ven'}
          </h2>
          <p className={styles.featuresBannerText}>
            {featureTab === 0 && 'Tomografías, ecografías y radiografías de urgencias reales. Cada error que evites aquí es una vida que salvas en guardia.'}
            {featureTab === 1 && 'En urgencias no hay tiempo para dudar. Te entrenamos bajo presión real para que tu criterio clínico sea instintivo y certero.'}
            {featureTab === 2 && 'El ojo clínico no se nace — se entrena. Detecta anomalías milimétricas que la mayoría de médicos junior pasa por alto.'}
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.featuresBannerBtn}>
            Quiero entrenarme →
          </a>

        </div>

        <div className={styles.featuresBannerRight}>
          <Image
            src={featureTab === 0 ? '/anat1.jpeg' : featureTab === 1 ? '/anat2.jpeg' : '/anat3.jpeg'}
            alt="Anatomía"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>

    <div className={styles.featureDots}>
      {[0, 1, 2].map((i) => (
        <button key={i} className={`${styles.featureDot} ${featureTab === i ? styles.featureDotActive : ''}`} onClick={() => setFeatureTab(i)} />
      ))}
    </div>
  </div>
</section>

        {/* Reels */}
        <motion.section id="reels" className={styles.reelsSection} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className={styles.sectionTitle}>Los Libros Mienten. Así se Ve la Anatomía <span>en un Paciente Real</span>.</h2>
          <p className={styles.gallerySubtitle}>Tu facultad te enseñó anatomía con dibujos perfectos. Aquí te enfrentamos a la realidad anatómica que encontrarás en la guardia.</p>
          <motion.div
            className={styles.reelsCarousel}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            whileTap={{ cursor: "grabbing" }}
          >
            {[
  { src: '/Reels_1.mp4' },
  { src: '/Reels_2.mp4' },
  { src: '/Reels_3.mp4' },
  { src: '/Reels_4.mp4' },
].map((reel, i) => (
  <div key={i} className={styles.reelCard}>
    <video
      className={styles.reelVideo}
      src={reel.src}
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
))}
          </motion.div>
        </motion.section>

        {/* Quiénes Somos */}
        <motion.section id="nosotros" className={styles.aboutSection} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <div className={styles.aboutGrid}>
            <motion.div variants={fadeInUp} className={styles.aboutContent}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '1rem' }}>
                ¿Quiénes Somos en <span>Diagnosticando Vida</span>?
              </h2>
              <p className={styles.aboutText}>
                Soy el <strong>Dr. Daniel Tafur Navarro</strong>, médico cirujano. Durante mi formación, anatomía me parecía fascinante, pero también desafiante — entendí lo amplia que era y que había aspectos que necesitaban consolidarse.
              </p>
              <p className={styles.aboutText}>
                Algunas veces memorizaba… y olvidaba. La clave estuvo en algo simple pero poderoso: <strong>¡la repetición estratégica y el repaso inteligente!</strong>
              </p>
              <p className={styles.aboutText}>
                Este método me permitió no solo dominar anatomía, sino <strong>darle sentido a otras ciencias básicas que dependen completamente de ella.</strong>
              </p>
              <p className={styles.aboutText}>
                Hoy, más de <strong>3,000 estudiantes</strong> han pasado por nuestro programa, con testimonios escritos, hablados y resultados medibles que demuestran que cuando la base es sólida, <strong>el rendimiento cambia por completo</strong>.
              </p>

              {/* Ángulos VSL */}
              <div className={styles.vslAngulos}>
                <div className={styles.vslAngulo}>
                  <span className={styles.vslAnguloNum}>01</span>
                  <div>
                    <h4>¿Estudias anatomía y sientes que memorizas sin entender?</h4>
                    <p>No es falta de inteligencia — es que nadie te enseñó a comprender <strong>antes</strong> de memorizar. En pocas semanas construirás una base sólida que te acompañe toda la carrera.</p>
                  </div>
                </div>
                <div className={styles.vslAngulo}>
                  <span className={styles.vslAnguloNum}>02</span>
                  <div>
                    <h4>El método A.N.A.T.O.M.I.A. 360°</h4>
                    <p>3 pilares: comprensión estructural, repetición inteligente e integración aplicada. Región por región — construyendo conocimiento acumulativo, no datos aislados.</p>
                  </div>
                </div>
                <div className={styles.vslAngulo}>
                  <span className={styles.vslAnguloNum}>03</span>
                  <div>
                    <h4>Por solo $14/mes — con garantía de 30 días</h4>
                    <p>Si aplicas el método y en 30 días no sientes que comprendes mejor la anatomía, te devolvemos el dinero. El riesgo no está en entrar — <strong>está en seguir estudiando sin estructura.</strong></p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}>
                  <span className={styles.aboutStatNum}>+3,000</span>
                  <span className={styles.aboutStatLabel}>Estudiantes formados</span>
                </div>
                <div className={styles.aboutStat}>
                  <span className={styles.aboutStatNum}>+8 años</span>
                  <span className={styles.aboutStatLabel}>De experiencia</span>
                </div>
                <div className={styles.aboutStat}>
                  <span className={styles.aboutStatNum}>100%</span>
                  <span className={styles.aboutStatLabel}>Online y en vivo</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.aboutImageWrap}>
              <div className={styles.aboutLogoTop}>
                <Image src="/logo.png" alt="DX Vida" width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <Image src="/doctor.png" alt="Dr. Daniel Tafur" width={400} height={500} className={styles.aboutDoctorImg} />
            </motion.div>
          </div>
        </motion.section>

        {/* Online */}
        <motion.section id="online" className={styles.onlineSection} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className={styles.scarcityBadge}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FlameIcon /> ¡Cupos Limitados para la Siguiente Edición!
            </div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>Anatomía Clínica desde <span>Cualquier Lugar</span></motion.h2>
          <motion.p variants={fadeInUp} className={styles.gallerySubtitle}>
            Clases 100% online con casos clínicos reales. Aprende anatomía aplicada al diagnóstico por imágenes en tu propio horario.
          </motion.p>
          <div className={styles.onlineGrid}>
            <motion.div variants={fadeInUp} className={styles.onlineCard}>
              <div className={styles.onlineIcon}><MonitorIcon /></div>
              <h3>Comprensión antes que Memoria</h3>
              <p>Olvida estudiar para olvidar después del examen. Aprenderás a entender relaciones espaciales y sistemas para que el conocimiento sea consecuencia natural, no esfuerzo forzado.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.onlineCard}>
              <div className={styles.onlineIcon}><ClockIcon /></div>
              <h3>8 Semanas. Base para Toda la Carrera.</h3>
              <p>Clases en vivo y asincrónicas. Acceso 24/7. Repaso guiado y progresivo para consolidar sin saturarte — diseñado para la agenda caótica de un estudiante de medicina.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.onlineCard}>
              <div className={styles.onlineIcon}><UsersIcon /></div>
              <h3>Comunidad de Estudiantes Comprometidos</h3>
              <p>Únete a más de 3,000 alumnos que pasaron de sentirse abrumados a sentirse seguros. Soporte, resolución de dudas y una red académica que te impulsa hacia adelante.</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className={styles.ctaContainer}>
            <h3 className={styles.ctaTitle}>Cierre de Inscripciones <span>Inminente</span></h3>
            <p className={styles.ctaSubtitle}>Limitamos el grupo a 50 estudiantes para garantizar retroalimentación personalizada de primer nivel.</p>
            <div className={styles.stockBar}>
              <div className={styles.stockFill} style={{ width: `${(cupos / 50) * 100}%` }}></div>
            </div>
            <p className={styles.stockText}>{cupos}/50 Cupos Reservados</p>
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
            <Image src="/logo.png" alt="DX Vida" width={40} height={40} style={{ objectFit: 'contain' }} />
            Diagnosticando Vida
          </div>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Diagnosticando Vida. Todos los derechos reservados.
          </p>
        </footer>

        {/* Floating WhatsApp */}
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.floatingWsp} aria-label="Contactar por WhatsApp">
          <div style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <WhatsAppIcon />
          </div>
        </a>

      </div>
    </>
  );
}