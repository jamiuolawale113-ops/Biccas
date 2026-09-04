import { useState } from 'react';
import PricingCard from './PricingCard';

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const plans = [
    {
      name: 'Free',
      subtitle: 'Have a go and test your superpowers',
      price: 0,
      features: [
        '2 Users',
        '2 Files',
        'Public Share & Comments',
        'Chat Support',
        'New income apps',
      ],
      buttonText: 'Signup for free',
      isPopular: false,
    },
    {
      name: 'Pro',
      subtitle: 'Experiment the power of infinite possibilities',
      price: billingCycle === 'yearly' ? 8 : 12,
      badge: billingCycle === 'yearly' ? 'Save $50 a year' : null,
      features: [
        '4 Users',
        'All apps',
        'Unlimited editable exports',
        'Folders and collaboration',
        'All incoming apps',
      ],
      buttonText: 'Go to pro',
      isPopular: true,
    },
    {
      name: 'Business',
      subtitle: 'Unveil new superpowers and join the Design League',
      price: billingCycle === 'yearly' ? 16 : 24,
      features: [
        'All the features of pro plan',
        'Account success Manager',
        'Single Sign-On (SSO)',
        'Co-conception program',
        'Collaboration-Soon',
      ],
      buttonText: 'Goto Business',
      isPopular: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-section__inner">
        <div className="pricing-section__header">
          <h2 className="pricing-section__heading">
            Choose Plan <br /> That's Right For You
          </h2>
          <p className="pricing-section__subheading">
            Choose plan that works best for you, feel free to contact us
          </p>

          <div className="pricing-switcher">
            <button
              type="button"
              className={`pricing-switcher__btn ${
                billingCycle === 'monthly' ? 'pricing-switcher__btn--active' : ''
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Bil Monthly
            </button>
            <button
              type="button"
              className={`pricing-switcher__btn ${
                billingCycle === 'yearly' ? 'pricing-switcher__btn--active' : ''
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Bil Yearly
            </button>
          </div>
        </div>

        <div className="pricing-section__grid">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
