import PageHeader from '../../components/PageHeader';
import { FaFileAlt, FaDownload, FaCheckCircle, FaLock } from 'react-icons/fa';
import { Reveal } from '../../components/Reveal';

export default function Descargables() {
  const recursos = [
    {
      tipo: 'Guía',
      titulo: 'Guía completa de Planificación Estratégica',
      descripcion:
        'Metodología paso a paso para diseñar un plan estratégico efectivo con plantillas y ejemplos prácticos.',
      paginas: '45 páginas',
      categoria: 'Estrategia',
      gratis: true,
    },
    {
      tipo: 'Template',
      titulo: 'Plantilla de Evaluación de Desempeño 360°',
      descripcion:
        'Formato completo para implementar evaluaciones de desempeño 360 grados en tu organización.',
      paginas: '12 páginas',
      categoria: 'Recursos Humanos',
      gratis: true,
    },
    {
      tipo: 'Ebook',
      titulo: 'Liderazgo Transformacional en la Era Digital',
      descripcion:
        'Libro electrónico sobre las competencias del líder moderno y cómo desarrollarlas efectivamente.',
      paginas: '78 páginas',
      categoria: 'Liderazgo',
      gratis: false,
    },
    {
      tipo: 'Checklist',
      titulo: 'Checklist de Reclutamiento y Selección',
      descripcion:
        'Lista de verificación completa para estructurar un proceso de selección efectivo y eficiente.',
      paginas: '6 páginas',
      categoria: 'Recursos Humanos',
      gratis: true,
    },
    {
      tipo: 'Guía',
      titulo: 'Implementación de Metodologías Lean',
      descripcion:
        'Guía práctica para aplicar principios lean en tu organización y optimizar procesos.',
      paginas: '52 páginas',
      categoria: 'Productividad',
      gratis: true,
    },
    {
      tipo: 'Template',
      titulo: 'Canvas de Cultura Organizacional',
      descripcion:
        'Herramienta visual para diseñar y comunicar la cultura deseada en tu organización.',
      paginas: '8 páginas',
      categoria: 'Cultura',
      gratis: true,
    },
    {
      tipo: 'Whitepaper',
      titulo: 'El Futuro del Trabajo: Tendencias 2024',
      descripcion:
        'Análisis profundo de las principales tendencias que están transformando el mundo laboral.',
      paginas: '32 páginas',
      categoria: 'Investigación',
      gratis: false,
    },
    {
      tipo: 'Template',
      titulo: 'Dashboard de KPIs Empresariales',
      descripcion:
        'Plantilla de Excel con los principales indicadores de gestión empresarial configurables.',
      paginas: 'Archivo Excel',
      categoria: 'Gestión',
      gratis: true,
    },
    {
      tipo: 'Guía',
      titulo: 'Gestión del Cambio Organizacional',
      descripcion:
        'Metodología probada para liderar procesos de cambio con mínima resistencia y máximo impacto.',
      paginas: '38 páginas',
      categoria: 'Gestión del Cambio',
      gratis: true,
    },
  ];

  const categorias = [
    'Todas',
    'Estrategia',
    'Liderazgo',
    'Recursos Humanos',
    'Productividad',
    'Gestión del Cambio',
    'Cultura',
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen text-gray-100">
      <PageHeader
        title="Recursos Descargables"
        subtitle="Guías, plantillas, ebooks y herramientas prácticas para impulsar la gestión de tu organización."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%" className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recursos.map((recurso, index) => (
              <Reveal key={index} delay={index * 0.1} className="h-full">
                <div
                  className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaFileAlt className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    {recurso.gratis ? (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                        Gratis
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20 flex items-center gap-1">
                        <FaLock className="w-3 h-3" /> Premium
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full">
                      {recurso.tipo}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary-light text-xs font-medium rounded-full">
                      {recurso.categoria}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {recurso.titulo}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                    {recurso.descripcion}
                  </p>

                  <div className="text-xs text-gray-500 mb-6 font-mono tracking-wide">{recurso.paginas}</div>

                  <button className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors font-medium ${recurso.gratis
                    ? 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 cursor-not-allowed'
                    }`}>
                    {recurso.gratis ? (
                      <>
                        <FaDownload className="w-4 h-4" />
                        <span>Descargar ahora</span>
                      </>
                    ) : (
                      <>
                        <FaLock className="w-4 h-4" />
                        <span>Desbloquear acceso</span>
                      </>
                    )}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f1623] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <div className="bg-[#1a2333] border border-gray-800 rounded-2xl p-6 md:p-12 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-10">
                    <FaCheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                      Acceso a recursos premium
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                      Suscríbete para recibir acceso exclusivo a nuestros recursos premium, incluyendo
                      ebooks, investigaciones y herramientas avanzadas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg mt-1">
                        <FaCheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Recursos exclusivos</h4>
                        <p className="text-gray-400 text-sm">
                          Acceso a materiales premium no disponibles públicamente
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg mt-1">
                        <FaCheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Actualizaciones mensuales</h4>
                        <p className="text-gray-400 text-sm">
                          Nuevos recursos y plantillas cada mes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg mt-1">
                        <FaCheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Descuentos en cursos</h4>
                        <p className="text-gray-400 text-sm">
                          20% de descuento en todos nuestros programas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/20 p-2 rounded-lg mt-1">
                        <FaCheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Comunidad privada</h4>
                        <p className="text-gray-400 text-sm">
                          Acceso a grupo exclusivo de profesionales
                        </p>
                      </div>
                    </div>
                  </div>

                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="flex-1 px-4 py-4 bg-[#0B1120] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-light transition-colors whitespace-nowrap shadow-lg shadow-primary/20"
                    >
                      Obtener acceso premium
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
