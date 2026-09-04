import { FiCheck } from 'react-icons/fi';

function PricingCard({
  name,
  subtitle,
  price,
  period,
  badge,
  features,
  buttonText,
  isPopular,
}) {
  return (
    <div className={`pricing-card ${isPopular ? 'pricing-card--popular' : ''}`}>
      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{name}</h3>
        <p className="pricing-card__subtitle">{subtitle}</p>
        <div className="pricing-card__price-box">
          <span className="pricing-card__currency">$</span>
          <span className="pricing-card__price">{price}</span>
          {period && <span className="pricing-card__period">/{period}</span>}
        </div>
        {badge && <span className="pricing-card__badge">{badge}</span>}
      </div>

      <div className="pricing-card__body">
        <ul className="pricing-card__features">
          {features.map((feature, index) => (
            <li className="pricing-card__feature" key={index}>
              <div className="pricing-card__check">
                <FiCheck />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`pricing-card__btn ${
            isPopular ? 'pricing-card__btn--popular' : 'pricing-card__btn--default'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
