import { profile } from '../data/profile';

const contactItems = [
  { icon: 'bi-envelope-fill', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'bi-telephone-fill', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: 'bi-geo-alt-fill', label: 'Location', value: profile.location, href: null },
  { icon: 'bi-github', label: 'GitHub', value: 'priyaDharshini2211', href: profile.github, external: true },
  { icon: 'bi-linkedin', label: 'LinkedIn', value: 'View Profile', href: profile.linkedin, external: true },
];

function Contact() {
  return (
    <section id="contact" className="section-padding bg-body-tertiary">
      <div className="container">
        <div className="cta-banner" data-aos="zoom-in">
          <div className="cta-banner-content">
            <div>
              <p className="eyebrow text-white-50">Get In Touch</p>
              <h2 className="text-white mb-2">Let's Work Together</h2>
              <p className="text-white-50 mb-0 col-lg-8">
                I'm currently open to new opportunities. Feel free to reach out for
                collaborations or just a friendly hello.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="btn btn-light btn-lg px-4 flex-shrink-0">
              <i className="bi bi-send-fill me-2"></i>Say Hello
            </a>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {contactItems.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card contact-card h-100 text-center">
                <div className="card-body">
                  <div className="contact-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h3 className="h6 mb-1">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-decoration-none"
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mb-0">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
