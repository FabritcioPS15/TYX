import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaEnvelope, FaUsers, FaChartLine, FaClock, FaAward, FaChevronDown, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Reveal } from '../components/Reveal';

interface ServiceData {
    title: string;
    category: string;
    shortDescription: string;
    description: string[];
    image: string;
    videoUrl: string;
    deliverables: { icon: any; title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    benefits: { icon: any; title: string; description: string }[];
    caseStudies: { client: string; challenge: string; result: string; metric: string }[];
    faq: { question: string; answer: string }[];
}

export default function ConsultingDetail() {
    const { id } = useParams();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Expanded data map
    const servicesMap: Record<string, ServiceData> = {
        'tyx-academy': {
            title: 'TYX Academy',
            category: 'Asesoría y Consultoría',
            shortDescription: 'Capacitación integral para líderes y equipos en metodologías ágiles, liderazgo y gestión del cambio.',
            description: [
                'TYX Academy es nuestro programa de formación empresarial diseñado para desarrollar las competencias clave que tu organización necesita para prosperar en un entorno empresarial en constante cambio.',
                'Nuestros programas combinan teoría de vanguardia con aplicaciones prácticas, asegurando que los participantes puedan implementar inmediatamente lo aprendido en sus roles diarios.',
                'Trabajamos con metodologías activas, casos reales y dinámicas de grupo que garantizan un aprendizaje significativo y duradero.',
                'Cada programa se personaliza según las necesidades específicas de tu organización, asegurando la máxima relevancia y aplicabilidad.'
            ],
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaUsers, title: 'Sesiones Presenciales', description: 'Talleres interactivos con expertos de la industria' },
                { icon: FaChartLine, title: 'Material Didáctico', description: 'Guías, plantillas y recursos descargables' },
                { icon: FaClock, title: 'Seguimiento Post-Formación', description: 'Acompañamiento durante 3 meses' },
                { icon: FaAward, title: 'Certificación', description: 'Certificado oficial de finalización' },
            ],
            process: [
                { step: 1, title: 'Diagnóstico Inicial', description: 'Evaluamos las necesidades de capacitación de tu equipo' },
                { step: 2, title: 'Diseño Personalizado', description: 'Creamos un programa adaptado a tus objetivos' },
                { step: 3, title: 'Implementación', description: 'Ejecutamos las sesiones de formación' },
                { step: 4, title: 'Evaluación y Seguimiento', description: 'Medimos resultados y brindamos soporte continuo' },
            ],
            benefits: [
                { icon: FaUsers, title: 'Equipos Más Competentes', description: 'Desarrolla habilidades críticas en tu talento humano' },
                { icon: FaChartLine, title: 'Mayor Productividad', description: 'Mejora el rendimiento organizacional' },
                { icon: FaAward, title: 'Cultura de Aprendizaje', description: 'Fomenta la mejora continua' },
            ],
            caseStudies: [
                { client: 'Empresa Tecnológica', challenge: 'Bajo engagement del equipo', result: 'Aumento del 45% en satisfacción laboral', metric: '+45%' },
                { client: 'Retail Nacional', challenge: 'Falta de liderazgo efectivo', result: 'Reducción del 30% en rotación de mandos medios', metric: '-30%' },
            ],
            faq: [
                { question: '¿Cuánto dura el programa?', answer: 'La duración varía según las necesidades, pero típicamente oscila entre 3 y 6 meses con sesiones semanales o quincenales.' },
                { question: '¿Se puede realizar de forma virtual?', answer: 'Sí, ofrecemos modalidades presencial, virtual e híbrida para adaptarnos a tus necesidades.' },
                { question: '¿Incluye certificación?', answer: 'Todos nuestros programas incluyen certificación oficial al completar exitosamente el curso.' },
                { question: '¿Cuál es el tamaño ideal del grupo?', answer: 'Recomendamos grupos de 15-25 personas para maximizar la interacción y el aprendizaje.' },
            ]
        },
        'gestion-empresarial': {
            title: 'Gestión Empresarial',
            category: 'Asesoría y Consultoría',
            shortDescription: 'Optimización de modelos de negocio y estrategias corporativas para maximizar la rentabilidad y el crecimiento sostenible.',
            description: [
                'Nuestro servicio de Gestión Empresarial está diseñado para transformar tu organización en una máquina eficiente y rentable.',
                'Analizamos en profundidad tu modelo de negocio actual, identificamos oportunidades de mejora y diseñamos estrategias concretas para alcanzar tus objetivos.',
                'Trabajamos de la mano con tu equipo directivo para implementar cambios sostenibles que generen resultados medibles.',
                'Nuestra metodología combina las mejores prácticas internacionales con un profundo conocimiento del contexto local.'
            ],
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Diagnóstico Estratégico', description: 'Análisis completo de tu situación actual' },
                { icon: FaUsers, title: 'Plan de Acción', description: 'Hoja de ruta detallada con objetivos claros' },
                { icon: FaClock, title: 'Implementación Guiada', description: 'Acompañamiento en la ejecución' },
                { icon: FaAward, title: 'Tablero de Control', description: 'Dashboard para seguimiento de KPIs' },
            ],
            process: [
                { step: 1, title: 'Análisis Situacional', description: 'Evaluación 360° de tu organización' },
                { step: 2, title: 'Diseño Estratégico', description: 'Definición de objetivos y estrategias' },
                { step: 3, title: 'Plan de Implementación', description: 'Roadmap detallado con responsables' },
                { step: 4, title: 'Ejecución y Monitoreo', description: 'Seguimiento continuo de resultados' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Mayor Rentabilidad', description: 'Optimiza recursos y aumenta márgenes' },
                { icon: FaUsers, title: 'Organización Eficiente', description: 'Procesos claros y bien definidos' },
                { icon: FaAward, title: 'Ventaja Competitiva', description: 'Posicionamiento estratégico superior' },
            ],
            caseStudies: [
                { client: 'Empresa Manufacturera', challenge: 'Baja rentabilidad', result: 'Incremento del 35% en EBITDA', metric: '+35%' },
                { client: 'Servicios Profesionales', challenge: 'Falta de dirección estratégica', result: 'Crecimiento del 50% en facturación', metric: '+50%' },
            ],
            faq: [
                { question: '¿Cuánto tiempo toma ver resultados?', answer: 'Los primeros resultados suelen verse en 3-6 meses, aunque el impacto completo se materializa en 12-18 meses.' },
                { question: '¿Trabajan con empresas de todos los tamaños?', answer: 'Sí, adaptamos nuestra metodología a empresas desde startups hasta grandes corporaciones.' },
                { question: '¿Qué nivel de involucramiento requiere?', answer: 'Requiere compromiso activo de la alta dirección y disponibilidad de información clave de la empresa.' },
            ]
        },
        'gestion-publica': {
            title: 'Gestión Pública',
            category: 'Asesoría',
            shortDescription: 'Asesoramiento especializado para entidades públicas en modernización del estado y gestión por procesos.',
            description: [
                'Apoyamos a entidades públicas en su proceso de modernización y transformación hacia una gestión más eficiente, transparente y orientada al ciudadano.',
                'Nuestro equipo cuenta con amplia experiencia en el sector público y conocimiento profundo de la normativa vigente.',
                'Implementamos metodologías probadas que garantizan el cumplimiento normativo mientras se mejora la calidad del servicio.',
                'Trabajamos en estrecha colaboración con los equipos internos para asegurar la sostenibilidad de los cambios.'
            ],
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Diagnóstico Institucional', description: 'Evaluación completa de procesos y estructura' },
                { icon: FaUsers, title: 'Plan de Modernización', description: 'Roadmap de transformación institucional' },
                { icon: FaClock, title: 'Capacitación de Servidores', description: 'Formación en nuevas metodologías' },
                { icon: FaAward, title: 'Indicadores de Gestión', description: 'Sistema de medición de desempeño' },
            ],
            process: [
                { step: 1, title: 'Diagnóstico Institucional', description: 'Análisis de la situación actual y brechas' },
                { step: 2, title: 'Diseño de Soluciones', description: 'Propuesta de mejoras alineadas a normativa' },
                { step: 3, title: 'Implementación Gradual', description: 'Ejecución por fases con quick wins' },
                { step: 4, title: 'Institucionalización', description: 'Aseguramiento de sostenibilidad' },
            ],
            benefits: [
                { icon: FaUsers, title: 'Mejor Servicio al Ciudadano', description: 'Procesos más ágiles y transparentes' },
                { icon: FaChartLine, title: 'Eficiencia Operativa', description: 'Optimización de recursos públicos' },
                { icon: FaAward, title: 'Cumplimiento Normativo', description: 'Alineamiento con estándares legales' },
            ],
            caseStudies: [
                { client: 'Municipalidad Provincial', challenge: 'Procesos lentos y burocráticos', result: 'Reducción del 60% en tiempos de trámite', metric: '-60%' },
                { client: 'Gobierno Regional', challenge: 'Falta de transparencia', result: 'Implementación exitosa de portal de transparencia', metric: '100%' },
            ],
            faq: [
                { question: '¿Conocen la normativa del sector público?', answer: 'Sí, nuestro equipo está especializado en normativa pública y se mantiene actualizado constantemente.' },
                { question: '¿Cuánto dura un proyecto típico?', answer: 'Varía según el alcance, pero generalmente entre 6 y 18 meses.' },
                { question: '¿Capacitan a los servidores públicos?', answer: 'Sí, la capacitación y transferencia de conocimiento es parte integral de nuestros proyectos.' },
            ]
        },
        'gestion-talento': {
            title: 'Gestión del Talento',
            category: 'Consultoría',
            shortDescription: 'Estrategias para atraer, desarrollar y retener el mejor talento humano en tu organización.',
            description: [
                'El talento humano es el activo más valioso de cualquier organización. Ayudamos a las empresas a construir estrategias integrales de gestión del talento.',
                'Desde la atracción y selección hasta el desarrollo y retención, diseñamos soluciones personalizadas que se alinean con tu cultura organizacional.',
                'Implementamos sistemas de evaluación de desempeño, planes de carrera y programas de desarrollo que impulsan el crecimiento profesional.',
                'Nuestro enfoque se basa en crear experiencias positivas para los colaboradores que se traduzcan en mayor compromiso y productividad.'
            ],
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaUsers, title: 'Modelo de Competencias', description: 'Framework personalizado para tu organización' },
                { icon: FaChartLine, title: 'Sistema de Evaluación', description: 'Herramientas de assessment 360°' },
                { icon: FaClock, title: 'Planes de Desarrollo', description: 'Rutas de carrera individualizadas' },
                { icon: FaAward, title: 'Programa de Retención', description: 'Estrategias para reducir rotación' },
            ],
            process: [
                { step: 1, title: 'Diagnóstico de Talento', description: 'Evaluación del estado actual del capital humano' },
                { step: 2, title: 'Diseño de Estrategia', description: 'Definición de modelo de gestión del talento' },
                { step: 3, title: 'Implementación de Herramientas', description: 'Despliegue de sistemas y procesos' },
                { step: 4, title: 'Seguimiento y Ajuste', description: 'Monitoreo continuo y mejora' },
            ],
            benefits: [
                { icon: FaUsers, title: 'Menor Rotación', description: 'Retención de talento clave' },
                { icon: FaChartLine, title: 'Mayor Engagement', description: 'Colaboradores más comprometidos' },
                { icon: FaAward, title: 'Desarrollo Profesional', description: 'Crecimiento de capacidades internas' },
            ],
            caseStudies: [
                { client: 'Empresa de Servicios', challenge: 'Alta rotación de personal', result: 'Reducción del 40% en turnover', metric: '-40%' },
                { client: 'Corporación Multinacional', challenge: 'Falta de líderes internos', result: '80% de posiciones gerenciales cubiertas internamente', metric: '80%' },
            ],
            faq: [
                { question: '¿Incluye reclutamiento?', answer: 'Podemos incluir servicios de reclutamiento especializado si lo requieres, aunque nuestro foco principal es la gestión estratégica del talento.' },
                { question: '¿Qué herramientas utilizan?', answer: 'Utilizamos una combinación de herramientas de assessment validadas internacionalmente y plataformas tecnológicas de gestión del talento.' },
                { question: '¿Trabajan con empresas de todos los sectores?', answer: 'Sí, tenemos experiencia en diversos sectores industriales y de servicios.' },
            ]
        },
        'transformacion-digital': {
            title: 'Transformación Digital',
            category: 'Consultoría',
            shortDescription: 'Acompañamiento en la adopción de nuevas tecnologías y digitalización de procesos.',
            description: [
                'La transformación digital no es solo tecnología, es un cambio cultural y estratégico. Te acompañamos en todo el proceso.',
                'Evaluamos tu madurez digital actual y diseñamos una hoja de ruta personalizada que se alinea con tus objetivos de negocio.',
                'Implementamos soluciones tecnológicas que realmente agregan valor, priorizando quick wins y ROI medible.',
                'Gestionamos el cambio organizacional para asegurar la adopción exitosa de las nuevas tecnologías y procesos digitales.'
            ],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Assessment Digital', description: 'Evaluación de madurez digital' },
                { icon: FaUsers, title: 'Roadmap de Transformación', description: 'Plan estratégico de digitalización' },
                { icon: FaClock, title: 'Implementación Tecnológica', description: 'Despliegue de soluciones digitales' },
                { icon: FaAward, title: 'Gestión del Cambio', description: 'Programa de adopción digital' },
            ],
            process: [
                { step: 1, title: 'Evaluación de Madurez', description: 'Diagnóstico del estado digital actual' },
                { step: 2, title: 'Diseño de Roadmap', description: 'Definición de iniciativas priorizadas' },
                { step: 3, title: 'Implementación Ágil', description: 'Ejecución iterativa con sprints' },
                { step: 4, title: 'Escalamiento', description: 'Expansión y optimización continua' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Eficiencia Operativa', description: 'Automatización de procesos manuales' },
                { icon: FaUsers, title: 'Mejor Experiencia del Cliente', description: 'Canales digitales optimizados' },
                { icon: FaAward, title: 'Ventaja Competitiva', description: 'Innovación y agilidad empresarial' },
            ],
            caseStudies: [
                { client: 'Retail Tradicional', challenge: 'Falta de presencia digital', result: 'Incremento del 120% en ventas online', metric: '+120%' },
                { client: 'Empresa Manufacturera', challenge: 'Procesos manuales ineficientes', result: 'Reducción del 50% en tiempos de producción', metric: '-50%' },
            ],
            faq: [
                { question: '¿Necesito una gran inversión en tecnología?', answer: 'No necesariamente. Priorizamos soluciones con el mejor ROI y podemos empezar con inversiones moderadas.' },
                { question: '¿Cuánto tiempo toma la transformación?', answer: 'Es un proceso continuo, pero los primeros resultados se ven en 3-6 meses.' },
                { question: '¿Qué pasa con nuestros sistemas actuales?', answer: 'Evaluamos la integración con sistemas existentes y planificamos migraciones graduales cuando sea necesario.' },
            ]
        },
        'marketing-estrategico': {
            title: 'Marketing Estratégico',
            category: 'Asesoría',
            shortDescription: 'Desarrollo de planes de marketing y posicionamiento de marca para alcanzar nuevos mercados.',
            description: [
                'Desarrollamos estrategias de marketing integrales que conectan tu marca con tu audiencia objetivo de manera efectiva y medible.',
                'Desde el análisis de mercado hasta la ejecución de campañas, te acompañamos en cada etapa del proceso de marketing.',
                'Utilizamos metodologías data-driven para optimizar continuamente tus inversiones en marketing y maximizar el ROI.',
                'Nuestro enfoque omnicanal asegura una experiencia consistente en todos los puntos de contacto con tus clientes.'
            ],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Análisis de Mercado', description: 'Investigación de competencia y audiencia' },
                { icon: FaUsers, title: 'Plan de Marketing', description: 'Estrategia integral 360°' },
                { icon: FaClock, title: 'Calendario de Contenidos', description: 'Planificación de campañas' },
                { icon: FaAward, title: 'Dashboard de Métricas', description: 'Seguimiento de KPIs en tiempo real' },
            ],
            process: [
                { step: 1, title: 'Research y Análisis', description: 'Estudio de mercado y competencia' },
                { step: 2, title: 'Estrategia de Marca', description: 'Definición de posicionamiento y mensajes' },
                { step: 3, title: 'Plan de Acción', description: 'Diseño de campañas y tácticas' },
                { step: 4, title: 'Ejecución y Optimización', description: 'Implementación y mejora continua' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Mayor Visibilidad', description: 'Incremento en reconocimiento de marca' },
                { icon: FaUsers, title: 'Más Leads Calificados', description: 'Generación de oportunidades de venta' },
                { icon: FaAward, title: 'ROI Medible', description: 'Resultados cuantificables y optimizables' },
            ],
            caseStudies: [
                { client: 'Startup Tecnológica', challenge: 'Baja visibilidad de marca', result: 'Aumento del 300% en tráfico web', metric: '+300%' },
                { client: 'Empresa B2B', challenge: 'Generación de leads insuficiente', result: 'Incremento del 150% en leads calificados', metric: '+150%' },
            ],
            faq: [
                { question: '¿Incluye ejecución de campañas?', answer: 'Podemos incluir la ejecución o trabajar con tu equipo interno/agencia actual.' },
                { question: '¿Trabajan marketing digital y tradicional?', answer: 'Sí, desarrollamos estrategias omnicanal que integran ambos mundos.' },
                { question: '¿Cuál es el presupuesto mínimo recomendado?', answer: 'Depende de tus objetivos, pero podemos trabajar con diferentes niveles de inversión.' },
            ]
        },
        'finanzas-corporativas': {
            title: 'Finanzas Corporativas',
            category: 'Asesoría y Consultoría',
            shortDescription: 'Asesoría financiera para la toma de decisiones, valoración de empresas y gestión de riesgos.',
            description: [
                'Brindamos asesoría financiera estratégica para fortalecer la salud financiera de tu organización y optimizar la toma de decisiones.',
                'Nuestros expertos te ayudan a entender y mejorar tus métricas financieras clave, desde flujo de caja hasta estructura de capital.',
                'Realizamos valoraciones empresariales rigurosas para procesos de M&A, levantamiento de capital o planificación estratégica.',
                'Implementamos sistemas de gestión de riesgos financieros que protegen tu empresa de volatilidades del mercado.'
            ],
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Análisis Financiero', description: 'Diagnóstico profundo de salud financiera' },
                { icon: FaUsers, title: 'Modelo Financiero', description: 'Proyecciones y escenarios' },
                { icon: FaClock, title: 'Plan de Optimización', description: 'Estrategias de mejora financiera' },
                { icon: FaAward, title: 'Sistema de Control', description: 'Dashboard de indicadores financieros' },
            ],
            process: [
                { step: 1, title: 'Diagnóstico Financiero', description: 'Análisis de estados financieros y ratios' },
                { step: 2, title: 'Modelamiento', description: 'Construcción de modelos financieros' },
                { step: 3, title: 'Estrategia Financiera', description: 'Definición de plan de acción' },
                { step: 4, title: 'Implementación y Monitoreo', description: 'Ejecución y seguimiento continuo' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Mejor Rentabilidad', description: 'Optimización de márgenes y ROI' },
                { icon: FaUsers, title: 'Decisiones Informadas', description: 'Data financiera confiable' },
                { icon: FaAward, title: 'Gestión de Riesgos', description: 'Protección ante volatilidad' },
            ],
            caseStudies: [
                { client: 'Empresa Familiar', challenge: 'Falta de control financiero', result: 'Mejora del 25% en EBITDA', metric: '+25%' },
                { client: 'Startup en Crecimiento', challenge: 'Necesidad de financiamiento', result: 'Levantamiento exitoso de $2M', metric: '$2M' },
            ],
            faq: [
                { question: '¿Realizan auditorías financieras?', answer: 'No realizamos auditorías formales, pero sí análisis financieros profundos y due diligence.' },
                { question: '¿Ayudan con levantamiento de capital?', answer: 'Sí, preparamos la documentación financiera y apoyamos en el proceso de fundraising.' },
                { question: '¿Qué sectores atienden?', answer: 'Trabajamos con empresas de diversos sectores, adaptando nuestro análisis a cada industria.' },
            ]
        },
        'gestion-proyectos': {
            title: 'Gestión de Proyectos',
            category: 'Consultoría',
            shortDescription: 'Implementación de metodologías PMO para asegurar el éxito en la ejecución de proyectos.',
            description: [
                'Implementamos oficinas de gestión de proyectos (PMO) y metodologías probadas para asegurar el éxito de tus iniciativas estratégicas.',
                'Nuestro enfoque combina las mejores prácticas del PMI con metodologías ágiles, adaptándose a la naturaleza de cada proyecto.',
                'Capacitamos a tus equipos en gestión de proyectos y les proporcionamos las herramientas necesarias para ejecutar con excelencia.',
                'Establecemos sistemas de gobernanza que aseguran la alineación de los proyectos con los objetivos estratégicos de la organización.'
            ],
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Diseño de PMO', description: 'Estructura y procesos de oficina de proyectos' },
                { icon: FaUsers, title: 'Metodología Personalizada', description: 'Framework adaptado a tu organización' },
                { icon: FaClock, title: 'Herramientas de Gestión', description: 'Software y templates de PM' },
                { icon: FaAward, title: 'Capacitación de Equipos', description: 'Formación en gestión de proyectos' },
            ],
            process: [
                { step: 1, title: 'Assessment de Madurez', description: 'Evaluación de capacidades actuales' },
                { step: 2, title: 'Diseño de PMO', description: 'Definición de estructura y procesos' },
                { step: 3, title: 'Implementación Piloto', description: 'Despliegue en proyectos seleccionados' },
                { step: 4, title: 'Escalamiento', description: 'Expansión a toda la organización' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Mayor Éxito de Proyectos', description: 'Incremento en tasa de cumplimiento' },
                { icon: FaUsers, title: 'Mejor Uso de Recursos', description: 'Optimización de equipos y presupuestos' },
                { icon: FaAward, title: 'Visibilidad y Control', description: 'Seguimiento en tiempo real' },
            ],
            caseStudies: [
                { client: 'Empresa de Construcción', challenge: 'Proyectos fuera de plazo', result: 'Reducción del 40% en retrasos', metric: '-40%' },
                { client: 'Corporación TI', challenge: 'Sobrecostos recurrentes', result: 'Ahorro del 25% en presupuestos', metric: '-25%' },
            ],
            faq: [
                { question: '¿Qué metodologías utilizan?', answer: 'Combinamos PMI, Agile, Scrum y Lean según las necesidades de cada proyecto.' },
                { question: '¿Gestionan proyectos directamente?', answer: 'Podemos gestionar proyectos específicos o implementar la capacidad interna para que lo hagan.' },
                { question: '¿Qué herramientas recomiendan?', answer: 'Recomendamos herramientas según el contexto, desde MS Project hasta Jira o Monday.com.' },
            ]
        },
        'calidad-procesos': {
            title: 'Calidad y Procesos',
            category: 'Asesoría',
            shortDescription: 'Optimización de procesos y gestión de la calidad bajo normas ISO y estándares internacionales.',
            description: [
                'Ayudamos a las organizaciones a alcanzar la excelencia operacional a través de la optimización de procesos y sistemas de gestión de calidad.',
                'Implementamos normas ISO y otros estándares internacionales, asegurando no solo la certificación sino la mejora real de tus operaciones.',
                'Utilizamos metodologías como Lean, Six Sigma y BPM para eliminar desperdicios y maximizar la eficiencia.',
                'Nuestro enfoque se centra en la mejora continua sostenible, creando una cultura de calidad en toda la organización.'
            ],
            image: 'https://images.unsplash.com/photo-1507537297725-24a1c43253ad?auto=format&fit=crop&q=80&w=1200',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            deliverables: [
                { icon: FaChartLine, title: 'Mapeo de Procesos', description: 'Documentación completa de flujos' },
                { icon: FaUsers, title: 'Manual de Calidad', description: 'Documentación para certificación ISO' },
                { icon: FaClock, title: 'Plan de Mejora', description: 'Iniciativas de optimización priorizadas' },
                { icon: FaAward, title: 'Auditorías Internas', description: 'Sistema de verificación de cumplimiento' },
            ],
            process: [
                { step: 1, title: 'Diagnóstico de Procesos', description: 'Mapeo y análisis de estado actual' },
                { step: 2, title: 'Diseño de Mejoras', description: 'Rediseño de procesos optimizados' },
                { step: 3, title: 'Implementación', description: 'Despliegue de nuevos procesos' },
                { step: 4, title: 'Certificación y Mejora Continua', description: 'Auditorías y optimización permanente' },
            ],
            benefits: [
                { icon: FaChartLine, title: 'Mayor Eficiencia', description: 'Reducción de tiempos y costos' },
                { icon: FaUsers, title: 'Mejor Calidad', description: 'Reducción de defectos y reprocesos' },
                { icon: FaAward, title: 'Certificación ISO', description: 'Reconocimiento internacional' },
            ],
            caseStudies: [
                { client: 'Empresa Manufacturera', challenge: 'Alta tasa de defectos', result: 'Reducción del 70% en productos defectuosos', metric: '-70%' },
                { client: 'Empresa de Servicios', challenge: 'Procesos ineficientes', result: 'Ahorro del 30% en costos operativos', metric: '-30%' },
            ],
            faq: [
                { question: '¿Qué normas ISO implementan?', answer: 'Trabajamos principalmente con ISO 9001, ISO 14001, ISO 45001 y otras según necesidad.' },
                { question: '¿Cuánto toma obtener la certificación?', answer: 'Típicamente entre 6 y 12 meses, dependiendo del tamaño y complejidad de la organización.' },
                { question: '¿Incluye la auditoría de certificación?', answer: 'Preparamos a la organización para la auditoría, pero la certificación la realiza un ente certificador externo.' },
            ]
        },
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
        <div className="bg-[#0B1120] min-h-screen text-gray-100">
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 md:h-96">
                <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link to="/asesoria-consultoria" className="inline-flex items-center text-gray-400 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                            <FaArrowLeft className="mr-2" /> Volver a servicios
                        </Link>
                        <Reveal>
                            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase tracking-wider mb-3 sm:mb-4 inline-block">
                                {service.category}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 max-w-4xl">
                                {service.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
                                {service.shortDescription}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8 sm:space-y-12">
                        {/* Description */}
                        <Reveal delay={0.1}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
                                    Descripción del Servicio
                                </h2>
                                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                    {service.description.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Deliverables */}
                        <Reveal delay={0.2}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                                    ¿Qué Incluye?
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {service.deliverables.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{item.title}</h3>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Reveal>

                        {/* Video Section */}
                        <Reveal delay={0.3} width="100%">
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                                <div className="aspect-video bg-gray-900">
                                    <iframe
                                        className="w-full h-full"
                                        src={service.videoUrl}
                                        title={`Video de ${service.title}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* Process */}
                        <Reveal delay={0.4}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                                    Proceso de Trabajo
                                </h2>
                                <div className="space-y-6">
                                    {service.process.map((step, idx) => (
                                        <div key={idx} className="flex items-start space-x-4 sm:space-x-6">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                                <span className="text-white font-bold text-lg sm:text-xl">{step.step}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-white mb-2 text-base sm:text-lg">{step.title}</h3>
                                                <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Benefits */}
                        <Reveal delay={0.5}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                                    Beneficios Clave
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.benefits.map((benefit, idx) => {
                                        const Icon = benefit.icon;
                                        return (
                                            <div key={idx} className="flex items-start space-x-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{benefit.title}</h3>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Reveal>

                        {/* Case Studies */}
                        <Reveal delay={0.6}>
                            <div className="bg-[#0f1623] border border-gray-800 rounded-xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                                    Casos de Éxito
                                </h2>
                                <div className="space-y-6">
                                    {service.caseStudies.map((study, idx) => (
                                        <div key={idx} className="bg-slate-800/30 rounded-lg p-4 sm:p-6 hover:bg-slate-800/50 transition-colors">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                <h3 className="font-bold text-white text-base sm:text-lg mb-2 sm:mb-0">{study.client}</h3>
                                                <span className="text-2xl sm:text-3xl font-bold text-primary">{study.metric}</span>
                                            </div>
                                            <div className="space-y-2 text-sm sm:text-base">
                                                <p className="text-gray-400"><span className="text-white font-semibold">Desafío:</span> {study.challenge}</p>
                                                <p className="text-gray-400"><span className="text-white font-semibold">Resultado:</span> {study.result}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Reveal delay={0.8}>
                            <div className="bg-gradient-to-br from-[#1a2333] to-[#0f1623] rounded-xl p-6 sm:p-8 sticky top-24 border border-primary/20 shadow-xl shadow-primary/10">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">¿Te interesa este servicio?</h3>
                                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                                    Agenda una reunión inicial gratuita para discutir tus necesidades específicas.
                                </p>

                                <Link
                                    to="/contacto"
                                    className="block w-full py-3 sm:py-4 text-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-lg font-bold text-base sm:text-lg mb-4 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                                >
                                    Solicitar Propuesta
                                </Link>

                                <div className="space-y-3 mb-6">
                                    <a href="https://wa.me/34000000000" className="flex items-center justify-center space-x-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="w-5 h-5" />
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="tel:+34000000000" className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base">
                                        <FaPhone className="w-5 h-5" />
                                        <span>Llamar Ahora</span>
                                    </a>
                                </div>

                                <div className="border-t border-gray-700 pt-6 space-y-3 text-sm">
                                    <div className="flex items-center text-gray-400">
                                        <FaEnvelope className="mr-3 text-primary flex-shrink-0" />
                                        <span>Respuesta en menos de 24h</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <FaCheckCircle className="mr-3 text-primary flex-shrink-0" />
                                        <span>Consultoría inicial gratuita</span>
                                    </div>
                                    <div className="flex items-center text-gray-400">
                                        <FaAward className="mr-3 text-primary flex-shrink-0" />
                                        <span>Expertos certificados</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* FAQ Section Full Width */}
                <div className="mt-16 sm:mt-24">
                    <Reveal delay={0.2} width="100%">
                        <div className="bg-[#0f1623] border border-gray-800 rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-12 sm:mb-20 text-center">
                                Preguntas <span className="text-primary italic">Frecuentes</span>
                            </h2>

                            <div className="flex flex-col space-y-4 sm:space-y-6 max-w-4xl mx-auto">
                                {service.faq.map((item, idx) => (
                                    <div key={idx} className="group w-full">
                                        <div className={`border-2 transition-all duration-500 rounded-2xl overflow-hidden ${openFaq === idx ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-gray-800 bg-slate-800/20 hover:border-gray-700'}`}>
                                            <button
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-all"
                                            >
                                                <span className={`font-bold pr-6 text-base sm:text-lg md:text-xl transition-colors duration-300 ${openFaq === idx ? 'text-primary' : 'text-white'}`}>
                                                    {item.question}
                                                </span>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openFaq === idx ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'bg-gray-800 text-gray-400'}`}>
                                                    <FaChevronDown className="w-4 h-4" />
                                                </div>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="p-6 sm:p-8 pt-0 border-t border-gray-800/50">
                                                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
