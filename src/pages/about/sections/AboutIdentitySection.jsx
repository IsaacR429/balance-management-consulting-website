import Container from "../../../components/ui/Container.jsx";

export default function AboutIdentitySection() {
  return (
    <section className="about-identity">
      <Container>
        <div className="about-section-heading">
          <div>
            <span className="section-eyebrow">WHO WE ARE</span>

            <h2>
              Experience built around practical transformation.
            </h2>
          </div>

          <p>
            BMC combines business knowledge, technology capability and
            operational experience to help organisations move confidently
            through change.
          </p>
        </div>

        <div className="about-identity__grid">
          <article className="about-identity-card about-identity-card--primary">
            <span>01</span>

            <div>
              <small>OUR PURPOSE</small>
              <h3>Technology with practical business purpose.</h3>

              <p>
                We help clients reach their technology goals while supporting
                global standards, scalable delivery and more efficient ways of
                working.
              </p>
            </div>
          </article>

          <article className="about-identity-card">
            <span>02</span>

            <div>
              <small>LEADERSHIP</small>
              <h3>Experience across industries and continents.</h3>

              <p>
                Our executive leadership team averages 20 years of experience
                across industries and international markets.
              </p>
            </div>
          </article>

          <article className="about-identity-card">
            <span>03</span>

            <div>
              <small>BUILT FOR CHANGE</small>
              <h3>We make change work for you.</h3>

              <p>
                BMC adapts to evolving business and technology requirements,
                supporting clients wherever they are in their transformation.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
