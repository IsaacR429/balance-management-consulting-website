import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

export default function AboutCTASection() {
  return (
    <section className="about-cta">
      <Container>
        <div className="about-cta__inner">
          <div>
            <span className="section-eyebrow section-eyebrow--light">
              START A CONVERSATION
            </span>

            <h2>
              Build the right balance
              <br />
              for what comes next.
            </h2>

            <p>
              Discuss your business, technology and operational priorities
              with BMC.
            </p>
          </div>

          <Link to="/contact" className="about-cta__button">
            Talk to Us
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
