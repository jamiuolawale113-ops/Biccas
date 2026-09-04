import { FiArrowRight } from 'react-icons/fi';
import FooterColumn from './FooterColumn';

const footerColumns = [
  {
    title: 'Support',
    links: ['Help centre', 'Account information', 'About', 'Contact us'],
  },
  {
    title: 'Help and Solution',
    links: ['Talk to support', 'Support docs', 'System status', 'Covid responde'],
  },
  {
    title: 'Product',
    links: ['Update', 'Security', 'Beta test', 'Pricing product'],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand-col">
            <h3 className="footer__brand">Biccas</h3>
            <p className="footer__text">Get started now try our product</p>

            <form
              className="footer__subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email here"
                className="footer__subscribe-input"
                required
              />
              <button
                type="submit"
                className="footer__subscribe-btn"
                aria-label="Subscribe"
              >
                <FiArrowRight />
              </button>
            </form>
          </div>

          <div className="footer__nav-cols">
            {footerColumns.map((col) => (
              <FooterColumn
                key={col.title}
                title={col.title}
                links={col.links}
              />
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Terms and Conditions
            </a>
            <span className="footer__legal-dot">•</span>
            <a href="#" className="footer__legal-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
