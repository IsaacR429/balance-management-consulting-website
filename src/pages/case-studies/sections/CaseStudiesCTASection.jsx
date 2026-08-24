import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

export default function CaseStudiesCTASection() {
  return (
    <section className="case-studies-cta">
      <Container>
        <div className="case-studies-cta__inner">
          <div>
            <span className="section-eyebrow section-eyebrow--light">
              START A CONVERSATION
            </span>

            <h2>
              Bring practical experience
              <br />
              to your next priority.
            </h2>

            <p>
              Discuss your business, technology or operational priorities
              with BMC.
            </p>
          </div>

          <Link
            to="/contact"
            className="case-studies-cta__button"
          >
            Talk to Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
