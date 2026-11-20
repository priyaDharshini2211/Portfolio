import { Award, Download, ExternalLink } from 'lucide-react';
import { certifications } from '../data/profile';
import { spotlight, useReveal } from '../utils';

function Certificates() {
  const ref = useReveal();
  return (
    <section id="certificates" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Certificates</span>
          <h2>Learning that <span className="grad">I've completed</span></h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <article
              key={cert.title}
              className="card spot cert reveal"
              style={{ '--d': `${i * 90}ms` }}
              onMouseMove={spotlight}
            >
              <span className="icon-tile"><Award size={22} /></span>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="muted cert-date">{cert.date}</p>
              {cert.file ? (
                <div className="cert-actions">
                  <a
                    className="btn btn-primary"
                    href={cert.file}
                    download
                    aria-label={`Download certificate: ${cert.title}`}
                  >
                    <Download size={17} /> Download
                  </a>
                  <a className="btn btn-ghost" href={cert.file} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} /> View
                  </a>
                </div>
              ) : (
                <p className="cert-note">Certificate available on request</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
