import { experience } from '../data/profile';

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">My Journey</p>
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <div
              className="timeline-item"
              key={item.company}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-marker">
                <i className="bi bi-briefcase-fill"></i>
              </div>
              <div className="card timeline-card">
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                    <div>
                      <h3 className="h5 mb-1">{item.role}</h3>
                      <p className="text-gradient fw-semibold mb-0">{item.company}</p>
                    </div>
                    <span className="badge date-badge">{item.dates}</span>
                  </div>
                  <ul className="mb-0 ps-3">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${item.company}-${bulletIndex}`} className="mb-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
