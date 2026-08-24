import Container from "../../../components/ui/Container.jsx";
import { whitepapers } from "../whitepapersData.js";

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="whitepaper-card__icon"
    >
      <path d="M14 6h14l8 8v28H14V6Z" />
      <path d="M28 6v9h8" />
      <path d="M19 24h12" />
      <path d="M19 30h12" />
      <path d="M19 36h8" />
    </svg>
  );
}

export default function WhitepapersLibrarySection() {
  return (
    <section className="whitepapers-library">
      <Container>
        <div className="whitepapers-library__heading">
          <div>
            <span className="section-eyebrow">INSIGHTS</span>

            <h2>
              Ideas shaped by
              <br />
              evolving priorities.
            </h2>
          </div>

          <p>
            A collection of BMC perspectives covering business,
            technology and operational topics.
          </p>
        </div>

        <div className="whitepapers-grid">
          {whitepapers.map((paper) => (
            <article
              className="whitepaper-card"
              key={paper.number}
            >
              <div className="whitepaper-card__top">
                <span>{paper.number}</span>
                <DocumentIcon />
              </div>

              <div className="whitepaper-card__content">
                <small>{paper.category}</small>

                <h3>{paper.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
