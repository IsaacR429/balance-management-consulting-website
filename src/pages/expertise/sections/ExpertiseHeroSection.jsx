import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";

function ExpertiseHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020b1c] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-[-120px] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid min-h-[620px] items-center gap-16 py-20 lg:grid-cols-[1fr_0.8fr] lg:py-24">
          <div className="max-w-[760px]">
            <div className="mb-7 h-px w-10 bg-blue-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our Expertise
            </p>

            <h1 className="mt-6 max-w-[760px] text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[64px]">
              Expertise that connects strategy, operations and technology.
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-8 text-slate-300 lg:text-lg">
              BMC brings together business consulting, operational expertise
              and modern technology to help organisations move from intent to
              practical execution.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-[#03142e] transition hover:bg-blue-50"
              >
                Explore Capabilities
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-y-1"
                >
                  ↓
                </span>
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-lg border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Talk to Us
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[400px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10" />

            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20" />

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-400/[0.04]" />

            <div className="absolute left-[14%] top-[22%] h-3 w-3 rounded-full bg-blue-300/70" />
            <div className="absolute right-[17%] top-[28%] h-2.5 w-2.5 rounded-full bg-blue-300/50" />
            <div className="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-blue-300/40" />
            <div className="absolute bottom-[25%] right-[20%] h-3 w-3 rounded-full border border-blue-300/50" />

            <div className="absolute left-[18%] top-[27%] h-px w-[34%] rotate-[24deg] bg-blue-300/20" />
            <div className="absolute right-[18%] top-[35%] h-px w-[36%] -rotate-[26deg] bg-blue-300/20" />
            <div className="absolute bottom-[28%] left-[25%] h-px w-[30%] -rotate-[24deg] bg-blue-300/15" />
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-9 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Financial Services
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Banking, insurance and capital markets.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Business Transformation
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Strategy through operational execution.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Technology Enablement
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Modernisation, security, data and automation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExpertiseHeroSection;
