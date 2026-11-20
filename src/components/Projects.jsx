import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects, profile } from '../data/profile';
import { Github } from './BrandIcons';
import { spotlight, useReveal } from '../utils';

function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2>Things I've <span className="grad">made</span></h2>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="card spot project reveal"
              style={{ '--d': `${i * 90}ms` }}
              onMouseMove={spotlight}
            >
              <div className="project-top">
                <span className="icon-tile"><Code2 size={22} /></span>
                <span className="project-no">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{project.title}</h3>
              {project.dates && <p className="kind">{project.dates}</p>}
              <ul className="dots">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tags">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="more-row reveal">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Github size={18} /> See all my code on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
