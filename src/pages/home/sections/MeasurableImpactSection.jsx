import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";
import { impactHighlights } from "../../impact/impactData.js";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 10H15M11 6L15 10L11 14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MeasurableImpactSection() {
  const featured = impactHighlights[0];

  return (
    <section className="bg-[#F7F9FC] py-20 lg:py-24">
      <Container>
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Measurable Impact
            </p>

            <h2 className="mt-7 max-w-[760px] text-[2.8rem] font-medium leading-[1.02] tracking-[-0.05em] text-[#020B1C] sm:text-[3.6rem] lg:text-[4.25rem]">
              Transformation measured
              <br />
              by outcomes.
            </h2>
          </div>

          <p className="max-w-[610px] text-[1.05rem] leading-8 text-[#586981] lg:justify-self-end">
            Balance combines technology expertise, operational discipline and
            outcome-focused execution to help organizations turn complex
            challenges into tangible business outcomes.
          </p>
        </div>

        {/* Featured impact */}
        <div className="mt-14 border-y border-[#D8E0EB]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* Engagement */}
            <div className="flex min-h-[390px] flex-col justify-between border-b border-[#D8E0EB] py-14 lg:border-b-0 lg:border-r lg:py-16 lg:pr-16">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                    01
                  </span>

                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#718097]">
                    {featured.eyebrow}
                  </span>
                </div>

                <h3 className="mt-20 max-w-[520px] text-[2.5rem] font-medium leading-[1.06] tracking-[-0.045em] text-[#020B1C] sm:text-[3rem]">
                  {featured.title}
                </h3>

                <p className="mt-7 max-w-[540px] text-[1rem] leading-8 text-[#627188]">
                  {featured.description}
                </p>
              </div>

              <Link
                to="/impact"
                className="group mt-12 inline-flex w-fit items-center gap-6 text-[0.95rem] font-medium text-[#020B1C] no-underline"
              >
                Explore Our Impact

                <ArrowIcon
                  className="
                    h-[18px] w-[18px] text-[#2563EB]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid sm:grid-cols-3">
              {featured.metrics.map((metric, index) => (
                <div
                  key={metric.value}
                  className={[
                    "group flex min-h-[330px] flex-col justify-between py-12 sm:min-h-[390px] sm:px-8 lg:px-10 lg:py-16",
                    index > 0
                      ? "border-t border-[#D8E0EB] sm:border-l sm:border-t-0"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#2563EB]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        h-1.5 w-1.5 rounded-full bg-[#2563EB]
                        opacity-55
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  <div>
                    <div className="text-[3.8rem] font-medium leading-none tracking-[-0.065em] text-[#020B1C] lg:text-[4.1rem]">
                      {metric.value}
                    </div>

                    <p className="mt-7 max-w-[230px] text-[0.95rem] leading-7 text-[#627188]">
                      {metric.label}
                    </p>
                  </div>

                  <div className="h-px w-10 bg-[#AFC1D6] transition-all duration-500 group-hover:w-20 group-hover:bg-[#2563EB]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MeasurableImpactSection;
