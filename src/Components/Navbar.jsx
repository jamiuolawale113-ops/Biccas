import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', active: true },
  { label: 'Product', active: false },
  { label: 'FAQ', active: false },
  { label: 'Blog', active: false },
  { label: 'About Us', active: false },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">Biccas</div>

      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href="#"
              className={link.active ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <a href="#" className="navbar__login">Login</a>
        <a href="#" className="navbar__signup">Sign Up</a>
      </div>

      <button
        type="button"
        className="navbar__hamburger"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {isMobileMenuOpen && (
        <div className="navbar__backdrop" onClick={closeMobileMenu} />
      )}

      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className={link.active ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-actions">
          <a href="#" className="navbar__mobile-login" onClick={closeMobileMenu}>
            Login
          </a>
          <a href="#" className="navbar__mobile-signup" onClick={closeMobileMenu}>
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;