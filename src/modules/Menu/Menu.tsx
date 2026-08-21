import { Link, NavLink } from 'react-router-dom';

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
  return (
    <header className="header">
      <Link to="/" className="header__logo" aria-label="Головна сторінка">
        <img src="/img/Logo.png" alt="NICE GADGETS" />
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          {menuItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `header__nav_link${isActive ? ' header__nav_link--active' : ''}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header_icons">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            `header__icon-link${isActive ? ' header__icon-link--active' : ''}`
          }
          aria-label="Обране"
        >
          <img src="/img/icons/Favourites.png" alt="Favourites" />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `header__icon-link${isActive ? ' header__icon-link--active' : ''}`
          }
          aria-label="Кошик"
        >
          <img src="/img/icons/Basket.png" alt="Favourites" />
        </NavLink>
      </div>
    </header>
  );
};
