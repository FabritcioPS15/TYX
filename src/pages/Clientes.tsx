import PageHeader from '../components/PageHeader';
import { FaQuoteLeft, FaChartLine, FaUsers, FaBullseye, FaBuilding } from 'react-icons/fa';

export default function Clientes() {
  const testimonios = [
    {
      nombre: 'María González',
      cargo: 'CEO',
      empresa: 'TechCorp Solutions',
      imagen: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonio:
        'El equipo de consultoría nos ayudó a reestructurar completamente nuestro departamento de RRHH. Los resultados superaron nuestras expectativas y logramos reducir la rotación de personal en un 40%.',
    },
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'Director de Operaciones',
      empresa: 'Industrias Avance',
      imagen: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonio:
        'La implementación de metodologías lean transformó nuestras operaciones. Aumentamos la eficiencia en un 35% y mejoramos significativamente la calidad de nuestros productos.',
    },
    {
      nombre: 'Ana Martínez',
      cargo: 'Directora de Recursos Humanos',
      empresa: 'Global Services Inc.',
      imagen: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonio:
        'Los programas de formación personalizados elevaron las competencias de nuestro equipo directivo. El coaching ejecutivo fue especialmente valioso para nuestros líderes.',
    },
    {
      nombre: 'Roberto Sánchez',
      cargo: 'Gerente General',
      empresa: 'Innovatech',
      imagen: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonio:
        'El acompañamiento en nuestro proceso de transformación digital fue fundamental. Nos ayudaron a definir una estrategia clara y a implementarla con éxito.',
    },
  ];

  const casosExito = [
    {
      empresa: 'TechCorp Solutions',
      sector: 'Tecnología',
      desafio: 'Alta rotación de personal y clima laboral deteriorado',
      solucion:
        'Reestructuración del área de RRHH, implementación de nuevos procesos de selección y programas de desarrollo.',
      resultados: [
        'Reducción del 40% en rotación de personal',
        'Aumento del 55% en satisfacción laboral',
        'Mejora del 30% en productividad del equipo',
      ],
      icon: FaUsers,
    },
    {
      empresa: 'Industrias Avance',
      sector: 'Manufactura',
      desafio: 'Procesos ineficientes y altos costos operativos',
      solucion:
        'Implementación de metodologías lean, rediseño de procesos críticos y formación del equipo operativo.',
      resultados: [
        'Incremento del 35% en eficiencia operativa',
        'Reducción del 25% en costos de producción',
        'Mejora del 40% en indicadores de calidad',
      ],
      icon: FaChartLine,
    },
    {
      empresa: 'Global Services Inc.',
      sector: 'Servicios',
      desafio: 'Liderazgo débil y falta de dirección estratégica',
      solucion:
        'Programa de coaching ejecutivo, desarrollo de plan estratégico y formación en liderazgo para mandos medios.',
      resultados: [
        'Alineación del 100% del equipo directivo',
        'Definición clara de objetivos estratégicos',
        'Aumento del 45% en engagement del equipo',
      ],
      icon: FaBullseye,
    },
  ];

  const sectores = [
    'Tecnología',
    'Manufactura',
    'Servicios',
    'Retail',
    'Salud',
    'Educación',
    'Finanzas',
    'Construcción',
    'Logística',
    'Telecomunicaciones',
    'Energía',
    'Alimentación',
  ];

  return (
    <div>
      <PageHeader
        title="Nuestros Clientes"
        subtitle="Más de 200 organizaciones confían en nosotros para impulsar su crecimiento y desarrollo organizacional."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
              Clientes de diversos sectores
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos con empresas de diferentes industrias, desde startups en crecimiento hasta
              grandes corporaciones establecidas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <FaBuilding className="w-12 h-12 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-900 mb-6 text-center">
              Sectores en los que trabajamos
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {sectores.map((sector, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <FaQuoteLeft className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">
                  "{testimonio.testimonio}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonio.cargo} - {testimonio.empresa}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
              Casos de éxito
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Resultados reales y medibles que hemos logrado junto a nuestros clientes.
            </p>
          </div>

          <div className="space-y-12">
            {casosExito.map((caso, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 md:p-12">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <caso.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-heading font-bold text-gray-900">
                        {caso.empresa}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {caso.sector}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">El desafío</h4>
                    <p className="text-gray-700 leading-relaxed">{caso.desafio}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">La solución</h4>
                    <p className="text-gray-700 leading-relaxed">{caso.solucion}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Resultados</h4>
                    <ul className="space-y-2">
                      {caso.resultados.map((resultado, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FaChartLine className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{resultado}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus
              objetivos empresariales.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
