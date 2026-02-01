import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const recursosItems = [
    { label: 'Cursos', path: '/recursos/cursos' },
    { label: 'Blog', path: '/recursos/blog' },
    { label: 'Podcast', path: '/recursos/podcast' },
    { label: 'Descargables', path: '/recursos/descargables' },
    { label: 'YouTube', path: '/recursos/youtube' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`transition-all duration-300 flex items-center justify-center rounded-lg bg-primary ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}>
              <span className="text-white font-heading font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-primary leading-tight transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'
                }`}>
                TYC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/nosotros"
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 font-heading relative group ${isActive('/nosotros') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
            >
              Nosotros
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${isActive('/nosotros') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            <Link
              to="/asesoria-consultoria"
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 font-heading relative group ${isActive('/asesoria-consultoria') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
            >
              Asesoría y Consultoría
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${isActive('/asesoria-consultoria') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            <div className="relative group">
              <button
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 font-heading flex items-center space-x-1 ${isActive('/recursos') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
              >
                <span>Recursos</span>
                <IoChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border-t-4 border-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  {recursosItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-slate-50 ${location.pathname === item.path
                        ? 'text-primary font-semibold border-l-2 border-primary'
                        : 'text-slate-600 hover:text-primary'
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/clientes"
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 font-heading relative group ${isActive('/clientes') ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
            >
              Nuestros Clientes
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300 ${isActive('/clientes') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
            </Link>

            <Link
              to="/contacto"
              className="ml-6 px-6 py-2.5 bg-secondary text-primary-dark rounded-md text-sm font-bold shadow-lg shadow-secondary/20 hover:bg-secondary-light hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-4 border-t border-slate-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="space-y-1">
            <Link
              to="/nosotros"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${isActive('/nosotros')
                ? 'text-primary bg-primary/5 border-l-4 border-primary'
                : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`}
            >
              Nosotros
            </Link>

            <Link
              to="/asesoria-consultoria"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${isActive('/asesoria-consultoria')
                ? 'text-primary bg-primary/5 border-l-4 border-primary'
                : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`}
            >
              Asesoría y Consultoría
            </Link>

            <div>
              <button
                onClick={() => setRecursosOpen(!recursosOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium ${isActive('/recursos')
                  ? 'text-primary bg-primary/5'
                  : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
              >
                <span>Recursos</span>
                <IoChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${recursosOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${recursosOpen ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0'
                }`}>
                {recursosItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm ${location.pathname === item.path
                      ? 'text-secondary font-medium'
                      : 'text-slate-600 hover:text-primary'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/clientes"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${isActive('/clientes')
                ? 'text-primary bg-primary/5 border-l-4 border-primary'
                : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`}
            >
              Nuestros Clientes
            </Link>

            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-6 px-6 py-3 bg-secondary text-primary-dark rounded-md text-sm font-bold text-center hover:bg-secondary-light shadow-md transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
