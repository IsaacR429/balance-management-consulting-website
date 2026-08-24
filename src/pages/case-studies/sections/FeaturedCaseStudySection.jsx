import Container from "../../../components/ui/Container.jsx";
import { featuredCaseStudy } from "../caseStudiesData.js";

export default function FeaturedCaseStudySection() {
  return (
    <section className="case-studies-featured">
      <Container>
        <div className="case-studies-featured__label">
          FEATURED ENGAGEMENT
        </div>

        <article className="case-study-feature">
          <div className="case-study-feature__copy">
            <div className="case-study-feature__meta">
              <span>{featuredCaseStudy.number}</span>
              <small>{featuredCaseStudy.category}</small>
            </div>

            <h2>{featuredCaseStudy.title}</h2>

            <p>{featuredCaseStudy.description}</p>
          </div>

          <div className="case-study-feature__metrics">
            {featuredCaseStudy.metrics.map((metric) => (
              <div
                className="case-study-feature__metric"
                key={metric.label}
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
