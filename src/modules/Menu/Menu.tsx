import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.scss';

interface MenuItem {
  title: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { title: 'HOME', path: '/' },
  { title: 'PHONES', path: '/phones' },
  { title: 'TABLETS', path: '/tablets' },
  { title: 'ACCESSORIES', path: '/accessories' },
];

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo"
        onClick={closeMenu}
        aria-label="Головна сторінка"
      >
        <img src="img/Logo.png" alt="NICE GADGETS" />
      </Link>

      <div className={`header__body ${isMenuOpen ? 'header__body--open' : ''}`}>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {menuItems.map(item => (
              <li key={item.path} className="header__nav-item">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__icons">
          <NavLink
            to="/favourites"
            onClick={closeMenu}
            className={({ isActive }) =>
              `header__icon-link${isActive ? ' header__icon-link--active' : ''}`
            }
            aria-label="Обране"
          >
            <img src="img/icons/Favourites.png" alt="Favourites" />
          </NavLink>

          <NavLink
            to="/cart"
            onClick={closeMenu}
            className={({ isActive }) =>
              `header__icon-link${isActive ? ' header__icon-link--active' : ''}`
            }
            aria-label="Кошик"
          >
            <img src="img/icons/Basket.png" alt="Cart" />
          </NavLink>
        </div>
      </div>

      <button
        type="button"
        className="header__burger"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
      >
        <img
          src={isMenuOpen ? 'img/icons/Close.png' : 'img/icons/Menu.png'}
          alt="Menu toggle"
        />
      </button>
    </header>
  );
};
