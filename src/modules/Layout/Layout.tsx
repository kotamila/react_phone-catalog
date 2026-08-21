import { Menu } from '../Menu/Menu';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
