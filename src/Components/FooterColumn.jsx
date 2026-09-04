function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4 className="footer-column__title">{title}</h4>
      <ul className="footer-column__list">
        {links.map((link, index) => (
          <li className="footer-column__item" key={index}>
            <a href="#" className="footer-column__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
