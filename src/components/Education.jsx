import { GraduationCap } from 'lucide-react';
import { education } from '../data/profile';
import { useReveal } from '../utils';

function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Education</span>
          <h2>My <span className="grad">academic background</span></h2>
        </div>
        {education.map((item) => (
          <article className="card reveal edu-card" key={item.institution}>
            <span className="icon-tile"><GraduationCap size={22} /></span>
            <div className="edu">
              <h3>{item.degree}</h3>
              <p className="grad-text">{item.institution}</p>
              <p className="muted">{item.dates} · Score {item.notes}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
