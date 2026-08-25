import Container from "../../../components/ui/Container.jsx";
import { testimonials } from "../../../data/testimonials.js";

const highlightsById = {
  "01": ["Responsiveness", "Professionalism", "Commitment"],
  "02": ["Applied AI", "Model Development", "Business Value"],
  "03": ["Data Clarity", "Decision Intelligence", "Operational Insight"],
};

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
            transformation, machine learning and data-driven business change.
          </p>
        </div>

        {/* Testimonials */}
        <div>
          {testimonials.map((testimonial, index) => {
            const highlights = highlightsById[testimonial.id] ?? [];

            return (
              <article
                key={testimonial.id}
                className={`grid lg:grid-cols-[1.28fr_0.72fr] ${
                  index !== testimonials.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                {/* Quote */}
                <div className="border-b border-white/10 py-10 lg:min-h-[380px] lg:border-b-0 lg:border-r lg:py-12 lg:pr-16">
                  <div className="flex items-start justify-between">
                    <QuoteMark />

                    <span className="text-xs font-semibold tracking-[0.18em] text-[#6FA8FF]">
                      {testimonial.id}
                    </span>
                  </div>

                  {testimonial.category && (
                    <p className="mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
                      {testimonial.category}
                    </p>
                  )}

                  <blockquote className="mt-8 max-w-[850px] text-[1.25rem] font-normal leading-[1.55] tracking-[-0.025em] text-[#F1F5F9] sm:text-[1.45rem] lg:text-[1.55rem]">
                    {testimonial.quote}
                  </blockquote>
                </div>

                {/* Client identity */}
                <div className="flex flex-col justify-between py-10 lg:min-h-[380px] lg:py-12 lg:pl-16">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
                        {testimonial.category || "Client Perspective"}
                      </span>

                      <span className="h-px w-10 bg-[#6FA8FF]/50" />
                    </div>

                    <div className="mt-10 space-y-2">
                      {highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="text-[1.15rem] font-medium leading-8 text-[#D5DFEB]"
                        >
                          {highlight}.
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-8">
                    <p className="text-[1.1rem] font-medium text-white">
                      {testimonial.name}
                    </p>

                    <p className="mt-2 max-w-[360px] text-[0.92rem] leading-6 text-[#8195B0]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ClientFeedbackSection;
