import { Link } from "react-router-dom";

import Container from "../../../components/ui/Container.jsx";
import heroImage from "../../../assets/images/expertise/expertise-hero.webp";

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

function DownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 4V15M6 11L10 15L14 11"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpertiseHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020B1C] text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-[0.58]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/88 to-[#020B1C]/28"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative">
        <div className="grid min-h-[470px] items-end gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:py-24">
          <div>
            <div className="mb-6 h-px w-11 bg-[#6FA8FF]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79ACFF]">
              Our Expertise
            </p>

            <h1 className="mt-7 max-w-[820px] text-balance text-[3rem] font-medium leading-[1.02] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.45rem]">
              Expertise for environments where execution, control and resilience matter.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[600px] text-[1.05rem] leading-8 text-[#B5C3D6]">
              Balance helps organizations transform critical technology while
              strengthening governance, security and the operational discipline
              required to move with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="
                  group inline-flex items-center gap-5 rounded-lg
                  bg-white px-5 py-3.5
                  text-sm font-medium text-[#020B1C] no-underline
                  transition-colors duration-300
                  hover:bg-[#F1F5F9]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#79ACFF]
                "
              >
                Explore Services

                <DownIcon
                  className="
                    h-[17px] w-[17px]
                    transition-transform duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </a>

              <Link
                to="/contact"
                className="
                  group inline-flex items-center gap-5 rounded-lg
                  border border-white/20 px-5 py-3.5
                  text-sm font-medium text-white no-underline
                  transition-[background-color,border-color] duration-300
                  hover:border-white/40 hover:bg-white/[0.05]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#79ACFF]
                "
              >
                Talk to Us

                <ArrowIcon
                  className="
                    h-[17px] w-[17px]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExpertiseHeroSection;
