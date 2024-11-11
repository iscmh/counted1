import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import OffersPage from './pages/OffersPage';
import GuidesPage from './pages/GuidesPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import OfferGuidePage from './pages/OfferGuidePage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OffersPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/offer/:id" element={<OfferDetailsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:offerId" element={<OfferGuidePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}