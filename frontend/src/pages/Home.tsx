import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBookOpen, FaAward, FaCheckCircle, FaChevronRight, FaRocket, FaHandshake, FaLightbulb, FaChartLine, FaBullseye } from 'react-icons/fa';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

// Componente para contador animado (simplificado)
const StatCard = ({ icon: Icon, value, label, delay = 0 }: any) => {
  return (
    <Reveal delay={delay} width="100%" className="flex justify-center">
      <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center w-full max-w-sm">
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
          <Icon className="w-8 h-8 text-primary group-hover:text-white" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-heading font-bold text-slate-900 mb-2">{value}</span>
          <span className="text-slate-500 font-medium">{label}</span>
        </div>
      </div>
    </Reveal>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Elevamos el rendimiento de tu organización",
      highlight: "Consultoría Estratégica",
      subtitle: "Soluciones a medida para empresas que buscan liderar su sector a través de la eficiencia y el desarrollo del talento.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      cta: "Servicios de Consultoría",
      ctaLink: "/asesoria-consultoria"
    },
    {
      title: "Tu equipo, nuestro mayor proyecto de éxito",
      highlight: "TYX Academy",
      subtitle: "Programas de capacitación técnica y directiva diseñados para cerrar brechas de competencias y potenciar resultados.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
      cta: "Explorar TYX Academy",
      ctaLink: "/recursos/cursos"
    }
  ];

  const clients = [
    { name: "Empresa 1", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" }, // Placeholders logos
    { name: "Empresa 2", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" },
    { name: "Empresa 3", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" },
    { name: "Empresa 4", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" },
    { name: "Empresa 5", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" },
    { name: "Empresa 6", logo: "https://images.unsplash.com/photo-1621319280601-57685dc41320?w=200&h=100&fit=crop&auto=format&q=80" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <SEO
        title="Inicio"
        description="Líderes en consultoría estratégica y capacitación corporativa. Transformamos desafíos en oportunidades para tu empresa."
      />

      {/* Hero Section Modernizado */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 md:pt-40">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                    {slides[currentSlide].highlight}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black mb-8 leading-[1.1] text-white">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="group relative px-10 py-5 bg-secondary text-primary-dark rounded-xl font-black text-lg hover:bg-white transition-all duration-300 shadow-2xl shadow-secondary/30 overflow-hidden text-center"
                  >
                    <span className="relative z-10">{slides[currentSlide].cta}</span>
                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/contacto"
                    className="px-10 py-5 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/20 text-center"
                  >
                    Solicitar Diagnóstico →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Floating Shapes Decorativas */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      </section>

      {/* Partner/Clients Showcase Section (Carrusel Infinito) */}
      <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
            Empresas que confían en nosotros
          </p>
        </div>

        <div className="flex relative items-center overflow-hidden h-20">
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center justify-center min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto grayscale brightness-0 opacity-40 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section Modernizado */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatCard icon={FaAward} value="15+" label="Años de Trayectoria Continua" delay={0.1} />
            <StatCard icon={FaUsers} value="200+" label="Empresas Asesoradas con Éxito" delay={0.2} />
            <StatCard icon={FaBookOpen} value="50+" label="Programas de Formación Activos" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Servicios Premium Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Reveal width="100%" className="flex flex-col items-center text-center">
              <span className="text-secondary font-black uppercase tracking-widest text-sm mb-4 inline-block">Soluciones Integrales</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Nuestras áreas de especialidad</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Combinamos visión estratégica con ejecución técnica para transformar cada aspecto de tu organización.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaChartLine, title: "Consultoría Estratégica", desc: "Rediseño de modelos de negocio y planes de expansión de alto nivel." },
              { icon: FaUsers, title: "Gestión del Talento", desc: "Optimización de capital humano y cultura organizacional transformadora." },
              { icon: FaBookOpen, title: "Formación Ejecutiva", desc: "Programas de capacitación in-company adaptados a desafíos reales." },
              { icon: FaRocket, title: "Transformación Digital", desc: "Adopción de tecnologías emergentes para optimizar la cadena de valor." },
              { icon: FaBullseye, title: "Eficiencia Operativa", desc: "Análisis y mejora de procesos críticos mediante metodologías Lean." },
              { icon: FaHandshake, title: "Coaching Directivo", desc: "Desarrollo de liderazgo para juntas directivas y altos ejecutivos." }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:border-secondary/50">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/asesoria-consultoria" className="text-secondary font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Saber más <FaChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value Prop Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <Reveal>
                <span className="text-secondary font-black uppercase tracking-widest text-sm mb-4 inline-block">Nuestra Diferencia</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8 leading-tight">
                  Más que consultores, somos <span className="text-primary italic">aliados estratégicos</span> de tu crecimiento
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: FaRocket, title: "Metodologías de Alto Impacto", desc: "Aplicamos las últimas tendencias en gestión para resultados rápidos y sostenibles." },
                    { icon: FaHandshake, title: "Compromiso de Resultados", desc: "No solo entregamos reportes, acompañamos la ejecución de cada estrategia." },
                    { icon: FaLightbulb, title: "Visión Innovadora", desc: "Cuestionamos el status quo para encontrar nuevas rutas hacia la excelencia." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <Reveal delay={0.3}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                    alt="Trabajo en equipo"
                    className="w-full h-auto"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-3xl -z-10 rotate-12" />
                <div className="absolute -bottom-6 -left-6 px-8 py-4 bg-white shadow-xl rounded-2xl z-20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <FaCheckCircle />
                  </div>
                  <span className="font-bold text-slate-800">Calidad Certificada ISO</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Modernizado */}
      <section className="py-32 relative bg-primary overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
              ¿Empezamos a trazar tu <span className="text-secondary underline decoration-4 underline-offset-8">hoja de ruta</span>?
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Únete a las empresas que ya están transformando su futuro con nuestra asesoría estratégica integral.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <Link
              to="/contacto"
              className="inline-flex items-center space-x-3 px-12 py-6 bg-secondary text-primary-dark rounded-2xl font-black text-xl hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300"
            >
              <span>Agendar Sesión Gratuita</span>
              <FaChevronRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
