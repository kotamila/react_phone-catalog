import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import './modules/Layout/Layout';
import './pages/HomePages/HomePage';
import './modules/Menu/Menu';
import { HomePage } from './pages/HomePages/HomePage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { Layout } from './modules/Layout/Layout';

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
