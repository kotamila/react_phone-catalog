import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './modules/Menu/Menu';
import { Footer } from './modules/Footer/Footer';
import { HomePage } from './pages/HomePages';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Menu />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
