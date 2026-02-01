import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaUsers, FaLaptop, FaTag, FaCheckCircle, FaArrowLeft, FaChevronDown, FaChevronUp, FaStar, FaWhatsapp } from 'react-icons/fa';
import { Reveal } from '../../components/Reveal';

export default function CourseDetail() {
    const { id } = useParams();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Extended data map with instructors and FAQs
    const themeMap: Record<string, any> = {
        'liderazgo-emocional': {
            title: 'Inteligencia Emocional para el Éxito Profesional',
            description: 'Desarrolla la capacidad de identificar, comprender y gestionar las emociones propias y ajenas para fortalecer relaciones profesionales.',
            level: 'Intermedio',
            duration: '90 minutos',
            students: 1500,
            modality: 'Virtual',
            category: 'Desarrollo Personal',
            price: 30.00,
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
            modules: ['Fundamentos de IE', 'Autoconciencia', 'Autogestión', 'Empatía y Habilidades Sociales'],
            instructor: {
                name: 'Dra. Elena Vasquez',
                role: 'Psicóloga Organizacional',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
                bio: 'Especialista en comportamiento humano con más de 15 años de experiencia asesorando a líderes de Fortune 500.'
            },
            faqs: [
                {
                    question: '¿Necesito conocimientos previos?',
                    answer: 'No, este curso está diseñado para comenzar desde los fundamentos y avanzar progresivamente.'
                },
                {
                    question: '¿El certificado es válido internacionalmente?',
                    answer: 'Sí, nuestros certificados son reconocidos y pueden ser añadidos directamente a tu perfil de LinkedIn.'
                }
            ]
        },
        'comunicacion-asertiva': {
            title: 'Comunicación asertiva y Escucha activa',
            description: 'Potencia la capacidad de expresar ideas y necesidades con claridad y respeto, promoviendo una comunicación efectiva.',
            level: 'Básico',
            duration: '75 minutos',
            students: 1000,
            modality: 'Virtual',
            category: 'Desarrollo Personal',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
            modules: ['Estilos de Comunicación', 'Técnicas de Asertividad', 'Escucha Activa', 'Feedback Constructivo'],
            instructor: {
                name: 'Carlos Mendez',
                role: 'Consultor de Comunicación',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
                bio: 'Experto en negociación y comunicación estratégica para equipos de alto rendimiento.'
            },
            faqs: [
                {
                    question: '¿Incluye ejercicios prácticos?',
                    answer: 'Sí, el curso cuenta con simulaciones y role-playing para practicar situaciones reales.'
                }
            ]
        },
        'liderazgo-personal': {
            title: 'Liderazgo Personal y Autogestión',
            description: 'Desarrolla habilidades de liderazgo desde la autorresponsabilidad, la disciplina y la toma de decisiones estratégicas.',
            level: 'Avanzado',
            duration: '90 minutos',
            students: 3500,
            modality: 'Virtual',
            category: 'Desarrollo Personal',
            price: 50.00,
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
            modules: ['Visión Personal', 'Gestión de Prioridades', 'Hábitos Atómicos', 'Resiliencia'],
            instructor: {
                name: 'Sofia Rodriguez',
                role: 'Executive Coach',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
                bio: 'Coach certificada por ICF, especializada en desarrollo de liderazgo para alta dirección.'
            },
            faqs: [
                {
                    question: '¿Es adecuado para emprendedores?',
                    answer: 'Absolutamente, las herramientas de autogestión son vitales para cualquier persona que lidera proyectos o empresas.'
                }
            ]
        },
        'gestion-tiempo': {
            title: 'Gestión del Tiempo y Productividad',
            description: 'Aprende técnicas prácticas para organizar tu tiempo, priorizar tareas y maximizar tu rendimiento laboral.',
            level: 'Básico',
            duration: '60 minutos',
            students: 2100,
            modality: 'Virtual',
            category: 'Productividad',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200',
            modules: ['Matriz de Eisenhower', 'Técnica Pomodoro', 'Evitar Procastinación', 'Agenda Efectiva'],
            instructor: {
                name: 'David Chen',
                role: 'Productivity Hacker',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
                bio: 'Autor best-seller sobre productividad y optimización del flujo de trabajo.'
            },
            faqs: [
                {
                    question: '¿Qué herramientas digitales se enseñan?',
                    answer: 'Cubrimos el uso de Notion, Trello y Google Calendar para implementar el sistema.'
                }
            ]
        },
        'negociacion-efectiva': {
            title: 'Técnicas de Negociación Efectiva',
            description: 'Domina las estrategias clave para negociar acuerdos exitosos y resolver conflictos en el entorno empresarial.',
            level: 'Avanzado',
            duration: '120 minutos',
            students: 850,
            modality: 'Virtual',
            category: 'Negocios',
            price: 60.00,
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
            modules: ['Preparación de la Negociación', 'Estrategias Ganar-Ganar', 'Manejo de Objeciones', 'Cierre de Acuerdos'],
            instructor: {
                name: 'Carlos Mendez',
                role: 'Consultor de Comunicación',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
                bio: 'Experto en negociación y comunicación estratégica para equipos de alto rendimiento.'
            },
            faqs: [
                {
                    question: '¿Se analizan casos reales?',
                    answer: 'Sí, desglosamos negociaciones famosas y casos de estudio empresariales.'
                }
            ]
        },
        'branding-personal': {
            title: 'Branding Personal para Profesionales',
            description: 'Construye una marca personal sólida que te destaque en tu industria y atraiga nuevas oportunidades laborales.',
            level: 'Intermedio',
            duration: '80 minutos',
            students: 1200,
            modality: 'Virtual',
            category: 'Marketing',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1493612276216-9c7837d0eb77?auto=format&fit=crop&q=80&w=1200',
            modules: ['Definición de Marca', 'Presencia Digital', 'Networking Efectivo', 'Creación de Contenido'],
            instructor: {
                name: 'Ana Torres',
                role: 'Marketing Strategist',
                image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200',
                bio: 'Estratega digital ayudando a profesionales a potenciar su presencia online.'
            },
            faqs: [
                {
                    question: '¿Sirve para freelancers?',
                    answer: 'Es ideal tanto para empleados que buscan ascenso como para freelancers que buscan clientes.'
                }
            ]
        }
    };

    const course = id ? themeMap[id] : null;

    if (!course) {
        return (
            <div className="min-h-screen bg-[#0B1120] flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Curso no encontrado</h2>
                    <Link to="/recursos/cursos" className="text-primary hover:text-primary-light underline">
                        Volver a cursos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0B1120] min-h-screen text-gray-100 pb-20">
            <div className="relative h-96">
                <div className="absolute inset-0">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link to="/recursos/cursos" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                            <FaArrowLeft className="mr-2" /> Volver a cursos
                        </Link>
                        <Reveal>
                            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider mb-4 inline-block">
                                {course.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 max-w-4xl">
                                {course.title}
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    <div className="lg:col-span-4">
                        <Reveal delay={0.3}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-heading font-bold text-white mb-2">Descripción</h3>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    {course.description}
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-heading font-bold text-white mb-6">Lo que aprenderás</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {course.modules.map((mod: string, idx: number) => (
                                        <div key={idx} className="flex items-start">
                                            <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-300">{mod}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Instructor Section */}
                        {course.instructor && (
                            <Reveal delay={0.4}>
                                <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-8 mb-8">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-6">Instructor</h3>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                        <img
                                            src={course.instructor.image}
                                            alt={course.instructor.name}
                                            className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                                        />
                                        <div className="text-center sm:text-left">
                                            <h4 className="text-xl font-bold text-white mb-1">{course.instructor.name}</h4>
                                            <p className="text-primary-light text-sm font-medium mb-3">{course.instructor.role}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {course.instructor.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        )}

                        {/* FAQ Section */}
                        {course.faqs && course.faqs.length > 0 && (
                            <Reveal delay={0.5}>
                                <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-8">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-6">Preguntas Frecuentes</h3>
                                    <div className="space-y-4">
                                        {course.faqs.map((faq: any, idx: number) => (
                                            <div key={idx} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                                                <button
                                                    onClick={() => toggleFaq(idx)}
                                                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                                                >
                                                    <span className="text-white font-medium group-hover:text-primary transition-colors">{faq.question}</span>
                                                    {openFaq === idx ? (
                                                        <FaChevronUp className="text-primary w-4 h-4 ml-4" />
                                                    ) : (
                                                        <FaChevronDown className="text-gray-500 w-4 h-4 ml-4 group-hover:text-primary transition-colors" />
                                                    )}
                                                </button>
                                                {openFaq === idx && (
                                                    <div className="mt-3 text-gray-400 text-sm leading-relaxed animate-fadeIn">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <Reveal delay={0.4}>
                            <div className="bg-[#1a2333] rounded-xl py-5 px-3 sticky top-24 border border-gray-700">
                                <div className="text-2xl font-bold text-white mb-1">
                                    S/ {course.price.toFixed(2)}
                                    <span className="text-2xl font-normal text-gray-400 block mt-2">Acceso de por vida</span>
                                </div>

                                <Link
                                    to="/contacto"
                                    className="block w-full py-1 text-center bg-primary hover:bg-primary-light text-white rounded-lg font-bold text-base mb-2 transition-colors shadow-lg shadow-primary/25"
                                >
                                    Inscribirme ahora
                                </Link>

                                <a
                                    href="https://wa.me/51999999999?text=Hola,%20estoy%20interesado%20en%20el%20curso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-1 text-center bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-base mb-6 transition-colors shadow-lg"
                                >
                                    <FaWhatsapp className="mr-2 text-xl" /> Consultar
                                </a>

                                <div className="space-y-2 border-t border-gray-700 pt-2">
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span className="flex items-center"><FaClock className="mr-1.5 text-primary-light text-xs" /> Duración</span>
                                        <span className="font-medium text-gray-300">{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span className="flex items-center"><FaUsers className="mr-1.5 text-primary-light text-xs" /> Estudiantes</span>
                                        <span className="font-medium text-gray-300">{course.students}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span className="flex items-center"><FaLaptop className="mr-1.5 text-primary-light text-xs" /> Modalidad</span>
                                        <span className="font-medium text-gray-300">{course.modality}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span className="flex items-center"><FaTag className="mr-1.5 text-primary-light text-xs" /> Nivel</span>
                                        <span className="font-medium text-gray-300">{course.level}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </div>
    );
}
