import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";
import northframeLogo from "../../../assets/images/northframe/northframe-logo-white.webp";
import northframeBackground from "../../../assets/images/northframe/northframe-preview-bg.jpg";

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

const platformSignals = [
  {
    number: "01",
    title: "Continuous assurance",
  },
  {
    number: "02",
    title: "Enterprise context",
  },
  {
    number: "03",
    title: "Operational memory",
  },
  {
    number: "04",
    title: "Decision intelligence",
  },
];

function NorthframeSpotlightSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        {/* Editorial introduction */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563EB]">
              Our Product
            </p>

            <h2 className="mt-7 max-w-[700px] text-balance text-[2.8rem] font-medium leading-[1.02] tracking-[-0.05em] text-[#020B1C] sm:text-[3.6rem] lg:text-[4.25rem]">
              Operational assurance for complex technology.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-[610px] text-[1.05rem] leading-8 text-[#586981]">
              Northframe brings operational context, assurance and intelligence
              together to help organizations validate change, strengthen
              resilience and make more confident technology decisions.
            </p>
          </div>
        </div>

        {/* Product stage */}
        <div className="relative mt-12 overflow-hidden rounded-[30px] bg-[#020B1C] text-white lg:mt-14">
          {/* Background image */}
          <img
            src={northframeBackground}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0 h-full w-full
              object-cover object-[58%_center]
              opacity-[0.52]
              saturate-[0.88]
            "
          />

          {/* Controlled overlay */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#020B1C]/98
              via-[#020B1C]/91
              to-[#020F2B]/72
            "
          />

          {/* Fine grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* Product identity */}
            <div className="flex min-h-[460px] flex-col justify-between border-b border-white/10 p-9 sm:p-12 lg:border-b-0 lg:border-r lg:p-14 xl:p-16">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#79ACFF]">
                    Balance Technology
                  </span>

                  <span className="h-px w-12 bg-[#79ACFF]/60" />
                </div>

                <img
                  src={northframeLogo}
                  alt="Northframe"
                  className="mt-10 h-auto w-[210px] object-contain sm:w-[250px]"
                />

                <h3 className="mt-10 max-w-[620px] text-[2.35rem] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[2.8rem]">
                  Continuous operational assurance.
                  <br />
                  Confident decisions.
                  <br />
                  Stronger governance.
                </h3>
              </div>

              <Link
                to="/northframe"
                className="group mt-14 inline-flex w-fit items-center gap-6 text-[0.95rem] font-medium text-white no-underline"
              >
                Explore Northframe

                <ArrowIcon
                  className="
                    h-[18px] w-[18px]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Platform architecture */}
            <div className="flex min-h-[460px] flex-col p-9 sm:p-12 lg:p-14 xl:p-16">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7186A3]">
                  Platform Intelligence
                </p>

                <p className="mt-6 max-w-[570px] text-[1rem] leading-8 text-[#AFC0D7]">
                  Northframe connects enterprise systems and operating context
                  to create a durable intelligence layer for assurance,
                  resilience and technology governance.
                </p>
              </div>

              <div className="mt-auto pt-16">
                <div className="border-t border-white/10">
                  {platformSignals.map((signal) => (
                    <div
                      key={signal.number}
                      className="group/signal grid grid-cols-[54px_1fr_auto] items-center border-b border-white/10 py-6"
                    >
                      <span className="text-xs font-semibold tracking-[0.16em] text-[#6FA8FF]">
                        {signal.number}
                      </span>

                      <span
                        className="
                          text-[1.05rem] font-medium text-[#E3EAF3]
                          transition-colors duration-300
                          group-hover/signal:text-white
                        "
                      >
                        {signal.title}
                      </span>

                      <span
                        className="
                          h-1.5 w-1.5 rounded-full bg-[#6FA8FF]
                          opacity-55
                          transition-[opacity,transform] duration-300
                          group-hover/signal:scale-125
                          group-hover/signal:opacity-100
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NorthframeSpotlightSection;
