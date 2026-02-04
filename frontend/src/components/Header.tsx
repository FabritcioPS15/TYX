import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose, IoChevronDown } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <>
      <header
        className={`z-40 transition-all duration-300 ${isTransparent
          ? 'absolute top-0 lg:top-9 left-0 w-full bg-transparent py-5'
          : isScrolled
            ? 'sticky top-0 bg-white/80 backdrop-blur-md shadow-lg py-2 border-b border-white/20'
            : 'sticky top-0 bg-white/90 backdrop-blur-sm py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group z-50 relative">
              <div className={`transition-all duration-300 flex items-center justify-center rounded-lg ${isTransparent
                ? 'bg-white/10 border border-white/20 shadow-none'
                : 'bg-primary shadow-lg shadow-primary/30'
                } ${isScrolled ? 'w-9 h-9' : 'w-11 h-11'
                }`}>
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-bold leading-tight transition-all duration-300 ${isTransparent ? 'text-white text-3xl' : isScrolled ? 'text-primary text-xl' : 'text-primary text-2xl'
                  }`}>
                  TYC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <Link
                to="/nosotros"
                onMouseEnter={() => setHoveredPath('/nosotros')}
                onMouseLeave={() => setHoveredPath(null)}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 font-heading relative group rounded-full ${isTransparent
                  ? isActive('/nosotros') ? 'text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                  : `hover:bg-slate-50 ${isActive('/nosotros') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
                  }`}
              >
                Nosotros
                {isActive('/nosotros') && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredPath === '/nosotros' && !isActive('/nosotros') && (
                  <motion.div
                    layoutId="hover-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary/50 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>

              <Link
                to="/asesoria-consultoria"
                onMouseEnter={() => setHoveredPath('/asesoria-consultoria')}
                onMouseLeave={() => setHoveredPath(null)}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 font-heading relative group rounded-full ${isTransparent
                  ? isActive('/asesoria-consultoria') ? 'text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                  : `hover:bg-slate-50 ${isActive('/asesoria-consultoria') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
                  }`}
              >
                Asesoría y Consultoría
                {isActive('/asesoria-consultoria') && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredPath === '/asesoria-consultoria' && !isActive('/asesoria-consultoria') && (
                  <motion.div
                    layoutId="hover-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary/50 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>

              <div className="relative group"
                onMouseEnter={() => setHoveredPath('/recursos')}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <button
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 font-heading flex items-center space-x-1 rounded-full relative group ${isTransparent
                    ? isActive('/recursos') ? 'text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                    : `hover:bg-slate-50 ${isActive('/recursos') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
                    }`}
                >
                  <span>Recursos</span>
                  <IoChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  {isActive('/recursos') && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute -bottom-1 left-2 right-8 h-0.5 bg-secondary rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {hoveredPath === '/recursos' && !isActive('/recursos') && (
                    <motion.div
                      layoutId="hover-underline"
                      className="absolute -bottom-1 left-2 right-8 h-0.5 bg-secondary/50 rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </button>

                <div className="absolute top-full left-0 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden p-2">
                    {recursosItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${location.pathname === item.path
                          ? 'bg-primary/5 text-primary font-semibold'
                          : 'text-slate-600 hover:text-primary hover:bg-slate-50'
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
                onMouseEnter={() => setHoveredPath('/clientes')}
                onMouseLeave={() => setHoveredPath(null)}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 font-heading relative group rounded-full ${isTransparent
                  ? isActive('/clientes') ? 'text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
                  : `hover:bg-slate-50 ${isActive('/clientes') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
                  }`}
              >
                Nuestros Clientes
                {isActive('/clientes') && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredPath === '/clientes' && !isActive('/clientes') && (
                  <motion.div
                    layoutId="hover-underline"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-secondary/50 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </Link>

              <Link
                to="/contacto"
                className="ml-4 px-7 py-2.5 bg-secondary text-primary-dark rounded-full text-sm font-bold shadow-lg shadow-secondary/20 hover:bg-secondary-light hover:shadow-secondary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full text-slate-700 hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <IoMenu className={`w-7 h-7 transition-colors ${isTransparent ? 'text-white' : 'text-slate-700 hover:text-primary'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu (Drawer) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <span className="font-heading font-bold text-primary text-xl">Menú</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                aria-label="Close menu"
              >
                <IoClose className="w-7 h-7" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto py-4 px-5">
              <div className="space-y-2">
                <Link
                  to="/nosotros"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive('/nosotros')
                    ? 'bg-primary/5 text-primary font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium'
                    }`}
                >
                  <span>Nosotros</span>
                </Link>

                <Link
                  to="/asesoria-consultoria"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive('/asesoria-consultoria')
                    ? 'bg-primary/5 text-primary font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium'
                    }`}
                >
                  <span>Asesoría y Consultoría</span>
                </Link>

                {/* Mobile Accordion for Recursos */}
                <div className="rounded-xl overflow-hidden active:bg-slate-50 transition-colors">
                  <button
                    onClick={() => setRecursosOpen(!recursosOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 ${isActive('/recursos')
                      ? 'text-primary font-bold'
                      : 'text-slate-600 font-medium'
                      }`}
                  >
                    <span>Recursos</span>
                    <IoChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${recursosOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${recursosOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 pr-2 pb-2 space-y-1">
                        {recursosItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === item.path
                              ? 'text-secondary font-bold bg-secondary/5'
                              : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                              }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/clientes"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive('/clientes')
                    ? 'bg-primary/5 text-primary font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium'
                    }`}
                >
                  <span>Nuestros Clientes</span>
                </Link>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/50">
              <Link
                to="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3.5 bg-secondary text-primary-dark rounded-xl text-center font-bold shadow-lg shadow-secondary/20 hover:bg-secondary-light hover:shadow-secondary/30 active:scale-[0.98] transition-all duration-200"
              >
                Contáctanos ahora
              </Link>
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-400">© 2026 TYC - Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
