import Container from "../../../components/ui/Container.jsx";
import impactHeroImage from "../../../assets/images/impact/impact-hero.webp";

export default function ImpactHeroSection() {
    return (
        <section className="impact-hero">
            <img
                className="impact-hero__image"
                src={impactHeroImage}
                alt=""
                aria-hidden="true"
            />

            <div className="impact-hero__overlay" />
            <div className="impact-hero__grid" />

            <Container>
                <div className="impact-hero__content">
                    <div className="impact-hero__copy">
                        <span className="section-eyebrow section-eyebrow--light">
                            CREATING IMPACT
                        </span>

                        <h1>
                            Turning transformation
                            <br />
                            into measurable
                            <br />
                            progress.
                        </h1>

                        <p>
                            BMC works alongside organisations to strengthen
                            operations, modernise technology and turn complex
                            transformation priorities into practical outcomes.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
