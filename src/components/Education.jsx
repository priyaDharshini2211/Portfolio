import { BadgeCheck, GraduationCap } from 'lucide-react';
import { certifications, education } from '../data/profile';
import { useReveal } from '../utils';

function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Background</span>
          <h2>Education &amp; <span className="grad">certifications</span></h2>
        </div>
        <div className="two-col">
          <article className="card reveal">
            <span className="icon-tile"><GraduationCap size={22} /></span>
            <h3>Education</h3>
            {education.map((item) => (
              <div key={item.institution} className="edu">
                <h4>{item.degree}</h4>
                <p className="grad-text">{item.institution}</p>
                <p className="muted">{item.dates} · Score {item.notes}</p>
              </div>
            ))}
          </article>
          <article className="card reveal" style={{ '--d': '100ms' }}>
            <span className="icon-tile"><BadgeCheck size={22} /></span>
            <h3>Certifications</h3>
            <ul className="checks">
              {certifications.map((cert) => (
                <li key={cert}><BadgeCheck size={17} /><span>{cert}</span></li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;
