import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

export default function WhitepapersCTASection() {
  return (
    <section className="whitepapers-cta">
      <Container>
        <div className="whitepapers-cta__inner">
          <div>
            <span className="section-eyebrow section-eyebrow--light">
              START A CONVERSATION
            </span>

            <h2>
              Turn insight into
              <br />
              practical action.
            </h2>

            <p>
              Discuss your business, technology and transformation
              priorities with BMC.
            </p>
          </div>

          <Link
            to="/contact"
            className="whitepapers-cta__button"
          >
            Talk to Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
