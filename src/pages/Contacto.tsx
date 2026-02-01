import PageHeader from '../components/PageHeader';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contacto() {
  return (
    <div>
      <PageHeader
        title="Contacto"
        subtitle="Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                Hablemos de tu proyecto
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Ya sea que necesites asesoría estratégica, formación para tu equipo o consultoría
                especializada, estamos listos para escucharte y diseñar una solución a tu medida.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contacto@consultoria.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      contacto@consultoria.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <a
                      href="tel:+34000000000"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +34 000 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">
                      Calle Ejemplo 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Horario de atención</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábado: 10:00 - 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+34 000 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consultoria">Consultoría estratégica</option>
                    <option value="talento">Gestión del talento</option>
                    <option value="procesos">Optimización de procesos</option>
                    <option value="transformacion">Transformación organizacional</option>
                    <option value="coaching">Coaching ejecutivo</option>
                    <option value="formacion">Formación empresarial</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
