import { Award, Briefcase, FolderGit2, Terminal } from 'lucide-react';
import { certifications, profile, projects } from '../data/profile';
import { useReveal } from '../utils';

const stats = [
  { value: '2+', label: 'Years experience', Icon: Briefcase },
  { value: String(projects.length), label: 'Projects built', Icon: FolderGit2 },
  { value: String(certifications.length), label: 'Certifications', Icon: Award },
];

const lines = [
  ['const', ' priya', ' =', ' {'],
  ['  role:', ' "Python Full Stack Developer"', ','],
  ['  backend:', ' ["Django", "Rails"]', ','],
  ['  frontend:', ' ["React", "JavaScript"]', ','],
  ['  loves:', ' ["clean APIs", "fast apps"]', ','],
  ['};'],
];

function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About</span>
          <h2>Building the web, <span className="grad">end to end</span></h2>
        </div>
        <div className="about-grid">
          <div className="card about-text reveal">
            <p>{profile.summary}</p>
            <div className="stat-row">
              {stats.map(({ value, label, Icon }) => (
                <div className="stat" key={label}>
                  <Icon size={20} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card terminal reveal" style={{ '--d': '120ms' }}>
            <div className="terminal-bar">
              <i /><i /><i />
              <span><Terminal size={13} /> about.js</span>
            </div>
            <pre>
              {lines.map((parts, i) => (
                <code key={i}>
                  {parts.map((p, j) => (
                    <span key={j} className={j === 0 && i === 0 ? 'k' : p.includes('"') ? 's' : ''}>{p}</span>
                  ))}
                  {'\n'}
                </code>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
