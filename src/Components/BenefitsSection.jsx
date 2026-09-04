import { FiCheck, FiMessageCircle, FiBarChart2 } from 'react-icons/fi';
import workspaceImg from '../assets/benefits-workspace.jpg';
import amandaImg from '../assets/amanda-avatar.jpg';

const benefits = [
  'Free Consulting With Expert Saving Money',
  'Online Banking',
  'Investment Report Every Month',
  'Saving Money For The Future',
  'Online Transaction',
];

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefits-section__inner">
        <div className="benefits-section__left">
          <h2 className="benefits-section__heading">
            What Benefit Will <br /> You Get
          </h2>

          <ul className="benefits-section__list">
            {benefits.map((benefit, index) => (
              <li className="benefits-item" key={index}>
                <div className="benefits-item__check">
                  <FiCheck />
                </div>
                <span className="benefits-item__text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="benefits-section__right">
          <div className="benefits-visual">
            <img
              src={workspaceImg}
              alt="Workspace using Biccas"
              className="benefits-visual__photo"
            />

            
            <div className="benefits-card benefits-card--amanda">
              <img
                src={amandaImg}
                alt="Amanda Young"
                className="benefits-card__avatar"
              />
              <div className="benefits-card__info">
                <h4 className="benefits-card__name">Amanda Young</h4>
                <p className="benefits-card__role">Expert Saving Money</p>
              </div>
              <div className="benefits-card__msg-icon">
                <FiMessageCircle />
              </div>
            </div>

            <div className="benefits-card benefits-card--income">
              <span className="benefits-card__income-label">Total Income</span>
              <div className="benefits-card__income-row">
                <span className="benefits-card__income-amount">$245.00</span>
                <FiBarChart2 className="benefits-card__chart-icon" />
              </div>
            </div>

            <div className="benefits-card benefits-card--transfer">
              <div className="benefits-card__transfer-check">
                <FiCheck />
              </div>
              <span className="benefits-card__transfer-text">
                Money Transfer Successful
              </span>
            </div>

            <div className="benefits-visual__badge">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_0_173)">
                  <path d="M15.9405 3.49329L4.6714 6.51285C3.78229 6.75109 3.25465 7.66498 3.49289 8.55409L6.51244 19.8232C6.75068 20.7123 7.66458 21.24 8.55369 21.0017L19.8228 17.9822C20.7119 17.7439 21.2396 16.83 21.0013 15.9409L17.9818 4.6718C17.7435 3.78269 16.8296 3.25506 15.9405 3.49329Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.9988 11.3925C9.66564 11.2138 10.0614 10.5284 9.88269 9.86154C9.70401 9.1947 9.01859 8.79898 8.35176 8.97765C7.68492 9.15633 7.28919 9.84175 7.46787 10.5086C7.64655 11.1754 8.33197 11.5711 8.9988 11.3925Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1389 12.7211L15.0358 9.77486L8.55403 21.0017" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_0_173">
                  <rect width="20" height="20" fill="white" transform="translate(0 5.17639) rotate(-15)"/>
                  </clipPath>
                  </defs>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
