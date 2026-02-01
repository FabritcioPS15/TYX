import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ConsultingCard } from '../components/ConsultingCard';
import { Reveal } from '../components/Reveal';

export default function AsesoriaConsultoria() {
  const [filter, setFilter] = useState('Todos');

  const services = [
    {
      id: 'tyx-academy',
      title: 'TYX Academy',
      category: 'Asesoría y Consultoría',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'gestion-empresarial',
      title: 'Gestión Empresarial',
      category: 'Asesoría y Consultoría',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'gestion-publica',
      title: 'Gestión Pública',
      category: 'Asesoría',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'gestion-talento',
      title: 'Gestión del Talento',
      category: 'Consultoría',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'transformacion-digital',
      title: 'Transformación Digital',
      category: 'Consultoría',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'marketing-estrategico',
      title: 'Marketing Estratégico',
      category: 'Asesoría',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'finanzas-corporativas',
      title: 'Finanzas Corporativas',
      category: 'Asesoría y Consultoría',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'gestion-proyectos',
      title: 'Gestión de Proyectos',
      category: 'Consultoría',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'calidad-procesos',
      title: 'Calidad y Procesos',
      category: 'Asesoría',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c43253ad?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const categories = ['Todos', 'Asesoría', 'Consultoría', 'Asesoría y Consultoría'];

  const filteredServices = filter === 'Todos'
    ? services
    : services.filter(s => s.category.includes(filter) || (filter === 'Asesoría y Consultoría' && s.category === 'Asesoría y Consultoría'));

  return (
    <div className="bg-[#0B1120] min-h-screen text-gray-100">
      <PageHeader
        title="Asesoría y Consultoría"
        subtitle="Impulsa el crecimiento y la excelencia operativa de tu organización con nuestros expertos."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Reveal>
              <p className="text-gray-400 mb-4 md:mb-0">
                Mostrando {filteredServices.length} de {services.length} servicios
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
            {filteredServices.map((service, index) => (
              <ConsultingCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
