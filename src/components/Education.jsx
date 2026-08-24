import { education, certifications } from '../data/profile';

function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">Background</p>
          <h2>Education & Certifications</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card h-100 info-card">
              <div className="card-body">
                <div className="info-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <h3 className="h6 fw-bold mb-3">Education</h3>
                {education.map((item) => (
                  <div key={item.institution}>
                    <h4 className="h6 mb-1">{item.degree}</h4>
                    <p className="mb-1 text-gradient fw-semibold">{item.institution}</p>
                    <p className="text-body-secondary mb-1">{item.dates}</p>
                    <p className="mb-0">Score: {item.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card h-100 info-card">
              <div className="card-body">
                <div className="info-icon">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <h3 className="h6 fw-bold mb-3">Certifications</h3>
                <ul className="mb-0 ps-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="mb-2">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
