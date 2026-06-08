import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import './modules/Layout/Layout';
import './modules/HomePage/HomePage';
import './modules/Menu/Menu';
import { HomePage } from './modules/HomePage/HomePage';
import { Layout } from './modules/Layout/Layout';

export const App = () => (
  <div className="App">
    <h1>Product Catalog</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
