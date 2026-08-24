import { profile } from '../data/profile';

const stats = [
  { value: '2+', label: 'Years Experience', icon: 'bi-briefcase' },
  { value: '3', label: 'Companies & Clients', icon: 'bi-building' },
  { value: '10+', label: 'APIs Shipped', icon: 'bi-hdd-network' },
];

const codeLines = [
  { indent: 0, text: 'class Developer < Rails::Engineer', tone: 'kw' },
  { indent: 1, text: 'name: "Priyadharshini",', tone: 'str' },
  { indent: 1, text: 'role: "Ruby on Rails Developer",', tone: 'str' },
  { indent: 1, text: 'experience: "2+ years",', tone: 'str' },
  { indent: 1, text: 'focus: %w[APIs Performance Security]', tone: 'str' },
  { indent: 0, text: 'end', tone: 'kw' },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">About Me</p>
          <h2>Get to know me</h2>
        </div>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="code-window">
              <div className="code-window-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="code-window-title">developer.rb</span>
              </div>
              <div className="code-window-body">
                {codeLines.map((line, index) => (
                  <div key={index} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    <span className={`code-token code-${line.tone}`}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <p className="fs-5 text-body-secondary mb-4">{profile.summary}</p>
            <div className="row g-3">
              {stats.map((stat) => (
                <div className="col-4" key={stat.label}>
                  <div className="stat-card text-center h-100">
                    <i className={`bi ${stat.icon} stat-icon`}></i>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
