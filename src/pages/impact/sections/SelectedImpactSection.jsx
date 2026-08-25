import Container from "../../../components/ui/Container.jsx";
import { impactHighlights } from "../impactData.js";

function SelectedImpactSection() {
  const featured = impactHighlights[0];
  const supporting = impactHighlights.slice(1);

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Proof in Practice
            </p>

            <h2 className="mt-6 max-w-[720px] text-[2.7rem] font-medium leading-[1.03] tracking-[-0.05em] text-[#020B1C] sm:text-[3.4rem] lg:text-[3.7rem]">
              Experience translated
              <br />
              into measurable outcomes.
            </h2>
          </div>

          <p className="max-w-[600px] text-[1.02rem] leading-8 text-[#586981] lg:justify-self-end">
            Balance engagements show how complex technology and business
            challenges can translate into stronger control, resilience and
            measurable business value.
          </p>
        </div>

        {/* Featured proof */}
        <div className="mt-14 grid overflow-hidden rounded-[24px] bg-[#020B1C] text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-9 sm:p-11 lg:p-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#79ACFF]">
                01
              </span>

              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7186A3]">
                {featured.eyebrow}
              </span>
            </div>

            <h3 className="mt-10 text-[2rem] font-medium tracking-[-0.04em] sm:text-[2.4rem]">
              {featured.title}
            </h3>

            <p className="mt-5 max-w-[570px] text-[0.95rem] leading-7 text-[#AFC0D7]">
              {featured.description}
            </p>
          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-3 lg:border-l lg:border-t-0">
            {featured.metrics.map((metric) => (
              <div
                key={metric.value}
                className="border-b border-white/10 p-8 last:border-b-0 sm:border-b-0 sm:border-l sm:first:border-l-0 lg:p-9"
              >
                <div className="text-[2.8rem] font-medium tracking-[-0.06em] sm:text-[3.2rem]">
                  {metric.value}
                </div>

                <p className="mt-4 text-[0.85rem] leading-6 text-[#91A5C0]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting engagements */}
        <div className="mt-6 border-t border-[#D8E0EB]">
          {supporting.map((engagement) => (
            <div
              key={engagement.id}
              className="
                grid gap-5 border-b border-[#D8E0EB] py-7
                transition-colors duration-300
                hover:bg-[#F8FAFC]/70
                sm:grid-cols-[70px_1fr_auto] sm:items-center
              "
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                {engagement.number}
              </span>

              <h3 className="text-[1.25rem] font-medium tracking-[-0.025em] text-[#020B1C]">
                {engagement.title}
              </h3>

              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8492A6]">
                {engagement.eyebrow}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SelectedImpactSection;
