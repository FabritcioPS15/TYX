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

      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8 sm:mb-10 md:mb-12">
            <Reveal>
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">Nuestros Servicios</h2>
                <p className="text-sm sm:text-base text-gray-400">
                  {filteredServices.length} {filteredServices.length === 1 ? 'servicio disponible' : 'servicios disponibles'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Mobile: Enhanced Dropdown */}
              <div className="md:hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-sm" />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="relative w-full bg-slate-800/90 backdrop-blur-sm border-2 border-slate-700/50 rounded-xl px-5 py-4 text-white text-base font-bold focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer shadow-xl transition-all duration-300"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F59E0B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                      backgroundSize: '1.25rem',
                    }}
                  >
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat} className="bg-slate-900 text-white py-3">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop: Tab Pills */}
              <div className="hidden md:block">
                <div className="inline-flex bg-slate-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-slate-700/50">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFilter(cat)}
                      className={`relative px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 whitespace-nowrap ${filter === cat
                          ? 'text-white'
                          : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                      {filter === cat && (
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-lg shadow-lg shadow-primary/20" />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <ConsultingCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
