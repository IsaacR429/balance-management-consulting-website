import Container from "../../../components/ui/Container.jsx";
import { impactHighlights } from "../impactData.js";

export default function SelectedImpactSection() {
    const [featured, ...engagements] = impactHighlights;

    return (
        <section className="impact-results">
            <Container>
                <div className="impact-section-heading">
                    <div>
                        <span className="section-eyebrow">
                            SELECTED IMPACT
                        </span>

                        <h2>
                            Experience translated
                            <br />
                            into practical outcomes.
                        </h2>
                    </div>

                    <p>
                        BMC engagements demonstrating how complex business
                        and technology challenges are turned into practical
                        outcomes.
                    </p>
                </div>

                <div className="impact-feature">
                    <div className="impact-feature__intro">
                        <span>{featured.number}</span>
                        <small>{featured.eyebrow}</small>

                        <h3>{featured.title}</h3>
                        <p>{featured.description}</p>
                    </div>

                    <div className="impact-feature__metrics">
                        {featured.metrics.map((metric) => (
                            <div
                                className="impact-metric"
                                key={metric.label}
                            >
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="impact-engagement-grid">
                    {engagements.map((item) => (
                        <article
                            className="impact-engagement"
                            key={item.id}
                        >
                            <div className="impact-engagement__meta">
                                <span>{item.number}</span>
                                <small>{item.eyebrow}</small>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
