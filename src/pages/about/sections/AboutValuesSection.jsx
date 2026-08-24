import Container from "../../../components/ui/Container.jsx";
import { values } from "../aboutData.js";

function ValueIcon({ title }) {
  switch (title) {
    case "Integrity":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 5 38 10v11c0 9.5-5.7 17.2-14 22-8.3-4.8-14-12.5-14-22V10L24 5Z" />
          <path d="m17.5 23.5 4.2 4.2 8.8-9" />
        </svg>
      );

    case "Reliability":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M17.5 17.5h-3a8.5 8.5 0 0 0 0 17h7" />
          <path d="M30.5 30.5h3a8.5 8.5 0 0 0 0-17h-7" />
          <path d="M17 24h14" />
          <circle cx="24" cy="24" r="3" />
        </svg>
      );

    case "Equality":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="13" r="4" />
          <circle cx="12" cy="19" r="3.5" />
          <circle cx="36" cy="19" r="3.5" />

          <path d="M18 35v-5a6 6 0 0 1 12 0v5" />
          <path d="M6.5 35v-4a5.5 5.5 0 0 1 8.5-4.6" />
          <path d="M41.5 35v-4a5.5 5.5 0 0 0-8.5-4.6" />

          <path d="M9 40h30" />
        </svg>
      );

    case "Adaptability":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M35.5 16A15 15 0 0 0 11 17.5" />
          <path d="m10 10 1 7.5 7.5-1" />

          <path d="M12.5 32A15 15 0 0 0 37 30.5" />
          <path d="m38 38-1-7.5-7.5 1" />

          <path d="M18 24h12" />
        </svg>
      );

    default:
      return null;
  }
}

export default function AboutValuesSection() {
  return (
    <section className="about-values">
      <Container>
        <div className="about-values__intro">
          <span className="section-eyebrow section-eyebrow--light">
            WHAT DEFINES BMC
          </span>

          <h2>
            Values that shape how
            <br />
            we work.
          </h2>

          <p>
            Integrity, honesty and reliability remain central to BMC&apos;s
            culture, governance and relationships with clients and people.
          </p>
        </div>

        <div className="about-values__grid">
          {values.map((value) => (
            <article key={value.number} className="about-value">
              <div className="about-value__top">
                <span>{value.number}</span>

                <div className="about-value__icon">
                  <ValueIcon title={value.title} />
                </div>
              </div>

              <div className="about-value__body">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
