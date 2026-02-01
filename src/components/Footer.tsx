import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-heading font-bold text-primary">TYC</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Asesoría, consultoría y formación profesional para empresas que buscan excelencia.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/asesoria-consultoria" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Asesoría y Consultoría
                </Link>
              </li>
              <li>
                <Link to="/recursos/cursos" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Nuestros Clientes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recursos/cursos" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/recursos/blog" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/recursos/podcast" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/recursos/descargables" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Descargables
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@consultoria.com" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  contacto@consultoria.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+34000000000" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  +34 000 000 000
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Madrid, España
                </span>
              </li>
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              <a href="#" className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} TYC Consultoría. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
