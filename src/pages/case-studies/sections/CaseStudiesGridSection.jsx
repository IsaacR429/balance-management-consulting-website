import Container from "../../../components/ui/Container.jsx";
import { caseStudies } from "../caseStudiesData.js";

export default function CaseStudiesGridSection() {
  return (
    <section className="case-studies-library">
      <Container>
        <div className="case-studies-library__heading">
          <div>
            <span className="section-eyebrow">OUR WORK</span>

            <h2>
              Experience across
              <br />
              different priorities.
            </h2>
          </div>

          <p>
            BMC&apos;s engagements span consulting, technology delivery,
            cybersecurity, operational improvement and capability
            development.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article
              className="case-study-card"
              key={study.number}
            >
              <div className="case-study-card__meta">
                <span>{study.number}</span>
                <small>{study.category}</small>
              </div>

              <div className="case-study-card__line" />

              <h3>{study.title}</h3>

              <p>{study.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
