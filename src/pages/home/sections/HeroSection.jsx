import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";
import heroVideo from "../../../assets/video/bmc-hero.mp4";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#020B1C] text-white lg:min-h-[720px]">
      {/* Background video */}
      <video
        className="
          absolute inset-0 h-full w-full
          scale-[1.015] object-cover
          saturate-[0.88] contrast-[1.04]
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Main dark overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(2, 11, 28, 0.98) 0%,
              rgba(2, 11, 28, 0.94) 31%,
              rgba(2, 11, 28, 0.76) 56%,
              rgba(2, 11, 28, 0.40) 100%
            )
          `,
        }}
      />

      {/* Bottom depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/75 via-transparent to-[#020B1C]/10"
      />

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[680px] flex-col justify-between py-14 lg:min-h-[720px] lg:py-16">
          {/* Main hero content */}
          <div className="max-w-[950px] pt-3 lg:pt-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#6FA8FF]/80" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8BC0FF]">
                Balance Management Consulting
              </span>
            </div>

            <h1 className="mt-7 max-w-[950px] text-[3.45rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[4.2rem] lg:text-[4.85rem]">
              <span className="block lg:whitespace-nowrap">
                Transformation built for a
              </span>

              <span className="block">more demanding world.</span>
            </h1>

            <p className="mt-8 max-w-[660px] text-base leading-8 text-white/75 lg:text-[1.08rem]">
              Balance helps organizations transform with confidence, strengthen
              resilience and unlock measurable business value through
              technology, automation and disciplined execution.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/expertise"
                className="
                  group inline-flex items-center justify-between
                  gap-8 rounded-xl bg-white px-6 py-4
                  font-medium text-[#020B1C] no-underline
                  transition-colors duration-300
                  hover:bg-[#F1F5F9]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#79ACFF]
                "
              >
                Explore Our Expertise

                <ArrowIcon
                  className="
                    h-[18px] w-[18px]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/contact"
                className="
                  group inline-flex items-center justify-between
                  gap-8 rounded-xl border border-white/25
                  bg-white/[0.04] px-6 py-4
                  font-medium text-white no-underline
                  backdrop-blur-sm
                  transition-[background-color,border-color] duration-300
                  hover:border-white/45 hover:bg-white/[0.08]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#79ACFF]
                "
              >
                Talk to Us

                <ArrowIcon
                  className="
                    h-[18px] w-[18px]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 border-t border-white/15 pt-8 lg:mt-12">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="max-w-[620px] text-[1.45rem] font-medium leading-[1.35] tracking-[-0.025em] text-white lg:text-[1.65rem]">
                Technology is advancing.
                <br />
                Expectations are rising.
                <br />
                Complexity is multiplying.
              </h2>

              <p className="max-w-[690px] text-[0.95rem] leading-7 text-white/65 lg:justify-self-end lg:text-base">
                Banks, insurers and complex enterprises must modernize and
                automate while protecting resilience, governance, regulatory
                compliance and customer trust.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
