import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-heading font-black text-2xl">T</span>
              </div>
              <span className="text-2xl font-heading font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">TYX</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transformamos organizaciones a través de asesoría estratégica, consultoría especializada y formación de alto impacto.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Nosotros</span>
                </Link>
              </li>
              <li>
                <Link to="/asesoria-consultoria" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Asesoría y Consultoría</span>
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Nuestros Clientes</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/recursos/cursos" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Cursos</span>
                </Link>
              </li>
              <li>
                <Link to="/recursos/blog" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/recursos/podcast" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Podcast</span>
                </Link>
              </li>
              <li>
                <Link to="/recursos/descargables" className="group flex items-center text-slate-400 hover:text-white transition-colors">
                  <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  <span>Descargables</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:contacto@consultoria.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  contacto@consultoria.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaPhone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+34000000000" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +34 000 000 000
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm">
                  Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} <span className="text-white font-semibold">TYX Consultoría</span>. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacidad" className="text-slate-400 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="text-slate-400 hover:text-white transition-colors">
                Términos
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
