import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import AsesoriaConsultoria from './pages/AsesoriaConsultoria';
import ConsultingDetail from './pages/ConsultingDetail';
import Cursos from './pages/recursos/Cursos';
import CourseDetail from './pages/recursos/CourseDetail';
import Blog from './pages/recursos/Blog';
import Podcast from './pages/recursos/Podcast';
import Descargables from './pages/recursos/Descargables';
import YouTubePage from './pages/recursos/YouTube';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/asesoria-consultoria" element={<AsesoriaConsultoria />} />
          <Route path="/asesoria-consultoria/:id" element={<ConsultingDetail />} />
          <Route path="/recursos/cursos" element={<Cursos />} />
          <Route path="/recursos/cursos/:id" element={<CourseDetail />} />
          <Route path="/recursos/blog" element={<Blog />} />
          <Route path="/recursos/podcast" element={<Podcast />} />
          <Route path="/recursos/descargables" element={<Descargables />} />
          <Route path="/recursos/youtube" element={<YouTubePage />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
