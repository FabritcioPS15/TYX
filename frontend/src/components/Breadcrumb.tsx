import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const breadcrumbNames: Record<string, string> = {
  'nosotros': 'Nosotros',
  'asesoria-consultoria': 'Asesoría y Consultoría',
  'recursos': 'Recursos',
  'cursos': 'Cursos',
  'blog': 'Blog',
  'podcast': 'Podcast',
  'descargables': 'Descargables',
  'youtube': 'YouTube',
  'clientes': 'Nuestros Clientes',
  'contacto': 'Contacto',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol
          className="flex items-center space-x-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              to="/"
              itemProp="item"
              className="text-gray-500 hover:text-primary transition-colors flex items-center"
            >
              <FaHome className="w-4 h-4" />
              <span itemProp="name" className="sr-only">Inicio</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = breadcrumbNames[value] || value;
            const position = index + 2;

            return (
              <li
                key={to}
                className="flex items-center space-x-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <FaChevronRight className="w-4 h-4 text-gray-400" />
                <Link
                  to={to}
                  itemProp="item"
                  className={`${isLast ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-primary'} transition-colors`}
                >
                  <span itemProp="name">{label}</span>
                </Link>
                <meta itemProp="position" content={position.toString()} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
