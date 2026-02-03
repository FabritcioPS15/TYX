import PageHeader from '../../components/PageHeader';
import { FaMicrophone, FaPlay, FaClock, FaHeadphones } from 'react-icons/fa';
import { Reveal } from '../../components/Reveal';

export default function Podcast() {
  const episodios = [
    {
      numero: 24,
      titulo: 'El futuro del liderazgo en la era digital',
      invitado: 'Ana Martínez, CEO de TechCorp',
      duracion: '45 min',
      fecha: '20 de Enero, 2024',
      descripcion:
        'Conversamos sobre cómo está evolucionando el liderazgo en un mundo cada vez más digital y qué competencias necesitan desarrollar los líderes del futuro.',
      categoria: 'Liderazgo',
    },
    {
      numero: 23,
      titulo: 'Gestión del talento en organizaciones remotas',
      invitado: 'Carlos Rodríguez, Director de RRHH',
      duracion: '52 min',
      fecha: '15 de Enero, 2024',
      descripcion:
        'Exploramos los desafíos y mejores prácticas para atraer, desarrollar y retener talento en equipos distribuidos geográficamente.',
      categoria: 'Recursos Humanos',
    },
    {
      numero: 22,
      titulo: 'Cultura organizacional: más allá de las palabras',
      invitado: 'Laura Gómez, Consultora Organizacional',
      duracion: '48 min',
      fecha: '10 de Enero, 2024',
      descripcion:
        'Analizamos cómo construir una cultura organizacional auténtica que realmente impulse el compromiso y rendimiento de los equipos.',
      categoria: 'Cultura',
    },
    {
      numero: 21,
      titulo: 'Transformación digital: errores comunes y cómo evitarlos',
      invitado: 'Miguel Fernández, CTO',
      duracion: '55 min',
      fecha: '5 de Enero, 2024',
      descripcion:
        'Discutimos los principales obstáculos en procesos de transformación digital y estrategias para superarlos exitosamente.',
      categoria: 'Transformación',
    },
    {
      numero: 20,
      titulo: 'Innovación en tiempos de incertidumbre',
      invitado: 'Patricia López, Directora de Innovación',
      duracion: '43 min',
      fecha: '28 de Diciembre, 2023',
      descripcion:
        'Cómo mantener la innovación activa incluso en contextos de alta incertidumbre y cambios constantes en el mercado.',
      categoria: 'Innovación',
    },
    {
      numero: 19,
      titulo: 'Coaching ejecutivo: herramientas para el autodesarrollo',
      invitado: 'Roberto Sánchez, Coach Ejecutivo',
      duracion: '50 min',
      fecha: '20 de Diciembre, 2023',
      descripcion:
        'Técnicas y herramientas prácticas de coaching que los líderes pueden aplicar para su propio desarrollo y el de sus equipos.',
      categoria: 'Coaching',
    },
  ];

  const plataformas = [
    { nombre: 'Spotify', icono: FaHeadphones },
    { nombre: 'Apple Podcasts', icono: FaHeadphones },
    { nombre: 'Google Podcasts', icono: FaHeadphones },
    { nombre: 'YouTube', icono: FaPlay },
  ];

  return (
    <div className="bg-[#0B1120] min-h-screen text-gray-100">
      <PageHeader
        title="Podcast"
        subtitle="Conversaciones con líderes y expertos sobre gestión empresarial, liderazgo y desarrollo organizacional."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal width="100%">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMicrophone className="w-8 h-8 text-primary" />
              </div>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 text-center mx-auto">
                Liderazgo en Acción
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Cada semana entrevistamos a líderes, consultores y expertos que comparten sus
                experiencias, aprendizajes y mejores prácticas en gestión empresarial y desarrollo
                organizacional.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <div className="flex flex-wrap gap-4 justify-center">
                {plataformas.map((plataforma, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center space-x-2 px-6 py-3 bg-[#0f1623] border border-gray-800 rounded-lg hover:border-primary/50 hover:bg-[#1a2333] transition-all group"
                  >
                    <plataforma.icono className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{plataforma.nombre}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            {episodios.map((episodio, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div
                  className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <div className="text-center text-white">
                          <div className="text-sm font-medium mb-1 text-white/70">EP</div>
                          <div className="text-4xl font-heading font-bold">{episodio.numero}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs font-semibold rounded-full border border-primary/20">
                          {episodio.categoria}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <FaClock className="w-4 h-4 mr-1" />
                          {episodio.duracion}
                        </span>
                        <span className="text-sm text-gray-500">{episodio.fecha}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-2 group-hover:text-primary-light transition-colors">
                        {episodio.titulo}
                      </h3>
                      <p className="text-primary font-medium mb-3">Con {episodio.invitado}</p>
                      <p className="text-gray-400 leading-relaxed mb-6">{episodio.descripcion}</p>

                      <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
                        <FaPlay className="w-4 h-4" />
                        <span className="font-medium">Escuchar episodio</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Reveal>
              <button className="px-8 py-3 bg-gray-800 text-gray-300 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 hover:border-gray-600">
                Ver todos los episodios
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f1623] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <div className="bg-primary rounded-2xl p-6 md:p-12 text-white text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <FaMicrophone className="w-16 h-16 mx-auto mb-6 text-white/80" />
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">¿Quieres ser invitado?</h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Si eres un líder, experto o profesional con experiencia relevante que te gustaría
                  compartir, nos encantaría tenerte en nuestro podcast.
                </p>
                <a
                  href="/contacto"
                  className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Proponer tema o participación
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
