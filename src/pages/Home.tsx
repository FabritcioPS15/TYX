import { Link } from 'react-router-dom';
import { FaBullseye, FaUsers, FaBookOpen, FaChartLine, FaAward, FaCheckCircle } from 'react-icons/fa';
import { Reveal } from '../components/Reveal';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Transformamos empresas a través de la consultoría estratégica
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-balance">
                Asesoría profesional, consultoría especializada y formación de alto impacto para
                organizaciones que buscan la excelencia operativa.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/asesoria-consultoria"
                  className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Conoce nuestros servicios
                </Link>
                <Link
                  to="/contacto"
                  className="px-8 py-4 bg-primary-light text-white rounded-lg font-semibold hover:bg-primary transition-colors text-center border-2 border-white/20"
                >
                  Solicitar consulta
                </Link>
              </div>
            </Reveal>
          </div>
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
