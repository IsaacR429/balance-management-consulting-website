import Container from "../../../components/ui/Container.jsx";

export default function WhitepapersIntroSection() {
  return (
    <section className="whitepapers-intro">
      <Container>
        <div className="whitepapers-intro__layout">
          <div>
            <span className="section-eyebrow">WHITE PAPERS</span>

            <h1>
              Perspectives for
              <br />
              navigating change.
            </h1>
          </div>

          <div className="whitepapers-intro__copy">
            <p>
              Knowledge creates value when it leads to better decisions
              and practical action.
            </p>

            <p>
              Explore perspectives across technology, cybersecurity,
              operations, transformation and financial services.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
