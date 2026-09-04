import { SiUnsplash, SiNotion, SiIntercom, SiGrammarly } from 'react-icons/si';
import { FiFileText } from 'react-icons/fi';


const logos = [
  { icon: SiUnsplash, label: 'Unsplash' },
  { icon: SiNotion, label: 'Notion' },
  { icon: SiIntercom, label: 'INTERCOM' },
  { icon: FiFileText, label: 'descript' },
  { icon: SiGrammarly, label: 'grammarly' },
];

function LogoCloud() {
  return (
    <section className="logo-cloud">
      <h2 className="logo-cloud__heading">More than 25,000 teams use Collabs</h2>
      <div className="logo-cloud__row">
        {logos.map(({ icon: Icon, label }) => (
          <div className="logo-cloud__item" key={label}>
            <Icon className="logo-cloud__icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoCloud;