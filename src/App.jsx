import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AbouPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AddmisionPage';
// import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import './App.css';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;