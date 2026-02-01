import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaUsers, FaBookOpen, FaChartLine, FaAward, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transformamos empresas a través de la consultoría estratégica",
      subtitle: "Asesoría profesional, consultoría especializada y formación de alto impacto para organizaciones que buscan la excelencia operativa.",
      align: "left",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      cta: "Conoce nuestros servicios",
      ctaLink: "/asesoria-consultoria"
    },
    {
      title: "Impulsa el talento de tu equipo con TYX Academy",
      subtitle: "Programas de capacitación diseñados para desarrollar las competencias críticas de tus equipos y potenciar su rendimiento.",
      align: "center",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
      cta: "Explorar cursos",
      ctaLink: "/recursos/cursos"
    },
    {
      title: "Liderando la transformación digital y estratégica",
      subtitle: "Acompañamos a tu organización en la adopción de nuevas tecnologías y la mejora de procesos críticos.",
      align: "right",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
      cta: "Solicitar asesoría",
      ctaLink: "/contacto"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
              style={{ backgroundImage: `url(${slides[currentSlide].image})`, transform: 'scale(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/40" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className={`max-w-3xl ${slides[currentSlide].align === 'center' ? 'mx-auto text-center' :
            slides[currentSlide].align === 'right' ? 'ml-auto text-right' : ''
            }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Soluciones Estratégicas
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-white">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base md:text-xl text-white/90 mb-10 leading-relaxed text-balance max-w-2xl mx-auto md:mx-0">
                  {slides[currentSlide].subtitle}
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 ${slides[currentSlide].align === 'center' ? 'justify-center' :
                  slides[currentSlide].align === 'right' ? 'justify-end' : ''
                  }`}>
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="px-8 py-4 bg-secondary text-primary-dark rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-secondary/20 text-center"
                  >
                    {slides[currentSlide].cta}
                  </Link>
                  <Link
                    to="/contacto"
                    className="px-8 py-4 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/20 text-center"
                  >
                    Más información
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 group"
        >
          <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 group"
        >
          <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-10 h-2 bg-secondary' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1} className="w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaBullseye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-heading font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-heading font-bold text-primary mb-2">200+</h3>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaBookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-heading font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Cursos y programas</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal width="100%">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Nuestros servicios
              </h2>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Soluciones integrales de consultoría y formación diseñadas para impulsar el
                crecimiento de tu organización
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Consultoría estratégica
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Definición de objetivos, análisis de mercado y desarrollo de planes de acción para
                alcanzar tus metas empresariales.
              </p>
              <Link
                to="/asesoria-consultoria"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Gestión de talento
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Reclutamiento, desarrollo y retención de talento clave para tu organización con
                metodologías probadas.
              </p>
              <Link
                to="/asesoria-consultoria"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaBookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Formación empresarial
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Programas de capacitación diseñados para desarrollar las competencias críticas de
                tus equipos.
              </p>
              <Link
                to="/recursos/cursos"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaAward className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Transformación organizacional
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Acompañamiento en procesos de cambio cultural y estructural para adaptarse a nuevos
                desafíos.
              </p>
              <Link
                to="/asesoria-consultoria"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaBullseye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Optimización de procesos
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Análisis y mejora de operaciones para incrementar la eficiencia y reducir costos
                operativos.
              </p>
              <Link
                to="/asesoria-consultoria"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaCheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Coaching ejecutivo
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Desarrollo de liderazgo personalizado para ejecutivos y equipos directivos de alto
                nivel.
              </p>
              <Link
                to="/asesoria-consultoria"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Saber más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                ¿Listo para transformar tu organización?
              </h2>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Agenda una consulta sin compromiso y descubre cómo podemos ayudarte a alcanzar tus
                objetivos empresariales.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <Link
                to="/contacto"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar consulta gratuita
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
