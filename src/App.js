import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurGroup from './pages/OurGroup';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-group" element={<OurGroup />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/by/:personSlug" element={<Projects />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
          
          <Route path="/publications" element={<Publications />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
