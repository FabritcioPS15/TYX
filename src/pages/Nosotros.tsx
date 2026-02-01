import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaAward,
  FaCheckCircle,
} from 'react-icons/fa';

export default function Nosotros() {
  const valores = [
    {
      icon: FaShieldAlt,
      title: 'Integridad',
      description: 'Actuamos con transparencia y ética en todas nuestras relaciones profesionales.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de agregar valor a nuestros clientes.',
    },
    {
      icon: FaHeart,
      title: 'Compromiso',
      description: 'Nos dedicamos al éxito de nuestros clientes como si fuera nuestro propio éxito.',
    },
    {
      icon: FaUsers,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes para alcanzar objetivos comunes.',
    },
    {
      icon: FaAward,
      title: 'Excelencia',
      description: 'Mantenemos los más altos estándares de calidad en todos nuestros servicios.',
    },
    {
      icon: FaBullseye,
      title: 'Orientación a resultados',
      description: 'Nos enfocamos en generar impacto medible y sostenible en las organizaciones.',
    },
  ];

  const propuestasValor = [
    'Metodologías probadas y adaptadas a cada contexto empresarial',
    'Equipo de consultores con amplia experiencia multisectorial',
    'Enfoque integral que combina estrategia, personas y procesos',
    'Acompañamiento continuo durante toda la implementación',
    'Resultados medibles y sostenibles en el tiempo',
    'Formación práctica que transforma conocimiento en acción',
  ];

  return (
    <div>
      <PageHeader
        title="Nosotros"
        subtitle="Conoce quiénes somos, qué nos mueve y cómo trabajamos para transformar organizaciones."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal width="100%">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FaBullseye className="w-8 h-8 text-primary" />
              </div>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 text-center">Nuestro propósito</h2>
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                Ayudamos a las organizaciones a desarrollar todo su potencial a través de consultoría
                estratégica y formación de alto impacto. Creemos que cada empresa tiene la capacidad
                de alcanzar la excelencia cuando cuenta con la orientación, metodología y
                acompañamiento adecuados.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              ¿Quiénes somos?
            </h2>
          </Reveal>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <Reveal width="100%" delay={0.1}>
              <p className="text-base md:text-lg">
                Somos un equipo de profesionales especializados en consultoría empresarial, gestión
                del talento y formación corporativa. Con más de 15 años de experiencia en el mercado,
                hemos acompañado a más de 200 organizaciones en sus procesos de transformación y
                crecimiento.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.2}>
              <p className="text-base md:text-lg">
                Nuestro equipo está conformado por consultores certificados con amplia trayectoria en
                diferentes industrias, lo que nos permite ofrecer soluciones adaptadas a las
                necesidades específicas de cada cliente. Combinamos experiencia práctica con
                metodologías actualizadas para garantizar resultados tangibles y sostenibles.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.3}>
              <p className="text-base md:text-lg">
                Trabajamos con empresas de todos los tamaños, desde startups en fase de crecimiento
                hasta grandes corporaciones que buscan optimizar sus operaciones y desarrollar su
                capital humano. Cada proyecto es único, y adaptamos nuestro enfoque para maximizar el
                impacto en cada organización.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Reveal>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaBullseye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">Misión</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Proporcionar servicios de consultoría y formación de excelencia que impulsen el
                  crecimiento sostenible de las organizaciones, desarrollando sus capacidades
                  estratégicas, operativas y de talento humano mediante metodologías probadas y un
                  acompañamiento cercano y comprometido.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.2}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaEye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">Visión</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Ser reconocidos como el socio estratégico de referencia para organizaciones que
                  buscan la excelencia operativa y el desarrollo integral de su talento, destacando
                  por la calidad de nuestros servicios, la efectividad de nuestras soluciones y el
                  impacto medible en los resultados de nuestros clientes.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <Reveal key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <valor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
            Nuestra propuesta de valor
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propuestasValor.map((propuesta, index) => (
                <Reveal key={index} delay={index * 0.1} width="100%">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{propuesta}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
              Certificaciones y reconocimientos
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal delay={0.1} className="w-full">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm h-full">
                <FaAward className="w-12 h-12 text-primary mb-3" />
                <p className="text-center text-sm text-gray-700 font-medium">ISO 9001:2015</p>
                <p className="text-center text-xs text-gray-500 mt-1">Gestión de calidad</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="w-full">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm h-full">
                <FaAward className="w-12 h-12 text-primary mb-3" />
                <p className="text-center text-sm text-gray-700 font-medium">ICF Certified</p>
                <p className="text-center text-xs text-gray-500 mt-1">Coaching profesional</p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="w-full">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm h-full">
                <FaAward className="w-12 h-12 text-primary mb-3" />
                <p className="text-center text-sm text-gray-700 font-medium">PMI Registered</p>
                <p className="text-center text-xs text-gray-500 mt-1">Gestión de proyectos</p>
              </div>
            </Reveal>
            <Reveal delay={0.4} className="w-full">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm h-full">
                <FaAward className="w-12 h-12 text-primary mb-3" />
                <p className="text-center text-sm text-gray-700 font-medium">SHRM Certified</p>
                <p className="text-center text-xs text-gray-500 mt-1">Recursos humanos</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
