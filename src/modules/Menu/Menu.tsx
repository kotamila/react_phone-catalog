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
                className={({ isActive }) =>
                  isActive
                    ? 'header__nav_link header__nav_link--active'
                    : 'header__nav_link'
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
