import Container from "../../../components/ui/Container.jsx";
import aboutHeroImage from "../../../assets/images/about/about-hero.webp";

export default function AboutHeroSection() {
  return (
    <section className="about-hero">
      <img
        src={aboutHeroImage}
        alt=""
        aria-hidden="true"
        className="about-hero__image"
      />

      <div className="about-hero__overlay" />
      <div className="about-hero__grid-pattern" />

      <Container>
        <div className="about-hero__content">
          <span className="section-eyebrow section-eyebrow--light">
            ABOUT BMC
          </span>

          <h1>
            The right balance
            <br />
            between
            <br />
            technology and human
            <br />
            ingenuity.
          </h1>

          <p>
            Balance Management Consulting helps organisations navigate
            technology, operational and business transformation with practical
            expertise and disciplined execution.
          </p>
        </div>
      </Container>
    </section>
  );
}
