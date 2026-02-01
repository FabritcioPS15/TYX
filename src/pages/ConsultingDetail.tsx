import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import { Reveal } from '../components/Reveal';

export default function ConsultingDetail() {
    const { id } = useParams();

    // Data map for demonstration
    const servicesMap: Record<string, any> = {
        'tyx-academy': {
            title: 'TYX Academy',
            category: 'Asesoría y Consultoría',
            description: 'Capacitación integral para líderes y equipos en metodologías ágiles, liderazgo y gestión del cambio.',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Mejora de competencias', 'Liderazgo efectivo', 'Gestión del cambio'],
            methodology: 'Enfoque práctico basado en casos reales y dinámicas de grupo.'
        },
        'gestion-empresarial': {
            title: 'Gestión Empresarial',
            category: 'Asesoría y Consultoría',
            description: 'Optimización de modelos de negocio y estrategias corporativas para maximizar la rentabilidad y el crecimiento sostenible.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Rentabilidad', 'Estrategia clara', 'Eficiencia operativa'],
            methodology: 'Diagnóstico profundo y plan de acción estratégico.'
        },
        'gestion-publica': {
            title: 'Gestión Pública',
            category: 'Asesoría',
            description: 'Asesoramiento especializado para entidades públicas en modernización del estado y gestión por procesos.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Modernización', 'Transparencia', 'Eficiencia pública'],
            methodology: 'Alineamiento con normativas y estándares de calidad.'
        },
        'gestion-talento': {
            title: 'Gestión del Talento',
            category: 'Consultoría',
            description: 'Estrategias para atraer, desarrollar y retener el mejor talento humano en tu organización.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Retención de talento', 'Clima laboral', 'Desarrollo profesional'],
            methodology: 'Evaluación de competencias y planes de carrera.'
        },
        'transformacion-digital': {
            title: 'Transformación Digital',
            category: 'Consultoría',
            description: 'Acompañamiento en la adopción de nuevas tecnologías y digitalización de procesos.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Digitalización', 'Automatización', 'Innovación'],
            methodology: 'Hoja de ruta digital y gestión del cambio tecnológico.'
        },
        'marketing-estrategico': {
            title: 'Marketing Estratégico',
            category: 'Asesoría',
            description: 'Desarrollo de planes de marketing y posicionamiento de marca para alcanzar nuevos mercados.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Posicionamiento', 'Ventas', 'Reconocimiento de marca'],
            methodology: 'Análisis de mercado y estrategias omnicanal.'
        },
        'finanzas-corporativas': {
            title: 'Finanzas Corporativas',
            category: 'Asesoría y Consultoría',
            description: 'Asesoría financiera para la toma de decisiones, valoración de empresas y gestión de riesgos.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Salud financiera', 'Inversión inteligente', 'Control de riesgos'],
            methodology: 'Análisis financiero y proyecciones económicas.'
        },
        'gestion-proyectos': {
            title: 'Gestión de Proyectos',
            category: 'Consultoría',
            description: 'Implementación de metodologías PMO para asegurar el éxito en la ejecución de proyectos.',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Cumplimiento de plazos', 'Calidad', 'Presupuesto controlado'],
            methodology: 'Estándares PMI y metodologías ágiles.'
        },
        'calidad-procesos': {
            title: 'Calidad y Procesos',
            category: 'Asesoría',
            description: 'Optimización de procesos y gestión de la calidad bajo normas ISO y estándares internacionales.',
            image: 'https://images.unsplash.com/photo-1507537297725-24a1c43253ad?auto=format&fit=crop&q=80&w=1200',
            benefits: ['Certificación ISO', 'Mejora continua', 'Satisfacción del cliente'],
            methodology: 'Mapeo de procesos y auditorías internas.'
        }
    };

    const service = id ? servicesMap[id] : null;

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0B1120] flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Servicio no encontrado</h2>
                    <Link to="/asesoria-consultoria" className="text-primary hover:text-primary-light underline">
                        Volver a servicios
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0B1120] min-h-screen text-gray-100 pb-20">
            <div className="relative h-72 md:h-96">
                <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link to="/asesoria-consultoria" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                            <FaArrowLeft className="mr-2" /> Volver a servicios
                        </Link>
                        <Reveal>
                            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider mb-4 inline-block">
                                {service.category}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-4 max-w-4xl">
                                {service.title}
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2">
                        <Reveal delay={0.2}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 md:p-8 mb-8">
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">Descripción del servicio</h3>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 md:p-8 mb-8">
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">Metodología</h3>
                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    {service.methodology}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6">Beneficios Clave</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit: string, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm md:text-base">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-1">
                        <Reveal delay={0.5}>
                            <div className="bg-[#1a2333] rounded-xl p-6 md:p-8 sticky top-24 border border-gray-700">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">¿Te interesa este servicio?</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Agenda una reunión inicial gratuita para discutir tus necesidades específicas.
                                </p>

                                <Link
                                    to="/contacto"
                                    className="block w-full py-4 text-center bg-primary hover:bg-primary-light text-white rounded-lg font-bold text-lg mb-4 transition-colors shadow-lg shadow-primary/25"
                                >
                                    Solicitar Propuesta
                                </Link>

                                <div className="flex items-center justify-center text-gray-400 text-sm">
                                    <FaEnvelope className="mr-2" /> Respuesta en menos de 24h
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </div>
    );
}
