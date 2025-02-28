import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './layout/pagelayout'; // Adjust path as needed
import HomePage from './pages/home';
import AboutPage from './pages/aboutus';
import MinistriesPage from './pages/ministries';
import ResourcesPage from './pages/resources';
import ContactPage from './pages/contact';
import NotFoundPage from './pages/404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Apply PageLayout to all pages */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />          
          <Route path="about" element={<AboutPage />} />
          <Route path="ministries" element={<MinistriesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
