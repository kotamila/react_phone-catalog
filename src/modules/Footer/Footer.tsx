import { Link, NavLink } from 'react-router-dom';

interface FooterItem {
  title: string;
  path: string;
}

const footerItems: FooterItem[] = [
  { title: 'GITHUB', path: '/github' },
  { title: 'CONTACTS', path: '/contacts' },
  { title: 'RIGHTS', path: '/rights' },
];

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/" className="footer__logo" aria-label="Головна сторінка">
        <img src="/img/Logo.png" alt="NICE GADGETS" />
      </Link>

      <nav className="footer__nav">
        <ul className="footer__nav-list">
          {footerItems.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `footer__nav_link${isActive ? ' footer__nav_link--active' : ''}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__back-to-top">
        <span className="footer__back-to-top-text">Back to top</span>
        <button
          type="button"
          className="footer__back-to-top-button"
          onClick={handleScrollToTop}
          aria-label="Прогорнути догори"
        >
          <img src="/img/icons/back-to-top" alt="" />
        </button>
      </div>
    </footer>
  );
};
