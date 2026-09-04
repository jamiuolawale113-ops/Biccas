import FeatureCard from './FeatureCard';
import { FiCloud, FiBriefcase, FiFolder, FiSend } from 'react-icons/fi';

function CollaborationVisual() {
  return (
    <div className="feature-visual feature-visual--collab">
      <div className="collab-preview">
        <div className="collab-preview__card collab-preview__card--top">
          <div className="collab-preview__header-row">
            <div className="collab-preview__pill collab-preview__pill--green"></div>
            <div className="collab-preview__lines">
              <span className="collab-preview__line collab-preview__line--long"></span>
              <span className="collab-preview__line collab-preview__line--short"></span>
            </div>
            <div className="collab-preview__plane">
              <FiSend />
            </div>
          </div>
        </div>

        <div className="collab-preview__card collab-preview__card--mid">
          <div className="collab-preview__header-row">
            <div className="collab-preview__pill collab-preview__pill--blue"></div>
            <div className="collab-preview__lines">
              <span className="collab-preview__line collab-preview__line--long"></span>
              <span className="collab-preview__line collab-preview__line--short"></span>
            </div>
          </div>
        </div>

        <div className="collab-preview__avatars">
          <div className="collab-avatar collab-avatar--1"></div>
          <div className="collab-avatar collab-avatar--2"></div>
          <div className="collab-avatar collab-avatar--3">
            <span className="collab-dots">•••</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StorageVisual() {
  return (
    <div className="feature-visual feature-visual--storage">
      <div className="storage-preview">
        <div className="storage-preview__cloud-badge">
          <FiCloud />
        </div>

        <div className="storage-preview__main-card">
          <div className="storage-preview__folder-icon">
            <FiFolder />
          </div>
          <h4 className="storage-preview__title">Document File</h4>
          <p className="storage-preview__subtitle">456 GB | 1056 Items</p>
        </div>

        <div className="storage-preview__bars">
          <div className="storage-bar" style={{ height: '35px' }}></div>
          <div className="storage-bar" style={{ height: '55px' }}></div>
          <div className="storage-bar storage-bar--tall" style={{ height: '70px' }}></div>
          <div className="storage-bar" style={{ height: '45px' }}></div>
          <div className="storage-bar" style={{ height: '60px' }}></div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="feature-visual feature-visual--analytics">
      <div className="analytics-preview">
        <div className="analytics-gauge">
          <svg className="analytics-gauge__svg" viewBox="0 0 160 85">
            <path
              d="M 15 80 A 65 65 0 0 1 145 80"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M 15 80 A 65 65 0 0 1 100 17"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M 100 17 A 65 65 0 0 1 145 80"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </svg>
          <div className="analytics-gauge__center-badge">
            <div className="analytics-gauge__dot"></div>
          </div>
          <div className="analytics-gauge__labels">
            <span>60%</span>
            <span>40%</span>
          </div>
        </div>

        <div className="analytics-row">
          <div className="analytics-row__icon analytics-row__icon--blue">
            <FiCloud />
          </div>
          <div className="analytics-row__track">
            <div className="analytics-row__fill analytics-row__fill--blue" style={{ width: '70%' }}></div>
          </div>
        </div>

        <div className="analytics-row">
          <div className="analytics-row__icon analytics-row__icon--green">
            <FiBriefcase />
          </div>
          <div className="analytics-row__track">
            <div className="analytics-row__fill analytics-row__fill--green" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featuresData = [
  {
    visual: <CollaborationVisual />,
    title: 'Collaboration Teams',
    description: 'Here you can handle projects together with team virtually',
  },
  {
    visual: <StorageVisual />,
    title: 'Cloud Storage',
    description: 'No need to worry about storage because we provide storage up to 2 TB',
  },
  {
    visual: <AnalyticsVisual />,
    title: 'Daily Analytics',
    description: 'We always provide useful information to make it easier for you every day',
  },
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-section__inner">
        <div className="features-section__header">
          <div className="features-section__heading-group">
            <h2 className="features-section__heading">
              Our Features <br /> you can get
            </h2>
          </div>
          <p className="features-section__subheading">
            We offer a variety of interesting features that you can help increase your
            productivity at work and manage your project easily
          </p>
          <div className="features-section__action">
            <button className="features-section__btn">Get Started</button>
          </div>
        </div>

        <div className="features-section__grid">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              visual={feature.visual}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
