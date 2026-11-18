import { Blocks, Cloud, Database, Layout, Plug, RefreshCw, ServerCog, ShieldCheck, TestTube2 } from 'lucide-react';
import { skillGroups } from '../data/profile';
import { spotlight, useReveal } from '../utils';

const icons = {
  Frontend: Layout,
  Backend: ServerCog,
  'API Development': Plug,
  Databases: Database,
  Authentication: ShieldCheck,
  'Background Jobs': RefreshCw,
  'DevOps & Tools': Cloud,
  'Testing & Methodologies': TestTube2,
};

function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2>Tools I <span className="grad">build with</span></h2>
        </div>
        <div className="bento">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] || Blocks;
            return (
              <article
                key={group.title}
                className={`card spot reveal bento-${i + 1}`}
                style={{ '--d': `${(i % 4) * 70}ms` }}
                onMouseMove={spotlight}
              >
                <span className="icon-tile"><Icon size={22} /></span>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
