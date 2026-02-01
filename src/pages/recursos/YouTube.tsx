import PageHeader from '../../components/PageHeader';
import { FaYoutube, FaPlay, FaEye } from 'react-icons/fa';

export default function YouTubePage() {
  const videos = [
    {
      titulo: 'Cómo implementar OKRs en tu organización',
      descripcion:
        'Guía paso a paso para implementar objetivos y resultados clave que realmente impulsen tu negocio.',
      duracion: '18:45',
      vistas: '12.5K',
      categoria: 'Estrategia',
      thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      titulo: '5 errores comunes en entrevistas de trabajo',
      descripcion:
        'Los errores más frecuentes que cometen los reclutadores y cómo evitarlos para seleccionar mejor talento.',
      duracion: '15:32',
      vistas: '8.2K',
      categoria: 'Recursos Humanos',
      thumbnail: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      titulo: 'Liderazgo situacional: adapta tu estilo',
      descripcion:
        'Aprende a adaptar tu estilo de liderazgo según la situación y las necesidades de tu equipo.',
      duracion: '22:18',
      vistas: '15.7K',
      categoria: 'Liderazgo',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      titulo: 'Metodología Lean: casos de éxito reales',
      descripcion:
        'Analizamos casos reales de empresas que implementaron lean y los resultados que obtuvieron.',
      duracion: '25:40',
      vistas: '10.3K',
      categoria: 'Productividad',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      titulo: 'Feedback efectivo: el arte de mejorar equipos',
      descripcion:
        'Técnicas probadas para dar feedback constructivo que realmente mejore el desempeño de tu equipo.',
      duracion: '16:55',
      vistas: '9.8K',
      categoria: 'Gestión de Equipos',
      thumbnail: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      titulo: 'Cultura organizacional: de la teoría a la práctica',
      descripcion:
        'Cómo diseñar e implementar una cultura organizacional que realmente se viva en el día a día.',
      duracion: '20:12',
      vistas: '11.4K',
      categoria: 'Cultura',
      thumbnail: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const playlists = [
    {
      titulo: 'Serie: Fundamentos del Liderazgo',
      videos: 8,
      descripcion: 'Curso completo sobre las bases del liderazgo efectivo',
    },
    {
      titulo: 'Gestión de Recursos Humanos',
      videos: 12,
      descripcion: 'Mejores prácticas en reclutamiento, desarrollo y retención',
    },
    {
      titulo: 'Estrategia y Planificación',
      videos: 10,
      descripcion: 'Herramientas para la planificación estratégica empresarial',
    },
    {
      titulo: 'Casos de Éxito',
      videos: 15,
      descripcion: 'Entrevistas y análisis de empresas exitosas',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Canal de YouTube"
        subtitle="Tutoriales, masterclasses y análisis sobre gestión empresarial, liderazgo y desarrollo organizacional."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FaYoutube className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Aprende con contenido de calidad
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Publicamos contenido semanal con consejos prácticos, tutoriales y análisis de casos
              reales que puedes aplicar inmediatamente en tu organización.
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
              <span>Suscribirse al canal</span>
            </a>
          </div>

          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Videos recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FaPlay className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                    {video.duracion}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {video.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {video.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{video.descripcion}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaEye className="w-4 h-4" />
                      <span>{video.vistas} vistas</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
            Listas de reproducción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FaPlay className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {playlist.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{playlist.descripcion}</p>
                <p className="text-primary text-sm font-medium">{playlist.videos} videos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-12 text-white text-center">
            <FaYoutube className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">
              No te pierdas ningún contenido
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Activa las notificaciones y sé el primero en ver nuestros nuevos videos cada semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
                <span>Ir al canal</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-light text-white rounded-lg font-semibold hover:bg-primary transition-colors border-2 border-white/20"
              >
                <FaPlay className="w-5 h-5" />
                <span>Ver playlist completa</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
