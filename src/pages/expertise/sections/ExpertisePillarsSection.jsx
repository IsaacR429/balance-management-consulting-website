import Container from "../../../components/ui/Container.jsx";
import { expertisePillars } from "../expertiseData.js";

function ExpertisePillarsSection() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 bg-[#f8fafc] py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-5 h-px w-10 bg-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Core Capabilities
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              One connected view of BMC expertise.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Our capabilities combine business knowledge, operational
            experience and technology delivery rather than treating each
            discipline in isolation.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {expertisePillars.map((pillar) => (
            <article
              key={pillar.id}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white"
            >
              <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative overflow-hidden border-b border-slate-200 p-8 sm:p-10 lg:min-h-[360px] lg:border-b-0 lg:border-r">
                  <div
                    aria-hidden="true"
                    className="absolute right-[-60px] top-[-60px] h-60 w-60 rounded-full border border-blue-100"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute right-[20px] top-[20px] h-32 w-32 rounded-full border border-blue-50"
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-blue-600">
                      {pillar.number}
                    </span>

                    <div className="mt-20">
                      <h3 className="max-w-md text-3xl font-semibold tracking-[-0.035em] text-slate-950">
                        {pillar.title}
                      </h3>

                      <p className="mt-5 max-w-lg leading-7 text-slate-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Capabilities
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2">
                    {pillar.capabilities.map((capability, index) => (
                      <div
                        key={capability}
                        className="flex min-h-24 items-start gap-4 border-t border-slate-100 py-5 sm:pr-6"
                      >
                        <span className="mt-0.5 text-xs font-semibold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-base font-medium leading-6 text-slate-900">
                          {capability}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExpertisePillarsSection;
