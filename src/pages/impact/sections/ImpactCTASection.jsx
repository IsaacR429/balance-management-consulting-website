import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

export default function ImpactCTASection() {
    return (
        <section className="impact-cta">
            <Container>
                <div className="impact-cta__inner">
                    <div>
                        <span className="section-eyebrow section-eyebrow--light">
                            START A CONVERSATION
                        </span>

                        <h2>
                            Turn your next priority
                            <br />
                            into practical progress.
                        </h2>

                        <p>
                            Discuss your transformation, technology or
                            operational priorities with BMC.
                        </p>
                    </div>

                    <Link to="/contact" className="impact-cta__button">
                        Talk to Us
                        <span>→</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
