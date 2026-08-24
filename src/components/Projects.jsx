import { projects } from '../data/profile';

function Projects() {
  return (
    <section id="projects" className="section-padding bg-body-tertiary">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <p className="eyebrow">My Work</p>
          <h2>Featured Projects</h2>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-lg-6"
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 project-card">
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 mb-3">{project.title}</h3>
                  <ul className="mb-3 ps-3 flex-grow-1">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={`${project.title}-${bulletIndex}`} className="mb-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex flex-wrap gap-2 mt-auto pt-3 border-top">
                    {project.tech.map((tech) => (
                      <span key={tech} className="badge skill-badge">
                        {tech}
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

export default Projects;
