import Container from "../../../components/ui/Container.jsx";
import { testimonials } from "../../../data/testimonials.js";

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 52 40"
      aria-hidden="true"
      className="h-10 w-12 fill-[#6FA8FF]/85"
    >
      <path d="M2 39V25C2 10 9 3 22 0l2 5C15 8 11 13 11 20h10v19H2Zm28 0V25C30 10 37 3 50 0l2 5C43 8 39 13 39 20h10v19H30Z" />
    </svg>
  );
}

function ClientFeedbackSection() {
  const featured = testimonials[0];

  return (
    <section className="relative overflow-hidden bg-[#020B1C] text-white">
      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Controlled depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-220px] h-[620px] w-[620px] rounded-full bg-blue-500/[0.07] blur-[150px]"
      />

      <Container className="relative">
        {/* Intro */}
        <div className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24 lg:py-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              Client Perspective
            </p>

            <h2 className="mt-7 max-w-[720px] text-balance text-[2.8rem] font-medium leading-[1.02] tracking-[-0.05em] sm:text-[3.6rem] lg:text-[4.25rem]">
              What clients value about working with us.
            </h2>
          </div>

          <p className="max-w-[610px] text-[1.05rem] leading-8 text-[#AFC0D7] lg:justify-self-end">
            Perspectives from organizations partnering with Balance across
            transformation, technology and complex business change.
          </p>
        </div>

        {/* Featured client perspective */}
        <article className="grid lg:grid-cols-[1.28fr_0.72fr]">
          {/* Quote */}
          <div className="border-b border-white/10 py-12 lg:min-h-[500px] lg:border-b-0 lg:border-r lg:py-16 lg:pr-16">
            <div className="flex items-start justify-between">
              <QuoteMark />

              <span className="text-xs font-semibold tracking-[0.18em] text-[#6FA8FF]">
                01
              </span>
            </div>

            <blockquote className="mt-12 max-w-[850px] text-[1.55rem] font-normal leading-[1.55] tracking-[-0.025em] text-[#F1F5F9] sm:text-[1.8rem] lg:text-[1.95rem]">
              {featured.quote}
            </blockquote>
          </div>

          {/* Client identity */}
          <div className="flex flex-col justify-between py-12 lg:min-h-[500px] lg:py-16 lg:pl-16">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
                  Client Perspective
                </span>

                <span className="h-px w-10 bg-[#6FA8FF]/50" />
              </div>

              <p className="mt-10 max-w-[380px] text-[1.15rem] font-medium leading-8 text-[#D5DFEB]">
                Responsiveness.
                <br />
                Professionalism.
                <br />
                Commitment.
              </p>
            </div>

            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="text-[1.1rem] font-medium text-white">
                {featured.name}
              </p>

              <p className="mt-2 max-w-[360px] text-[0.92rem] leading-6 text-[#8195B0]">
                {featured.role}
              </p>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

export default ClientFeedbackSection;
