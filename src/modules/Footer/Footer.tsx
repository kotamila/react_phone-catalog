import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

interface FooterItem {
  title: string;
  path: string;
  isExternal?: boolean;
}

const footerItems: FooterItem[] = [
  {
    title: 'GITHUB',
    path: 'https://github.com/kotamila/react_phone-catalog',
    isExternal: true,
  },
  { title: 'CONTACTS', path: '/contacts' },
  { title: 'RIGHTS', path: '/rights' },
];

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <Link to="/" className="footer__logo" aria-label="Головна сторінка">
        <img src="img/Logo.png" alt="NICE GADGETS" />
      </Link>

      <nav className="footer__nav">
        <ul className="footer__nav-list">
          {footerItems.map(item => (
            <li key={item.title}>
              {item.isExternal ? (
                <a
                  href={item.path}
                  className="footer__nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              ) : (
                <Link to={item.path} className="footer__nav-link">
                  {item.title}
                </Link>
              )}
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
          <img src="img/icons/back-to-top.png" alt="Arrow up" />
        </button>
      </div>
    </footer>
  );
};
