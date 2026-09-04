import { FiActivity, FiPieChart, FiCommand } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa';
import IconListItem from './IconListItems';

const supportItems = [
  {
    icon: FiActivity,
    title: 'Publishing',
    description:
      'Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand',
  },
  {
    icon: FiPieChart,
    title: 'Analytics',
    description: 'Analyze your performance and create gorgeous report',
  },
  {
    icon: FiCommand,
    title: 'Engagement',
    description: 'Quickly navigate you and engage with your audience',
  },
];

const ratings = [
  { score: 4.9, company: 'databricks' },
  { score: 4.8, company: 'Chainalysis' },
];

function SupportSection() {
  return (
    <section className="support-section">
      <div className="support-section__inner">
        <div className="support-section__left">
          <h2 className="support-section__heading">
            How we support our partner all over the world
          </h2>
          <p className="support-section__text">
            SaaS become a common delivery model for many business
            application, including office software, messaging software,
            payroll processing software, DBMS software, management software
          </p>

          <div className="support-section__ratings">
            {ratings.map((r) => (
              <div className="support-rating" key={r.company}>
                <div className="support-rating__stars">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < Math.round(r.score) ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
                <p className="support-rating__score">{r.score} / 5 rating</p>
                <p className="support-rating__company">{r.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="support-section__right">
          {supportItems.map((item) => (
            <IconListItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportSection;