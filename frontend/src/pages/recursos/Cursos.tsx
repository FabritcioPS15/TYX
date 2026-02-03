import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { CourseCard } from '../../components/CourseCard';
import { Reveal } from '../../components/Reveal';

export default function Cursos() {
  const [filter, setFilter] = useState('Todos');

  const cursos = [
    {
      id: 'liderazgo-emocional',
      category: 'Desarrollo Personal',
      title: 'Inteligencia Emocional para el Éxito Profesional',
      duration: '90 minutos',
      students: 1500,
      modality: 'Virtual',
      level: 'Intermedio',
      price: 30.00,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      description:
        'Desarrolla la capacidad de identificar, comprender y gestionar las emociones propias y ajenas para fortalecer relaciones profesionales.',
      modules: []
    },
    {
      id: 'comunicacion-asertiva',
      category: 'Desarrollo Personal',
      title: 'Comunicación asertiva y Escucha activa',
      duration: '75 minutos',
      students: 1000,
      modality: 'Virtual',
      level: 'Básico',
      price: 25.00,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      description:
        'Potencia la capacidad de expresar ideas y necesidades con claridad y respeto, promoviendo una comunicación efectiva.',
      modules: []
    },
    {
      id: 'liderazgo-personal',
      category: 'Desarrollo Personal',
      title: 'Liderazgo Personal y Autogestión',
      duration: '90 minutos',
      students: 3500,
      modality: 'Virtual',
      level: 'Avanzado',
      price: 50.00,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      description:
        'Desarrolla habilidades de liderazgo desde la autorresponsabilidad, la disciplina y la toma de decisiones estratégicas.',
      modules: []
    },
    {
      id: 'gestion-tiempo',
      category: 'Productividad',
      title: 'Gestión del Tiempo y Productividad',
      duration: '60 minutos',
      students: 2100,
      modality: 'Virtual',
      level: 'Básico',
      price: 20.00,
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
      description:
        'Aprende técnicas prácticas para organizar tu tiempo, priorizar tareas y maximizar tu rendimiento laboral.',
      modules: []
    },
    {
      id: 'negociacion-efectiva',
      category: 'Negocios',
      title: 'Técnicas de Negociación Efectiva',
      duration: '120 minutos',
      students: 850,
      modality: 'Virtual',
      level: 'Avanzado',
      price: 60.00,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      description:
        'Domina las estrategias clave para negociar acuerdos exitosos y resolver conflictos en el entorno empresarial.',
      modules: []
    },
    {
      id: 'branding-personal',
      category: 'Marketing',
      title: 'Branding Personal para Profesionales',
      duration: '80 minutos',
      students: 1200,
      modality: 'Virtual',
      level: 'Intermedio',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1493612276216-9c7837d0eb77?auto=format&fit=crop&q=80&w=800',
      description:
        'Construye una marca personal sólida que te destaque en tu industria y atraiga nuevas oportunidades laborales.',
      modules: []
    }
  ];

  const categories = ['Todos', ...new Set(cursos.map(c => c.category))];
  const filteredCursos = filter === 'Todos' ? cursos : cursos.filter(c => c.category === filter);

  return (
    <div className="bg-[#0B1120] min-h-screen text-gray-100">
      <PageHeader
        title="Nuestros Cursos"
        subtitle="Potencia tu carrera con nuestros programas especializados."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Reveal>
              <p className="text-gray-400 mb-4 md:mb-0">
                Mostrando {filteredCursos.length} de {cursos.length} cursos
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCursos.map((curso, index) => (
              <CourseCard key={curso.id} {...curso} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
