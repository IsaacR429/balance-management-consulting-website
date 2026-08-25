import Container from "../../../components/ui/Container.jsx";
import { industries } from "../homeData.js";

function FinancialMarker({ index }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-[72px] w-[72px]"
    >
      <div className="absolute inset-0 rounded-full border border-blue-300/15" />
      <div className="absolute inset-[18px] rounded-full border border-blue-300/20" />

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-300/10" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-300/10" />

      <div
        className={[
          "absolute h-2 w-2 rounded-full bg-[#6FA8FF]",
          index === 0
            ? "right-[9px] top-[25px]"
            : index === 1
              ? "bottom-[11px] left-[28px]"
              : "left-[10px] top-[34px]",
        ].join(" ")}
      />
    </div>
  );
}

function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#020B1C] text-white">
      {/* Restrained technology grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Subtle light field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[680px] w-[680px] rounded-full bg-blue-500/[0.08] blur-[150px]"
      />

      <Container className="relative">
        {/* Section introduction */}
        <div className="grid gap-12 border-b border-white/10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24 lg:py-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              Financial Services
            </p>

            <h2 className="mt-7 max-w-[820px] text-[2.8rem] font-medium leading-[1.02] tracking-[-0.05em] sm:text-[3.6rem] lg:text-[4.35rem]">
              Built for environments
              <br />
              where failure has consequences.
            </h2>
          </div>

          <p className="max-w-[610px] text-[1.05rem] leading-8 text-[#AFC0D7] lg:justify-self-end">
            Balance works with financial institutions where technology
            performance, operational resilience, regulatory control and
            customer trust are inseparable.
          </p>
        </div>

        {/* Three sectors */}
        <div className="grid lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.number}
              className={[
                "group relative flex min-h-[420px] flex-col py-10 lg:px-10 lg:py-12 xl:px-12",
                index < industries.length - 1
                  ? "border-b border-white/10 lg:border-b-0"
                  : "",
                index > 0 ? "lg:border-l lg:border-white/10" : "",
              ].join(" ")}
            >
              {/* Number / visual marker */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#79ACFF]">
                  {industry.number}
                </span>

                <div
                  className="
                    opacity-70
                    transition-[opacity,transform] duration-500
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                >
                  <FinancialMarker index={index} />
                </div>
              </div>

              {/* Main copy */}
              <div className="mt-12">
                <h3 className="text-[2.2rem] font-medium tracking-[-0.045em] sm:text-[2.55rem]">
                  {industry.title}
                </h3>

                <p className="mt-6 max-w-[420px] text-[0.98rem] leading-8 text-[#AFC0D7]">
                  {industry.description}
                </p>
              </div>

              {/* Focus areas */}
              <div className="mt-auto pt-9">
                <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#657A98]">
                  Priority Areas
                </p>

                <div className="border-t border-white/10">
                  {industry.focus.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <span className="text-[0.92rem] font-medium text-[#D6E0ED]">
                        {item}
                      </span>

                      <span
                        className="
                          h-1.5 w-1.5 rounded-full bg-[#6FA8FF]
                          opacity-55 transition-opacity duration-300
                          group-hover:opacity-100
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal hover treatment */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/[0.018] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default IndustriesSection;
