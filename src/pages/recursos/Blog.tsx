import PageHeader from '../../components/PageHeader';
import { FaCalendarAlt, FaTags, FaArrowRight, FaSearch } from 'react-icons/fa';
import { Reveal } from '../../components/Reveal';

export default function Blog() {
  const articulos = [
    {
      categoria: 'Liderazgo',
      titulo: '5 competencias clave del líder del siglo XXI',
      extracto:
        'Descubre las habilidades esenciales que todo líder moderno debe desarrollar para dirigir equipos de alto rendimiento en entornos cambiantes.',
      fecha: '15 de Enero, 2024',
      imagen: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      categoria: 'Recursos Humanos',
      titulo: 'Cómo diseñar un proceso de reclutamiento efectivo',
      extracto:
        'Guía práctica para estructurar un proceso de selección que atraiga y retenga el mejor talento para tu organización.',
      fecha: '10 de Enero, 2024',
      imagen: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      categoria: 'Estrategia',
      titulo: 'Planificación estratégica: metodologías que funcionan',
      extracto:
        'Análisis de las principales metodologías de planificación estratégica y cómo aplicarlas en diferentes contextos empresariales.',
      fecha: '5 de Enero, 2024',
      imagen: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      categoria: 'Productividad',
      titulo: 'Lean Management: reducir desperdicios y aumentar valor',
      extracto:
        'Implementa metodologías lean en tu organización para optimizar procesos y mejorar la eficiencia operativa.',
      fecha: '28 de Diciembre, 2023',
      imagen: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      categoria: 'Cultura Organizacional',
      titulo: 'Construyendo una cultura de innovación',
      extracto:
        'Estrategias probadas para fomentar la innovación y creatividad en todos los niveles de tu organización.',
      fecha: '20 de Diciembre, 2023',
      imagen: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      categoria: 'Gestión del Cambio',
      titulo: 'Resistencia al cambio: cómo superarla',
      extracto:
        'Técnicas efectivas para gestionar la resistencia al cambio y facilitar transiciones exitosas en tu empresa.',
      fecha: '15 de Diciembre, 2023',
      imagen: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categorias = [
    'Todas',
    'Liderazgo',
    'Recursos Humanos',
    'Estrategia',
    'Productividad',
    'Cultura Organizacional',
    'Gestión del Cambio',
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen text-gray-100">
      <PageHeader
        title="Blog"
        subtitle="Artículos, insights y mejores prácticas sobre gestión empresarial, liderazgo y desarrollo organizacional."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%" className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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

              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Buscar artículo..."
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg py-2 pl-4 pr-10 text-gray-300 focus:outline-none focus:border-primary"
                />
                <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <article
                  className="bg-[#0f1623] border border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={articulo.imagen}
                      alt={articulo.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                        {articulo.categoria}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="w-3 h-3 text-primary-light" />
                        <span>{articulo.fecha}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
                      {articulo.titulo}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 flex-grow text-sm">
                      {articulo.extracto}
                    </p>
                    <button className="text-primary hover:text-white font-medium flex items-center space-x-2 transition-colors mt-auto">
                      <span>Leer artículo</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Reveal>
              <button className="px-8 py-3 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 hover:border-gray-600">
                Cargar más artículos
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f1623] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <div className="bg-[#1a2333] rounded-2xl p-6 md:p-12 text-center border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <FaTags className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                  Suscríbete a nuestro newsletter
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Recibe nuestros últimos artículos, recursos exclusivos y novedades directamente en tu
                  correo.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-3 bg-[#0B1120] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
                  >
                    Suscribirse
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
