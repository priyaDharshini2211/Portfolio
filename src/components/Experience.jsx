import { Building2, CalendarDays, CheckCircle2, GraduationCap } from 'lucide-react';
import { experience } from '../data/profile';
import { useReveal } from '../utils';

function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Where I've <span className="grad">worked</span></h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="card timeline-item reveal" key={job.company}>
              <span className="timeline-dot" />
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.kind === 'learning' ? <GraduationCap size={16} /> : <Building2 size={16} />} {job.company}
                  </p>
                </div>
                <span className="date"><CalendarDays size={15} /> {job.dates}</span>
              </div>
              <ul className="checks">
                {job.bullets.map((b) => (
                  <li key={b}><CheckCircle2 size={17} /><span>{b}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
