import Container from "../../../components/ui/Container.jsx";
import { financialServicesImpact } from "../impactData.js";

export default function FinancialServicesImpactSection() {
    return (
        <section className="financial-impact">
            <Container>
                <div className="impact-section-heading">
                    <div>
                        <span className="section-eyebrow">
                            FINANCIAL SERVICES
                        </span>

                        <h2>
                            Impact across regulated,
                            <br />
                            complex environments.
                        </h2>
                    </div>

                    <p>
                        BMC combines consulting, operational experience and
                        technology delivery where resilience, control and
                        execution matter.
                    </p>
                </div>

                <div className="financial-impact__grid">
                    {financialServicesImpact.map((item) => (
                        <article
                            className="financial-impact__item"
                            key={item.sector}
                        >
                            <div className="flex items-start justify-between">
                                <span>{item.number}</span>

                                <small className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8A9AB2]">
                                    {item.sector}
                                </small>
                            </div>

                            <div className="mt-10 h-px w-9 bg-[#2563EB]" />

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
