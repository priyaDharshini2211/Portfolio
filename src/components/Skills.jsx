import { skillGroups } from '../data/profile';

function Skills() {
  return (
    <section id="skills" className="section-padding bg-body-tertiary">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">What I Know</p>
          <h2>Skills & Technologies</h2>
        </div>
        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <div className="card h-100 skill-card">
                <div className="card-body">
                  <div className="skill-icon">
                    <i className={`bi ${group.icon}`}></i>
                  </div>
                  <h3 className="h6 fw-bold mb-3">{group.title}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="badge skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
